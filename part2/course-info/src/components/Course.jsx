import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div>
      {course.map((val) => {
        return (
          <div key={val.id}>
            <Header course1={val.name} />
                <Content content={val.parts} />
                <Total total={val.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
