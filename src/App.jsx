import { BrowserRouter } from "react-router-dom"
import { routes } from "./Router/routes"


function App() {
  return (
    <BrowserRouter>
      { routes() }
    </BrowserRouter>
  )
}

export default App
