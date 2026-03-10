import {Link} from "react-router-dom";

function Courses() {

  const courses = [
    {id:1,name:"React"},
    {id:2,name:"NodeJS"},
    {id:3,name:"Python"},
    {id:4,name:"Java"},
    {id:5,name:"Data Structures"}
  ];

  return (
    <div>
      <h2>Courses</h2>

      {courses.map(course => (
        <div key={course.id}>
          <Link to={`/courses/${course.id}`}>
            {course.name}
          </Link>
        </div>
      ))}

    </div>
  );
}

export default Courses;