import advisorData from "../public/advisor.json";

const Advisor = () => {
  return (
    <div>
      {advisorData.map((item) => (
        <div
          key={item.id}
          className={`flex items-center lg:w-[60%] mx-auto mb-10 gap-10 ${
            item.id % 2 === 0 ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={item.image} alt={`Photo of ${item.name}`} />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p>{item.designation}</p>
            {item.id !== 3 && (
              <button className="btn btn-primary">Message Him Now</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advisor;
