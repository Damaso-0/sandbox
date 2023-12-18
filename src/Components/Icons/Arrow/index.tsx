interface iArrow {
  size?: number
  color?: string
  direction?: 'left' | 'right' | 'up' | 'down'
}

const Arrow = ({ size = 24, color = '#fff', direction = 'right' }: iArrow) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      width={size}
      height={size}
      fill={color}
      style={{
        transform:
          direction === 'right'
            ? 'rotate(0deg)'
            : direction === 'left'
            ? 'rotate(180deg)'
            : direction === 'up'
            ? 'rotate(-90deg)'
            : direction === 'down'
            ? 'rotate(90deg)'
            : '',
      }}>
      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
    </svg>
  )
}

export { Arrow }
