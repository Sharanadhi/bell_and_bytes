import './App.scss'
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import RegisterForm from './components/RegsiterForm/RegisterForm';

function App() {
  return (
    <>
      <Header />
      <RegisterForm />
    </>
  )
}

export default App
