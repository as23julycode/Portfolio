import "./App.css";
import Layout from "./component/Layout/Layout";
import ScrollUpArrow from "./component/ScrollUpArrow/ScrollUpArrow";
import MobileNav from "./component/mobilenav/MobileNav";
import { useTheme } from "./context/TheamContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Footer from "./pages/Footer/Footer";
import Listproject from "./pages/Projects/ListofProject/Listproject";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        
          <Layout />
        

        <div class="containerother">
          <About />
          <WorkExp />
          <Listproject />
          <Techstack />
          <Education />
          {/* <Projects/> */}
          <Contact />
          <Footer />
        </div>
        <ScrollUpArrow />
      </div>
    </>
  );
}

export default App;
