import { ComputersCanvas } from "./canvas";
import { PROJECTS } from "../constants";

export const Hero = () => (
  <section className="portfolio-hero">
    <div className="hero-copy">
      <p className="eyebrow"><span /> NGUYỄN KỲ VỸ · DEVELOPER</p>
      <h1>Biến ý tưởng<br />thành trải nghiệm<br /><span>có dấu ấn.</span></h1>
      <p className="hero-description">Xin chào, tôi là Kỳ Vỹ. Tôi xây dựng giao diện web, ứng dụng và trải nghiệm 3D — với sự chăm chút trong từng chi tiết.</p>
      <div className="hero-actions">
        <a className="button-primary" href="#projects">Khám phá dự án <span aria-hidden="true">↗</span></a>
        <a className="button-secondary" href="#contact">Cùng trao đổi <span aria-hidden="true">→</span></a>
      </div>
      <div className="hero-stack"><span>REACT</span><span>TYPESCRIPT</span><span>THREE.JS</span><span>NODE.JS</span></div>
    </div>
    <div className="hero-studio">
      <div className="studio-bar"><span><i /><i /><i /></span><span>MY DIGITAL WORKSPACE</span><span>01 / 02</span></div>
      <div className="studio-title"><span>Ý tưởng. Mã nguồn. Sản phẩm.</span><p>Một góc làm việc,<br />nhiều khả năng.</p></div>
      <div className="studio-canvas"><ComputersCanvas /></div>
      <div className="studio-bottom"><span>Kéo để khám phá không gian 3D</span><span aria-hidden="true">↔</span></div>
    </div>
    <div className="hero-footnote"><span>PORTFOLIO / SELECTED WORK</span><a href="#projects">{String(PROJECTS.length).padStart(2, '0')} dự án · Khám phá bên dưới ↓</a></div>
  </section>
);
