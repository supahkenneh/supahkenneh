import React from 'react';
import headshot from '../assets/headshot.jpg';

const Main = (props) => {
  return (
    <React.Fragment>
      {!props.view || props.view === 'home' ? (
        <div className='w-7/12 bg-content-dark-gray flex justify-center content-center'>
          <div className='flex-col text-left p-20 self-center pb-60'>
            <div className='text-2xl font-mono text-accent'>
              Hello! My name is
            </div>
            <div className='text-9xl font-sans'>Kenny Chung</div>
            <div className='text-3xl font-sans opacity-70'>
              Web Developer 👨🏻‍💻
            </div>
            <div className='text-lg opacity-70'>
              I am a full stack developer with a passion for web development and
              technology
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      {props.view === 'about' ? (
        <div className='w-7/12 bg-content-dark-gray flex justify-end content-center'>
          <div className='p-10 pb-60 self-center flex justify-self-end z-10'>
            <img
              src={headshot}
              alt='headshot'
              className='h-80 w-80 object-cover rounded-lg border-4 border-accent pointer-events-none'
            />
          </div>
        </div>
      ) : (
        ''
      )}
      {props.view === 'projects' ? (
        <div className='w-7/12 bg-content-dark-gray flex justify-end content-center'></div>
      ) : (
        ''
      )}
      {props.view === 'contact' ? (
        <div className='w-7/12 bg-content-dark-gray flex justify-end content-center'></div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default Main;
