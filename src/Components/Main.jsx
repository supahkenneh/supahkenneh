import React from 'react';
import headshot from '../assets/headshot.jpg';
import contentObj from './text';

const Main = ({ project, view }) => {
  let selectedProject;
  if (project)
    selectedProject = contentObj.projects.featured.find(
      (p) => p.id === project
    );
  return (
    <React.Fragment>
      {!view || view === 'home' ? (
        <div className='w-7/12 bg-content-secondary flex justify-center content-center'>
          <div className='flex-col text-left p-20 self-center pb-60'>
            <div className='text-2xl font-mono text-accent'>
              {contentObj.home.greeting}
            </div>
            <div className='text-9xl font-sans'>{contentObj.home.header}</div>
            <div className='text-3xl font-sans opacity-90'>
              {contentObj.home.subheader}
            </div>
            <div className='text-lg opacity-70'>{contentObj.home.descr}</div>
          </div>
        </div>
      ) : (
        ''
      )}
      {view === 'about' ? (
        <div className='w-7/12 bg-content-secondary flex justify-end content-center'>
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
      {view === 'skills' ? (
        <div className='w-7/12 bg-content-secondary flex justify-center content-center'>
          <div className='grid gap-6 grid-cols-4 grid-rows-5 self-center'>
            {contentObj.skills.icons.map((icon, i) => {
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
          {contentObj.contact.links.map((contact, i) => {
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
          {contentObj.contact.contacts.map((contact, i) => {
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
