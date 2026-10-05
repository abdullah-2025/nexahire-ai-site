import {
  Children,
  cloneElement,
  isValidElement,
  type ReactNode,
  type HTMLAttributes,
} from 'react'

function words(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === 'string')
      return child
        .split(/(\s+)/)
        .filter(Boolean)
        .map((word, index) =>
          /^\s+$/.test(word) ? (
            ' '
          ) : (
            <span className="sw" key={index}>
              {word}
            </span>
          ),
        )
    if (isValidElement<{ children?: ReactNode }>(child))
      return cloneElement(child, {}, words(child.props.children))
    return child
  })
}

export default function ScrubHeading({
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 data-scrub="" {...props}>
      {words(children)}
    </h2>
  )
}
