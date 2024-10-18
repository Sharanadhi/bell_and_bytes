import './App.scss'
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Courses from './components/Courses/Courses';
import { courses } from './data/courses.js';

function App() {
  return (
    <>
      <Header />
      <Courses 
        data={courses}
      />
    </>
  )
}

export default App
