import React from 'react';
import contentObj from './text';

const Content = (props) => {
  const aboutMeParsed = contentObj.aboutMe.body.split('\n');
  return (
    <React.Fragment>
      {!props.view || props.view === 'home' ? (
        <div className='w-5/12 bg-content-gray flex justify-center content-center'></div>
      ) : (
        ''
      )}
      {props.view === 'about' ? (
        <div className='w-5/12 bg-content-gray flex justify-center content-center'>
          <div className='p-10 pb-60 text-left self-center'>
            {aboutMeParsed.map((line, i) => {
              return (
                <div className='text-xl font-sans p-px opacity-80' key={i}>
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
        <div className='w-5/12 bg-content-gray flex content-center'>
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
    </React.Fragment>
  );
};

export default Content;
