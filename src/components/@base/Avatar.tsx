interface Props {
  img: string
  isIntro?: true
}

const Avatar = ({ img, isIntro }: Props) => {
  return (
    <div
      style={{ backgroundImage: `url("${img}")`, backgroundSize: 'cover' }}
      className={`${isIntro ? 'w-12 h-12 mb-10' : 'w-10 h-10'} rounded-[50%] mt-5 `}
    />
  )
}

export default Avatar
