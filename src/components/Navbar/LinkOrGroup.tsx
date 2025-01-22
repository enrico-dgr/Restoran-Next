import Link from 'next/link'
import routes from '../../constants/routes'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export type NavbarLink =
  | {
      group: false
      name: keyof typeof routes
      links?: undefined
    }
  | {
      group: true
      groupName: string
      links: NavbarLink[]
    }

export default function LinkOrGroup({
  link,
  layer = 0,
}: {
  className?: string
  link: NavbarLink
  layer?: number
}) {
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutDetect = (e: TouchEvent) => {
      const touch = e.changedTouches[0]
      const element = document.elementFromPoint(
        touch.clientX,
        touch.clientY
      ) as HTMLElement | null

      let tappedOut = false

      if (element && ref.current) {
        tappedOut = !ref.current.contains(element)
      }

      setShow(s => tappedOut ? false : s)
    }

    document.addEventListener('touchend', clickOutDetect)

    return () => {
      document.removeEventListener('touchend', clickOutDetect)
    }
  }, [])

  const pathname = usePathname()

  const checkActive = useCallback(
    (linkOrGroup: NavbarLink) => {
      let active = false

      if (linkOrGroup.group) {
        active = linkOrGroup.links.findIndex(checkActive) !== -1
      } else {
        active = pathname === routes[linkOrGroup.name].absolutePath
      }

      return active
    },
    [pathname]
  )

  const active = checkActive(link)

  const classModifiers =
    (layer === 0 ? 'navbar-item' : '') + (active ? ' active' : '')

  const links = useMemo(() => {
    if (!link.group) {
      return []
    }

    return link.links.map(link => {
      return (
        <LinkOrGroup
          key={link.group ? link.groupName : link.name}
          link={link}
          layer={layer + 1}
        />
      )
    })
  }, [link.group, link.links, layer])

  if (!link.group) {
    const publicName = routes[link.name].publicName

    return (
      <Link
        href={routes[link.name].absolutePath}
        className={`navbar-link text-white ${classModifiers}`}
      >
        {publicName}
      </Link>
    )
  }

  return (
    <div
      className={`dropdown ${classModifiers} ${show ? 'show' : ''}`}
      onClick={() => setShow(s => !s)}
      ref={ref}
    >
      <span className="navbar-link text-white dropdown-toggle">
        {link.groupName}
      </span>
      <div className="dropdown-menu py-2 px-0 m-0">{links}</div>
    </div>
  )
}
