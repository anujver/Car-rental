import Benifits from "./Components/Benifits";
import Card from "./Components/Card";
import Feedback from "./Components/Feedbacks";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";
import Plans from "./Components/plans";
import Questions from "./Components/questions";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Card />
      <Benifits />
      <Plans />
      <Feedback />
      <Questions />
      <Footer />
    </>
  );
};

export default Homepage;
