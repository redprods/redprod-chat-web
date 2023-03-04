import { HomePageImage, HomePageText } from "components";
import { Login } from "components/Login";

const Home = () => {
  return (
    <section className="wrapper">
      <HomePageText /> 
      { <HomePageImage/> }
      <div className="copyright">
        <h3>Powered by <span>REDPROD</span></h3>
      </div>
    </section>
  );
};

export default Home;
