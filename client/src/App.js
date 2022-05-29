import Home from "./directories/Home";
import Dashboard from "./directories/Dashboard";
import Onboarding from "./directories/Onboarding";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const App = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const authToken = cookies.AuthToken
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {authToken &&<Route path="/dashboard" element={<Dashboard />} />}
        {authToken &&<Route path="/Onboarding" element={<Onboarding />} />}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
