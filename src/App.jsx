import './App.scss'
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <>
      <Header />
      <Courses />
    </>
  )
}

export default App
