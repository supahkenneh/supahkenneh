export const Card = ({ content }) => {
  let classes = 'self-center text-6xl font-mono font-black';
  return (
    <div className={classes}>
      {content}
    </div>
  )
}