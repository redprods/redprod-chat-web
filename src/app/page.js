import { HomePageImage, HomePageText } from "components";

const Home = () => {
  return (
    <section className="Wrapper">
      { <HomePageText /> }
      <HomePageImage/>
    </section>
  );
};

export default Home;
