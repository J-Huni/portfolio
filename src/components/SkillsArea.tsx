import Skills from './@base/Skills'
import TitleWithLine from './@base/TitleWithLine'

const SkillsArea = () => {
  return (
    <div>
      <TitleWithLine>Front-End Stack</TitleWithLine>
      <div className='grid grid-cols-6 gap-16 w-full h-full'>
        <Skills src='/assets/imgs/js_logo.png' name='Javascript' />
        <Skills src='/assets/imgs/ts_logo.png' name='Typescript' />
        <Skills src='/assets/imgs/react_logo.png' name='React Js' />
        <Skills src='/assets/imgs/tailwind_logo.svg' name='Tailwind' />
        <Skills src='/assets/imgs/redux_logo.svg' name='Redux' />
        <Skills src='/assets/imgs/recoil_logo.svg' name='Recoil' />
        <Skills src='/assets/imgs/next_logo.svg' name='Next Js' />
      </div>
      <TitleWithLine>Back-End Stack</TitleWithLine>
      <div className='grid grid-cols-6 gap-16 w-full h-full'>
        <Skills src='/assets/imgs/node_logo.svg' name='NodeJs' />
        <Skills src='/assets/imgs/nest_logo.svg' name='Nest js' />
        <Skills src='/assets/imgs/mysql_logo.png' name='Mysql' />
        <Skills src='/assets/imgs/mongo_logo.png' name='MongoDB' />
      </div>
      <TitleWithLine>Infra Stack</TitleWithLine>
      <div className='grid grid-cols-6 gap-16 w-full h-full'>
        <Skills src='/assets/imgs/docker_logo.svg' name='Docker' />
      </div>
      <TitleWithLine>Repository</TitleWithLine>
      <div className='grid grid-cols-6 gap-16 w-full h-full'>
        <Skills src='/assets/imgs/git_logo.png' name='Git' />
        <Skills src='/assets/imgs/github_logo.svg' name='GitHub' />
        <Skills src='/assets/imgs/gitlab_logo.svg' name='GitLab' />
      </div>
    </div>
  )
}

export default SkillsArea
