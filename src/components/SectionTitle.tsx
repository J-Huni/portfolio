interface Props {
  text: string
  colorText?: string
}

const SectionTitle = ({ text, colorText }: Props) => (
  <div className='text-center mb-6 max-md:mb-3'>
    <hr className=' bg-blue-800 h-2 m-auto w-12 mb-2 max-lg:w-10 max-lg:h-1 max-lg:mb-0' />
    <span className='font-bold text-3xl max-lg:text-xl'>{text}</span>
    {colorText && (
      <span className='font-bold text-3xl ml-2 text-blue-800 max-lg:text-xl'>{colorText}</span>
    )}
  </div>
)

export default SectionTitle
