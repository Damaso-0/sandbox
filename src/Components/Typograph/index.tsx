import Link from 'next/link'
import styles from './index.module.css'

interface ITypograph {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export const H1 = ({ children, style, className }: ITypograph) => (
  <h1 className={`${styles.h1} ${className}`} style={style}>
    {children}
  </h1>
)

export const H2 = ({ children, style, className }: ITypograph) => (
  <h2 className={`${styles.h2} ${className}`} style={style}>
    {children}
  </h2>
)

export const H3 = ({ children, style, className }: ITypograph) => (
  <h3 className={`${styles.h3} ${className}`} style={style}>
    {children}
  </h3>
)

export const H4 = ({ children, style, className }: ITypograph) => (
  <h4 className={`${styles.h4} ${className}`} style={style}>
    {children}
  </h4>
)

export const P = ({ children, style, className }: ITypograph) => (
  <p className={`${styles.p} ${className}`} style={style}>
    {children}
  </p>
)

export const Span = ({ children, style, className }: ITypograph) => (
  <span className={`${styles.span} ${className}`} style={style}>
    {children}
  </span>
)

interface ITypographLink extends ITypograph {
  href: string
  target?: '_blank' | '_self'
}

export const A = ({
  children,
  style,
  className,
  href,
  target = '_self',
}: ITypographLink) => (
  <Link
    className={`${styles.a} ${className}`}
    style={style}
    target={target}
    href={href}
    rel="noreferrer">
    {children}
  </Link>
)
