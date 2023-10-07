import React from 'react'

interface TextProps {
  elem: keyof JSX.IntrinsicElements
  children: React.ReactNode 
  className: string
}

const Text: React.FC<TextProps> = ({ elem, children, className, ...rest }) => {
  const Element = elem as keyof JSX.IntrinsicElements

  return <Element className={className}{...rest}>{children}</Element>
}

export default Text
