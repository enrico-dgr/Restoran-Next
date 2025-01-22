import {
  forwardRef,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useMemo,
} from 'react'

type Props = PropsWithChildren<{
  className: string
  containerClassName?: string
}>

const Section: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { className, children, containerClassName },
  ref
) => {
  const classNameOuterDiv = useMemo(() => {
    let classes = 'container-xxl py-5'

    if (containerClassName) {
      classes += ' ' + containerClassName
    }

    return classes
  }, [containerClassName])

  const classNameDiv = useMemo(() => {
    let classes = 'container'

    if (className) {
      classes += ' ' + className
    }

    return classes
  }, [className])

  return (
    <div ref={ref} className={classNameOuterDiv}>
      <div className={classNameDiv}>{children}</div>
    </div>
  )
}

export default forwardRef<HTMLDivElement, Props>(Section)
