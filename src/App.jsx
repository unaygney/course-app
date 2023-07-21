import './App.css'
import Header from './components/Header'
import CourseContext from './context/CourseContext.jsx'
import { useEffect ,useContext } from "react";
import CoursesList from './components/CoursesList';

function App() {
const {getData , Courses} = useContext(CourseContext);


useEffect(() => {
  getData();
}, [])
  return (
<div className='app'>
    <Header/>
    <CoursesList />
    


</div>
  )
}

export default App
