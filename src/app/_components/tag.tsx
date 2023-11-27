type PropsType = {
  tagName: string
  bgColor: string
  color: string
}

export default function Tag({ tagName, bgColor, color }: PropsType) {
  return (
    <div
      style={{
        background: `${bgColor}`,
        color: `${color}`,
        borderRadius: '0.75rem',
        padding: '0.375rem',
        textTransform: 'capitalize',
      }}
    >
      {tagName}
    </div>
  )
}
