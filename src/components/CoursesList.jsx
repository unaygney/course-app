import { useContext } from "react";
import CourseContext from "../context/CourseContext";
import CourseItem from "./CourseItem";


function CoursesList() {

const {Courses} = useContext(CourseContext)


    return ( 
        <div className="main-course-container">
            {Courses.map((course , idx) => {
                return <CourseItem key={idx} course={course} />
            })}

        </div>
     );
}

export default CoursesList;