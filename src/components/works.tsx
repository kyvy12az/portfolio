import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";

export const Works = () => (
  <SectionWrapper idName="projects">
    <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Dự án nổi bật<span>.</span></h2></div><p>Từ ý tưởng đến sản phẩm thực tế.<br />Khám phá những gì tôi đã xây dựng.</p></div>
    <div className="project-grid">
      {PROJECTS.map((project, index) => (
        <article className="project-card" key={project.name}>
          <a className="project-image" href={project.live_site_link} target="_blank" rel="noopener noreferrer" aria-label={`Xem website ${project.name}`}>
            <div className="project-browser"><span>● ● ●</span><span>{project.name.toLowerCase()} / preview</span><span>↗</span></div>
            <img src={project.image} alt={`Giao diện ${project.name}`} loading="lazy" />
            <span className="project-open">Khám phá dự án ↗</span>
          </a>
          <div className="project-details"><div className="project-title"><h3>{project.name}</h3><span>0{index + 1}</span></div><p>{project.description}</p>
            <div className="project-tags">{project.tags.map(tag => <span key={tag.name}>{tag.name}</span>)}</div>
            <div className="project-links"><a href={project.live_site_link} target="_blank" rel="noopener noreferrer">Xem website ↗</a><a href={project.source_code_link} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
          </div>
        </article>
      ))}
    </div>
  </SectionWrapper>
);
