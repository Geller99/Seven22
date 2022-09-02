import "../src/css/main.scss";
import { HomePage } from "./components/HomePage";
import NavBar from "./components/NavBar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import MintPage from "./pages/MintPage";

// swiper css 
// import "swiper/css/bundle";
import Terms from "./pages/TermsPage";
import TreasurePage from "./pages/TreasurePage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import SocialMediafooter from "./components/SocialMediaFooter";

function App() {
  return (
    <div className="App">
      <span style={{ color: 'white' }}>test</span>
      <Router>
        <NavBar />
        <Routes >
          <Route exact path="/" element={<><HomePage /></>} />
          <Route exact path="/mint" element={<MintPage />} />
          <Route exact path="/treasure" element={<TreasurePage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/blog/:id" element={<BlogDetailPage />} />
          <Route exact path="/terms" element={<Terms />} />
        </Routes>
        {/* <Footer /> */}
        <SocialMediafooter />
      </Router>
    </div>
  );
}

export default App;
