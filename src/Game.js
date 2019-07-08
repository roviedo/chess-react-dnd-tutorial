export function canMoveKnight(toX, toY, position) {
  const [x, y] = position;
  const dx = toX - x
  const dy = toY - y

  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  )
}

export function canMoveRook(toX, toY, position) {
  const [x, y] = position;
  const dx = toX - x
  const dy = toY - y

  return (
    (Math.abs(dx) > 0 && Math.abs(dy) === 0) ||
    (Math.abs(dx) === 0 && Math.abs(dy) > 0)
  )
}