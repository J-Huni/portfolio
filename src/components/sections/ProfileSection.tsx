import React from 'react'
import Section from '../Section'
import SectionTitle from '../SectionTitle'
import SkillsArea from '../SkillsArea'

const ProfileSection = () => {
  return (
    <Section>
      <SectionTitle text='About' colorText='Me' />
      <div className='py-5 text-2xl font-bold'>
        <p>안녕하세요.</p>
        <p>저는 Front-End 직군에서 업무를 진행하고 있습니다.</p>
        <br />
        <p>Javascript를 가장 자신있고, 좋아합니다.</p>
        <p>Back-End 및 SQL, PL/SQL 을 활용한 프로젝트로 경험한 적 있으며,</p>
        <p>현재는 Next js 와 Nest js 를 활용하여 웹 사이트 제작을 하는 업무를 하고 있습니다.</p>
        <br />
        <p>급변하는 Javascript 환경에서 트렌드에 뒤쳐지지 않으려,</p>
        <p>항상 배우고 받아들이는 자세로</p>
        <p>어제보다 나은 오늘의 제가 되려 노력하고 있습니다.</p>
        <p>읽어주셔서 감사합니다.</p>
      </div>
      <SectionTitle text='Tech' colorText='Skills' />
      <p className='text-center text-2xl font-bold mb-10'>
        업무에 필요한 다양한 스킬을 보유하고 있습니다.
      </p>
      <SkillsArea />
    </Section>
  )
}

export default ProfileSection
