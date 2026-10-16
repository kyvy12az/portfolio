import { SERVICES } from "../constants";
import { SectionWrapper } from "../hoc";

export const About = () => (
  <SectionWrapper idName="about">
    <div className="about-layout"><div><p className="eyebrow">02 / ABOUT ME</p><h2 className="editorial-title">Tư duy kỹ thuật.<br /><span>Chăm chút trải nghiệm.</span></h2></div>
      <div className="about-story"><p>Tôi là Kỳ Vỹ, một lập trình viên yêu thích việc biến những ý tưởng thành sản phẩm có thể sử dụng mỗi ngày.</p><p>Tôi làm việc với JavaScript, TypeScript, React, Node.js và Three.js; hướng đến giao diện rõ ràng, thân thiện và những giải pháp cho vấn đề thực tế.</p><a href="#contact" className="inline-link">Kết nối với tôi ↗</a></div></div>
    <div className="service-grid">{SERVICES.map((service,index)=><div className="service-tile" key={service.title}><span className="service-number">0{index+1}</span><img src={service.icon} alt="" loading="lazy"/><h3>{service.title}</h3></div>)}</div>
  </SectionWrapper>
);
