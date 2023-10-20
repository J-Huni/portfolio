interface Props {
  text: string
  colorText?: string
}

const SectionTitle = ({ text, colorText }: Props) => (
  <div className='text-center mb-6'>
    <hr className=' bg-blue-800 h-2 m-auto w-12 mb-2' />
    <span className='font-bold text-3xl'>{text}</span>
    {colorText && <span className='font-bold text-3xl ml-2 text-blue-800'>{colorText}</span>}
  </div>
)

export default SectionTitle
