import React from 'react';
import { homeObj, skillsObj, projectsObj, contactObj } from './helpers';

const Main = ({ project, view }) => {
  let selectedProject;
  if (project)
    selectedProject = projectsObj.featured.find((p) => p.id === project);
  return (
    <React.Fragment>
      {view === 'home' ? (
        <div className='w-7/12 bg-content-secondary flex justify-center content-center'>
          <div className='flex-col text-left p-20 self-center pb-60'>
            <div className='text-2xl font-mono text-accent'>
              {homeObj.home.greeting}
            </div>
            <div className='text-9xl font-sans'>{homeObj.home.header}</div>
            <div className='text-3xl font-sans opacity-90'>
              {homeObj.home.subheader}
            </div>
            <div className='text-lg opacity-70'>{homeObj.home.descr}</div>
          </div>
        </div>
      ) : (
        ''
      )}
      {view === 'skills' ? (
        <div className='w-7/12 bg-content-secondary flex justify-center content-center'>
          <div className='grid gap-6 grid-cols-4 grid-rows-5 self-center'>
            {skillsObj.icons.map((icon, i) => {
              return (
                <div className='' key={i}>
                  <img
                    src={icon.path}
                    alt={icon.label}
                    key={i}
                    className='h-32 w-32 m-1'
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ''
      )}
      {view === 'projects' ? (
        <div className='w-7/12 bg-content-secondary flex justify-center content-center'>
          <div className='flex self-center h-1/2 mb-40'>
            {selectedProject ? (
              <img
                src={selectedProject.image}
                alt={selectedProject.id}
                className='pointer-events-none'
              />
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        ''
      )}
      {view === 'contact' ? (
        <div className='w-screen bg-content-secondary flex justify-evenly content-center'>
          {contactObj.links.map((contact, i) => {
            return (
              <div className='self-center mb-60'>
                <a
                  href={contact.link}
                  target='_blank'
                  rel='noreferrer'
                  className='flex text-2xl items-center'
                >
                  <img
                    src={contact.icon}
                    alt={contact.id}
                    className='w-12 h-12'
                  />
                  {contact.label}
                </a>
              </div>
            );
          })}
          {contactObj.contacts.map((contact, i) => {
            return (
              <div key={i} className='self-center mb-60'>
                {contact.id === 'phone' ? (
                  <a href={contact.ref} className='text-2xl font-sans'>
                    📞 Phone
                  </a>
                ) : (
                  <a href={contact.ref} className='text-2xl font-sans'>
                    ✉️ Email
                  </a>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default Main;
