'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faBars } from '@fortawesome/free-solid-svg-icons'
import { useMemo, useState, useCallback } from 'react'
import routes from '../../constants/routes'
import LinkOrGroup, { NavbarLink } from './LinkOrGroup'
import './Navbar.scss'
import useScrollThreshold from '../../hooks/useScrollThreshold/useScrollThreshold'
import Link from 'next/link'

export default function Navbar() {
  const [showLinksContainer, setShowLinksContainer] = useState(false)
  const isScrolled = useScrollThreshold(40)

  const links = useMemo<NavbarLink[]>(
    () => [
      {
        group: false,
        name: 'home',
      },
      {
        group: false,
        name: 'about',
      },
      {
        group: false,
        name: 'service',
      },
      {
        group: false,
        name: 'menu',
      },
      {
        group: true,
        groupName: 'Pages',
        links: [
          {
            group: false,
            name: 'booking',
          },
          {
            group: false,
            name: 'team',
          },
          {
            group: false,
            name: 'testimonial',
          },
        ],
      },
      {
        group: false,
        name: 'contact',
      },
    ],
    []
  )

  const toggleLinks = useCallback(() => {
    setShowLinksContainer(prev => !prev)
  }, [])

  const linksContainerClass = useMemo(() => {
    let classes = 'navbar-links__container'

    if (showLinksContainer) {
      classes += ' show'
    }

    return classes
  }, [showLinksContainer])

  const linksElements = useMemo(
    () =>
      links.map(linkOrGroup => {
        return (
          <LinkOrGroup
            key={
              linkOrGroup.group
                ? linkOrGroup.groupName
                : routes[linkOrGroup.name].absolutePath
            }
            link={linkOrGroup}
          />
        )
      }),
    [links]
  )

  return (
    <nav
      className={
        'navbar px-4 px-lg-5 py-3 py-lg-0' +
        (isScrolled ? ' fixed' : '')
      }
    >
      <Link className="navbar-brand" href="/">
        <h1 className="text-primary m-0">
          <FontAwesomeIcon icon={faUtensils} className="mr-3" />
          Restoran
        </h1>
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggleLinks}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={linksContainerClass} id="navbar-collapse">
        <div className="navbar-links pr-4">{linksElements}</div>
        <a href="" className="btn btn-primary py-2 px-4">
          Book A Table
        </a>
      </div>
    </nav>
  )
}
