import { useMemo } from 'react'
import useStore from '../store/store'
import ProfileSection from '../components/sections/ProfileSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import HistorySection from '../components/sections/HistorySection'

const SectionProvider = () => {
  const { now } = useStore((state) => state)

  const section: React.ReactNode = useMemo(() => {
    switch (now) {
      case 'PROFILE':
        return <ProfileSection />

      case 'HISTORY':
        return <HistorySection />

      case 'PORTFOLIO':
        return <PortfolioSection />

      default:
        return <div>Not Found</div>
    }
  }, [now])

  return section
}

export default SectionProvider
