import Layout from './layout/Layout'
import './styles/globals.css'
import SectionProvider from './provider/SectionProvider'

function App() {
  return (
    <Layout>
      <SectionProvider />
    </Layout>
  )
}

export default App
