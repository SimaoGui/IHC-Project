import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage";
import './styles/main.scss'
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./pages/Form/Form"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={
          <React.Fragment>
            <Header/>
            <Homepage/>
            <Footer/>
          </React.Fragment>} />
        <Route path="/login" element={
          <React.Fragment>
            <Header/>
            <Form/>
            <Footer/>
          </React.Fragment>} />
        <Route path="/register" element={
          <React.Fragment>
            <Header/>
            <Form/>
            <Footer/>
          </React.Fragment>} />

        <Route path="/ajuda" element={<div>Ajuda...</div>} />
        <Route path="/viagens" element={<div>Minhas Viagens...</div>} />

        <Route path="*" element={<Navigate to='/home' replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;