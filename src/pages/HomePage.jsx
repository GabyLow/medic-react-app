import { Navbar } from "../components/Navbar";
import HomeCard from "../components/HomeCard";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <HomeCard/>
      </div>
    </>
  );
};

export default HomePage;
