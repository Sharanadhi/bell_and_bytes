import './App.scss'
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import RegisterForm from './components/RegsiterForm/RegisterForm';
import Courses from './components/Courses/Courses';
import { courses } from './data/courses.js';
import CourseDetails from './components/CourseDetails/CourseDetails.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>      
      <Header />
      {/* <Courses 
        data={courses}
      />
      <RegisterForm /> */}
       <Routes>
        <Route path="/" element={<Courses data={courses} />} />
        <Route path="/course/:id" element={<CourseDetails courses={courses} />} />
        <Route path="/register/:courseName/:courseDuration" element={<RegisterForm />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
