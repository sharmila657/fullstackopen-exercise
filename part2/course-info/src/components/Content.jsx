import Part from "./Part";

const Content = ({ content }) => {
  return (
    <div>
      {content.map((val) => {
        return (
          <div key={val.id}>
          <Part name={val.name} exercise={val.exercises}/>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
