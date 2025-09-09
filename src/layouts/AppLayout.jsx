import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function AppLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer />
    </div>
  )
}