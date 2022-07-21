import React from 'react';
import headshot from '../assets/headshot.jpg';
import contentObj from './text';

const Main = (props) => {
  let project;
  if (props.project) {
    project = contentObj.projects.featured.find((p) => p.id === props.project);
  }
  return (
    <React.Fragment>
      {!props.view || props.view === 'home' ? (
        <div className='w-7/12 bg-content-secondary flex justify-center content-center'>
          <div className='flex-col text-left p-20 self-center pb-60'>
            <div className='text-2xl font-mono text-accent'>
              Hello! My name is
            </div>
            <div className='text-9xl font-sans'>Kenny Chung</div>
            <div className='text-3xl font-sans opacity-90'>
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
      {props.view === 'skills' ? (
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
      {props.view === 'projects' ? (
        <div className='w-7/12 bg-content-secondary flex justify-center content-center'>
          <div className='flex self-center h-1/2 mb-40'>
            {project ? (
              <img
                src={project.image}
                alt={project.id}
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
      {props.view === 'contact' ? (
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
                    className='w-16 h-16'
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
