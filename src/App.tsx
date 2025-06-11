import { Routes, Route, Navigate, HashRouter} from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage";
import './styles/main.scss'
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./pages/Form/Form"
import RegisterForm from "./pages/Register/Register";

const App = () => {

  return (
    <HashRouter>
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
            <RegisterForm/>
            <Footer/>
          </React.Fragment>} />

        <Route path="/ajuda" element={<div>Ajuda...</div>} />
        <Route path="/viagens" element={<div>Minhas Viagens...</div>} />

        <Route path="*" element={<Navigate to='/home' replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
