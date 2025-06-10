import { BrowserRouter, Routes, Route, Navigate, Form} from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage";
import './styles/main.scss'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        
        <Route path="/ajuda" element={<div>Ajuda...</div>} />
        <Route path="/viagens" element={<div>Minhas Viagens...</div>} />
        <Route path="/login" element={<Form />} />
        <Route path="*" element={<Navigate to='/home' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;