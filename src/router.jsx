import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import TravelView from './views/TravelView'
import AppLayout from './layouts/AppLayout'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<App />} />
          <Route path=":id" element={<TravelView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}