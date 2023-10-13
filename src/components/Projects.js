import React from 'react';
import simonImage from './images/simonImage.png';
import musicSysImage from './images/musicSysImage.png';
import jsImage from './images/jsImage.png';
import bootstrapImage from './images/bootstrapImage.png';
import htmlImage from './images/htmlImage.png';
import cssImage from './images/cssImage.png';

const Projects = () => {
  const projectList = [
    { id: 1, title: 'Simon game', link: 'https://abhhirramveedhi.github.io/Simon/', image: simonImage  },
    { id: 2, title: 'Music System', link: 'https://abhhirramveedhi.github.io/MusicSystem/', image: musicSysImage },
    { id: 3, title: 'JavaScript', link: 'https://abhhirramveedhi.github.io/Bs-Js_Tasks/', image: jsImage },
    { id: 4, title: 'Bootstrap', link: 'https://abhhirramveedhi.github.io/Bs-Js_Tasks/', image: bootstrapImage },
    { id: 5, title: 'HTML', link: 'https://abhhirramveedhi.github.io/Tasks/', image: htmlImage },
    { id: 6, title: 'CSS', link: 'https://abhhirramveedhi.github.io/Tasks/', image: cssImage },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map(project => (
          <div key={project.id} className="project">
            <h3>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <img
              className="project-image"
              src={project.image}
              alt={project.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
