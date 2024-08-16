import "./App.css";
import Body from "./view/Body/Body";
import AboutUs from "./view/Body/Sections/About_Us/AboutUs";
import WhyChooseUs from "./view/Body/Sections/Why_Choose_Us/WhyChooseUs.jsx";
import Footer from "./view/Footer/Footer.jsx";
import Header from "./view/Header/Header";
import Navbar from "./view/Navbar/Navbar";

function App() {
  return (
    <div className="main">
      <Header />

      <Body />
      <Footer />
    </div>
  );
}

export default App;
