export function Square ({ children, updateBoard, index, isSelected }) {
  const className = `square ${isSelected ? 'selected' : ''}`

  return (
    <div className={className} onClick={() => updateBoard(index)}>
      {children}
    </div>
  )
}
