import React from 'react';
import {
  homeObj,
  skillsObj,
  projectsObj,
  contentClasses,
  textClasses,
} from './helpers';

const Content = ({ view, project, selectProject }) => {
  const setClasses = (id, isText) => {
    if (isText) {
      if (project === id) return textClasses.activeClasses;
      else return textClasses.baseClasses;
    }

    if (!isText) {
      if (project === id) return contentClasses.activeClasses;
      else return contentClasses.baseClasses;
    }
  };

  return (
    <React.Fragment>
      {view === 'home' ? (
        <div className='w-5/12 bg-content-primary flex-col justify-center content-center'>
          <div className='self-center flex justify-center m-6 animate-[fadeIn9_2000ms_ease-in_1]'>
            <div className='p-1 rounded-lg border-4 border-accent'>
              <img
                src={homeObj.aboutMe.headshot}
                alt='headshot'
                className='h-60 w-60 object-cover pointer-events-none rounded-sm'
              />
            </div>
          </div>
          <div className='p-10 text-left self-center'>
            {homeObj.aboutMe.body.map((line, i) => {
              return (
                <div
                  className='text-lg font-sans p-px opacity-90 mb-2 animate-[fadeIn9_2000ms_ease-in_1]'
                  key={i}
                >
                  {line}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ''
      )}
      {view === 'skills' ? (
        <div className='w-5/12 bg-content-primary flex content-center'>
          <div className='p-10 pb-40 text-left self-center'>
            <div className='mb-3 text-xl font-mono text-accent animate-fadeIn'>
              What I've worked with:
            </div>
            <div className='mb-10 grid gap-3 grid-cols-2 grid-rows-4 animate-[fadeIn9_1500ms_ease-in_1]'>
              {skillsObj.tech.map((skill, i) => {
                return (
                  <div className='flex font-sans text-lg' key={i}>
                    {skill}
                  </div>
                );
              })}
            </div>
            <div>
              <div className='mb-3 text-xl font-mono text-accent animate-fadeIn'>
                What I'm learning:
              </div>
              <div className='mb-10 grid gap-3 grid-cols-2 grid-rows-4 animate-[fadeIn9_1500ms_ease-in_1]'>
                {skillsObj.learning.map((skill, i) => {
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
      {view === 'projects' ? (
        <div className='w-5/12 bg-content-primary flex justify-start content-center'>
          <div className='p-10 pb-60 text-left self-center'>
            <div className='mb-3 text-xl font-mono text-accent'>
              Featured Projects:
            </div>
            {projectsObj.featured.map((proj, i) => {
              return (
                <div
                  className='text-xl font-sans p-px opacity-80 leading-10 animate-fadeIn'
                  key={i}
                >
                  <div
                    onClick={selectProject}
                    key={i}
                    id={proj.id}
                    className={setClasses(proj.id, false)}
                  >
                    {proj.name}
                  </div>
                  <div className={setClasses(proj.id, true)}>
                    <div>{proj.text}</div>
                    {proj.links.map((link, i) => {
                      return (
                        <div key={i}>
                          👉{' '}
                          {link.active ? 'Check it out: ' : 'View the repo: '}
                          <a
                            href={link.link}
                            target='_blank'
                            rel='noreferrer'
                            className='text-xl underline text-accent'
                          >
                            {link.active ? proj.name : 'Github'}
                          </a>
                        </div>
                      );
                    })}
                    <div className=''>
                      {proj.stack.map((tech, i) => {
                        return (
                          <div
                            className='inline mr-2 opacity-90 text-base'
                            key={i}
                          >
                            {tech}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default Content;
