import './App.scss'
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import RegisterForm from './components/RegsiterForm/RegisterForm';
import Courses from './components/Courses/Courses';
import { courses } from './data/courses.js';

function App() {
  return (
    <>      
      <Header />
      <Courses 
        data={courses}
      />
      <RegisterForm courseName='IOT' courseDuration='10mins' />
    </>
  )
}

export default App
