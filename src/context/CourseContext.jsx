import { createContext, useState } from "react";
import axios from "axios";

const CourseContext = createContext();

function Provider({ children }) {
  const [Courses, setCourses] = useState([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/courses");
    setCourses(response.data);
  };

  const deleteCourse = async (id) => {
    const response = await axios.delete(`http://localhost:3000/courses/${id}`)
    const courseAfterDeleting = Courses.filter((course) => {
       return course.id !== id;
    })
    setCourses(courseAfterDeleting)
  }

  const sharedData = {
    Courses,
    getData,
    deleteCourse,
  };
  return (
    <CourseContext.Provider value={sharedData}>
      {children}
    </CourseContext.Provider>
  );
}

export default CourseContext;
export { Provider };
