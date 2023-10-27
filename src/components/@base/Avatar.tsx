interface Props {
  img: string
}

const Avatar = ({ img }: Props) => {
  return (
    <div
      style={{ backgroundImage: `url("${img}")`, backgroundSize: 'cover' }}
      className='w-20 h-20 rounded-[50%] mr-5'
    />
  )
}

export default Avatar
