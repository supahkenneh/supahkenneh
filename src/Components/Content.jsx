import React from 'react';
import {
  homeObj,
  skillsObj,
  contentClasses,
  textClasses,
  projectsObj,
} from './helpers';
import { Card } from './Card';
import { SubContent } from './SubContent';
import { useState } from 'react';

const Content = ({ view, project, selectProject, selectView }) => {

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

  const changeView = data => {
    // Placeholder for future functionality
    selectView(data);
  }

  return (
    <React.Fragment>
      {view === 'home' ? (
        <div className='w-full bg-content-primary flex-col justify-center content-center' id='content'>
          {homeObj.aboutMe.body.map((data, i) => {
            let classes = 'text-4xl text-white font-sans opacity-90 mb-2 animate-[fadeIn9_2000ms_ease-in_1] grid grid-flow-row justify-center justify-items-stretch h-1/3 gap-1 hover:cursor-pointer ';
            switch (data.key) {
              case 'dev':
                classes += ` bg-[url('./assets/bg.png')] bg-cover bg-center`;
                break;
              case 'dj':
                classes += ` bg-[url('./assets/dj-bg.png')] bg-cover bg-center`;
                break;
              case 'photo':
                classes += ` bg-[url('./assets/photog-bg.jpg')] bg-cover bg-bottom`;
                break;
            }
            return (
              <div
                className={classes}
                key={i} onClick={() => changeView(data.key)}>
                <Card content={data.text} />
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
      {view === 'dev' ? (
        <>
          {
            homeObj.aboutMe.body.filter((data, i) => data.key === 'dev').map((data, i) => {
              console.log(data);
              return (
                <div className='w-full bg-content-primary flex-col justify-center content-start' id='content'>
                  <div className={`text-4xl text-white font-sans opacity-90 mb-2 animate-[fadeIn9_2000ms_ease-in_1] grid grid-flow-row justify-center justify-items-stretch h-1/4 gap-1 hover:cursor-pointer bg-[url('./assets/bg.png')] bg-cover bg-center`}>
                    <Card content={data.text} />
                  </div>
                  <div className='flex flex-row justify-center content-center gap-1'>
                    <SubContent content={skillsObj} />
                    <SubContent content={projectsObj} />
                  </div>
                </div>
              )
            })
          }
        </>
      ) : (''
      )}
      {view === 'dj' ? (
        <div>DJ</div>
      ) : (
        ''
      )}
      {view === 'photo' ? (
        <div>PHOTO</div>
      ) : (
        ''
      )}
      {/* {view === 'skills' ? (
        <div className='w-2/3 sm:w-5/12 bg-content-primary flex content-center'>
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
        <div className='w-2/3 sm:w-5/12 bg-content-primary flex justify-start content-center'>
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
      )} */}
    </React.Fragment>
  );
};

export default Content;
