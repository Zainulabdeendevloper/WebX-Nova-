const Card = ({ children, bgColor = 'bg-white', padding = 'p-6', rounded = 'rounded-lg' }) => {
  return (
    <div className={`${bgColor} ${padding} ${rounded} shadow-lg`}>
      {children}
    </div>
  )
}

export default Card

