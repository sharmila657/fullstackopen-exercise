const Total = ({ total }) => {
  const totalVal = total.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);
  return <h3>{`The total value is ${totalVal}`}</h3>;
};

export default Total;
