import React from 'react';
import contentObj from './text';

const Content = (props) => {
  const baseClasses = 'font-sans cursor-pointer hover:text-accent hover:underline-offset-4';
  const activeClasses = 'font-sans cursor-pointer underline underline-offset-4 text-accent';
  const aboutMeParsed = contentObj.aboutMe.body.split('\n');
  return (
    <React.Fragment>
      {!props.view || props.view === 'home' ? (
        <div className='w-5/12 bg-content-primary flex justify-center content-center'></div>
      ) : (
        ''
      )}
      {props.view === 'about' ? (
        <div className='w-5/12 bg-content-primary flex justify-center content-center'>
          <div className='p-10 pb-60 text-left self-center'>
            {aboutMeParsed.map((line, i) => {
              return (
                <div
                  className='text-xl font-sans p-px opacity-80 leading-10'
                  key={i}
                >
                  {line.trim()}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ''
      )}
      {props.view === 'skills' ? (
        <div className='w-5/12 bg-content-primary flex content-center'>
          <div className='p-10 pb-40 text-left self-center'>
            <div className='mb-3 text-xl font-mono text-accent'>
              What I've worked with:
            </div>
            <div className='mb-10 grid gap-3 grid-cols-2 grid-rows-4'>
              {contentObj.skills.tech.map((skill, i) => {
                return (
                  <div className='flex font-sans text-lg' key={i}>
                    {skill}
                  </div>
                );
              })}
            </div>
            <div>
              <div className='mb-3 text-xl font-mono text-accent'>
                What I'm learning:
              </div>
              <div className='mb-10 grid gap-3 grid-cols-2 grid-rows-4'>
                {contentObj.skills.learning.map((skill, i) => {
                  return (
                    <div className='flex font-sans text-lg' key={i}>
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      {props.view === 'projects' ? (
        <div className='w-5/12 bg-content-primary flex justify-start content-center'>
          <div className='p-10 pb-60 text-left self-center'>
            <div className='mb-3 text-xl font-mono text-accent'>
              Featured Projects:
            </div>
            {contentObj.projects.featured.map((project, i) => {
              return (
                <div
                  className='text-xl font-sans p-px opacity-80 leading-10'
                  key={i}
                >
                  <div
                    onClick={props.selectProject}
                    key={i}
                    id={project.id}
                    className={
                      props.project === project.id ? activeClasses : baseClasses
                    }
                  >
                    {project.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ''
      )}
      {props.view === 'contact' ? (
        <div className='w-5/12 bg-content-primary flex justify-start content-center'>
          <div className='p-10 pb-60 text-left self-center'></div>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default Content;
