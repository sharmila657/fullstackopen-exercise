const Total = (props) => {
    const exercisesArray = props.parts.map((part) => part.exercises); 
    const totalExercises = exercisesArray.reduce((total, exercises) => total + exercises, 0);
    return (
      <b>Total of {totalExercises} exercises</b>
    );
  };
  
  export default Total;