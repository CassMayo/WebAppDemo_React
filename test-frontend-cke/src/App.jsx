import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"

const App = () => {
  return(
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App