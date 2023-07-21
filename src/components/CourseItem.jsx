
import CourseContext from "../context/CourseContext";
import { useContext } from "react";

function CourseItem({course}) {

    const {deleteCourse} = useContext(CourseContext)


    const handleDeleteClick = () => {
        deleteCourse(course.id)
     
    }

    return ( 
        <div className="course-container">
            <h3 className="course-title">{course.title}</h3>
            <h5 className="course-price">{course.price}TL</h5>
            <h5 className="course-content">{course.content}</h5>
            <button className="btn-delete" onClick={handleDeleteClick}>Sil</button>
        </div>
     );
}

export default CourseItem;