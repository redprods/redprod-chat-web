import { HomePageImage, HomePageText } from "components";
import { Login } from "components/Login";

const Home = () => {
  return (
    <section className="wrapper">
      <HomePageText /> 
      {/* <HomePageImage/> */}
      <Login/>
    </section>
  );
};

export default Home;
