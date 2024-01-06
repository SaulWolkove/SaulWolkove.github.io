import styles from "./index.css";
import { BrowserRouter as Router, Route, Routes, useNavigate, useHistory } from "react-router-dom";
import Landing from "./components/Landing";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



function App() {
  const history = useHistory();

  useEffect(() => {
    // Use the history object to push the desired route
    history.push('/about');
  }, [history]);
  return (
      <Router>
          <Banner/>
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<About/>} />
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>

          </Routes>
      </Router>
  );
}

export default App;
