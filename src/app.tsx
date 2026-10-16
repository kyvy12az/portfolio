import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
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
      <div className="relative z-0 min-h-screen bg-primary text-white">
        <div className="bg-hero-pattern">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />

        {/* Contact */}
        <div className="relative z-0 border-t border-white/[0.06]">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
