import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";
import AdminBanner from "./components/admin-banner";

// App
const App = () => {
  if (window.location.pathname === "/admin") {
    return <AdminBanner />;
  }

  return (
    <BrowserRouter>
      <Banner />
      <div className="relative z-0 bg-primary">
        <div className="hero-surface">
          <Navbar />
          <Hero />
        </div>
        <Works />
        <About />
        <Tech />
        <Experience />

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
