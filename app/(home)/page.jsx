import Advisor from "@/components/Advisor";
import Mentor from "@/components/Mentor";
import University from "@/components/University";

const HomePage = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <University />
      <Mentor />
      <Advisor />
    </div>
  );
};

export default HomePage;
