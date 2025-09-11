import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import TravelView from './views/TravelView'
import AppLayout from './layouts/AppLayout'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<App/>}></Route>
          <Route path=':id' element={<TravelView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}