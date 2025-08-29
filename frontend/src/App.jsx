
import { Routes , BrowserRouter , Route } from "react-router-dom"
import NotFound from "./pages/Notfound"
import Home from "./pages/Home"
import { Toaster } from "@/components/ui/toaster"


function App() {
  

  return (
    <>
     <Toaster />
    <BrowserRouter>
      <Routes>
          <Route index element={<Home/>}></Route>
          <Route path ="*" element ={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
