const SectionTitle = ({ text, align = 'left', color = 'text-white' }) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${color} ${alignClasses[align]} mb-8`}>
      {text}
    </h2>
  )
}

export default SectionTitle

