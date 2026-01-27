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
              return (
                <div className='w-full bg-content-primary flex-col justify-center content-start' id='content' key={i}>
                  <div className={`text-4xl text-white font-sans opacity-90 mb-2 animate-[fadeIn9_2000ms_ease-in_1] grid grid-flow-row justify-center justify-items-stretch h-1/4 gap-1 hover:cursor-pointer bg-[url('./assets/bg.png')] bg-cover bg-center`} onClick={() => changeView('home')} >
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
        <>
          {
            homeObj.aboutMe.body.filter((data, i) => data.key === 'dj').map((data, i) => {
              return (
                <div className='w-full bg-content-primary flex-col justify-center content-start' id='content' key={i}>
                  <div className={`text-4xl text-white font-sans opacity-90 mb-2 animate-[fadeIn9_2000ms_ease-in_1] grid grid-flow-row justify-center justify-items-stretch h-1/4 gap-1 hover:cursor-pointer bg-[url('./assets/dj-bg.png')] bg-cover bg-center`} onClick={() => changeView('home')} >
                    <Card content={data.text} />
                  </div>
                  {/* <div className='flex flex-row justify-center content-center gap-1'>
                    <SubContent content={skillsObj} />
                    <SubContent content={projectsObj} />
                  </div> */}
                </div>
              )
            })
          }
        </>
      ) : (
        ''
      )}
      {view === 'photo' ? (
        <div>PHOTO</div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default Content;
