import Dot from '../@base/Dot'
import Section from '../Section'
import SectionTitle from '../SectionTitle'

const Career = ({ text, date }: { text: string; date: string }) => {
  return (
    <div className='flex items-center gap-3 mb-4'>
      <div className='h-full'>
        <div className='w-1 h-1 bg-blue-400 p-1 rounded-[50%]' />
      </div>
      <span className='text-2xl font-bold'>{text}</span>
      <span className='text-2xl font-bold'>[ {date} ]</span>
    </div>
  )
}

const HistorySection = () => {
  return (
    <Section>
      <SectionTitle text='HISTORY' />
      <div className='flex gap-4'>
        <div>
          <Dot />
          <hr className='w-[2px] bg-slate-500 mx-[9px] h-full' />
        </div>
        <div className='bg-slate-200 border-2 w-full p-4 rounded-md h-full'>
          <p className='text-3xl font-bold text-blue-950'>2019.11 ~</p>
          <div className='flex gap-4  items-center border-b-2 border-slate-300 py-4 mb-4'>
            <img src='/assets/imgs/helix_logo.png' className='p-2' />
            <div className='ml-2'>
              <p className='text-2xl font-bold'>헬릭스테크</p>
              <div className='flex gap-4'>
                <span className='text-xl font-bold'>소속: 시스템 솔루션</span>
                <span className='text-xl font-bold'>직책: 주임연구원</span>
                <span className='text-xl font-bold'>포지션: Front-End Developer</span>
              </div>
            </div>
          </div>
          <Career text='Front-End Part Lead 개발' date='2022.03 ~ ' />
          <Career text='ktwiz 통합운영센터 개발' date='2023.04 ~ 2023.06' />
          <Career text='광주 재난 안전 전광판 개발' date='2023.03 ~ 2023.04' />
          <Career text='MDCall 서비스 CMS 개발' date='2022.06 ~ 2022.11' />
          <Career text='POC 프로젝트' date='2022.03 ~ 2022.06' />
          <Career text='RangTalk 온라인 청약 사이트 개발' date='2021.12 ~ 2022.03' />
          <Career text='RangTalk CMS 사이트 개발' date='2021.09 ~ 2021.11' />
          <Career text='RangTalk 렌딩 사이트 개발' date='2021.07 ~ 2021.09' />
          <Career text='자사 홈페이지 리뉴얼' date='2021.04 ~ 2021.06' />
          <Career text='kbl cms 개발 (구)' date='2020.10 ~ 2021.02' />
          <Career text='kbl 통합 사이트 리뉴얼 (구)' date='2020.10 ~ 2020.12' />
          <Career text='ktwiz 리뉴얼작업' date='2020.03 ~ 2020.06' />
        </div>
      </div>
    </Section>
  )
}

export default HistorySection
