import { TECHNOLOGIES } from "../constants";
import { SectionWrapper } from "../hoc";
export const Tech = () => (
  <SectionWrapper><div className="section-heading"><div><p className="eyebrow">TOOLKIT</p><h2>Công nghệ sử dụng<span>.</span></h2></div></div><div className="technology-grid">{TECHNOLOGIES.map(tech=><div key={tech.name}><img src={tech.icon} alt="" loading="lazy"/><span>{tech.name}</span></div>)}</div></SectionWrapper>
);
