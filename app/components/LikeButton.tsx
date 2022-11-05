'use client'
export function LikeButton () {
  const handleClick = () => {
    console.log('Like')
  }
  return (
    <button onClick={handleClick}>
      Like
    </button>
  )
}
