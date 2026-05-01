import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Content from '../components/Content'
import Footer from '../components/Footer'
import '../assets/css/style.css'

export default function LandingPage() {
  return (
    <div>
      <Introduction />
      <Header />
      <Content />
      <Footer />
    </div>
  )
}
