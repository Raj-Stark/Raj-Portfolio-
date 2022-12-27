import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <SocialLinks></SocialLinks>
      <About></About>
      <Portfolio></Portfolio>
      <TechStack></TechStack>
      <Contact></Contact>
    </div>
  );
}

export default App;
