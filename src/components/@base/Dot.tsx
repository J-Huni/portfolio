const Dot = () => {
  return (
    <div className='relative w-5 h-5'>
      <div className='w-full h-full border-4 border-blue-600 rounded-[50%] p-1 animate-ping absolute' />
      <div className='w-full h-full border-4 border-blue-600 rounded-[50%] p-1 relative' />
    </div>
  )
}

export default Dot
