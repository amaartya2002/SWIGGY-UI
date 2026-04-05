import resList from "../utils/mockData";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {resList.map((res, index) => {
        return <div className="shimmer-card" key={index}></div>;
      })}
    </div>
  );
};

export default Shimmer;
