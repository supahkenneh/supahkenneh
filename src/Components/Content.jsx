import React from 'react';
import contentObj from './text';

const Content = (props) => {
  const baseClasses =
    'font-sans text-2xl leading-10 cursor-pointer hover:text-accent hover:underline-offset-4';
  const activeClasses =
    'font-sans text-2xl leading-10 cursor-pointer underline underline-offset-4 text-accent';
  const baseTextClasses = 'font-sans text-lg bg-content-text hidden';
  const activeTextClasses =
    'font-sans text-lg m-2 p-2 rounded bg-content-text block';
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
            {/* <div className='mb-3 text-xl font-mono text-accent'>
              Featured Projects:
            </div> */}
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
                  <div
                    className={
                      props.project === project.id
                        ? activeTextClasses
                        : baseTextClasses
                    }
                  >
                    <div>{project.text}</div>
                    {project.links.map((link, i) => {
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
                            {link.active ? project.name : 'Github'}
                          </a>
                        </div>
                      );
                    })}
                    <div className=''>
                      {project.stack.map((tech, i) => {
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
      {props.view === 'contact' ? (
        <div className='w-5/12 bg-content-primary flex justify-start content-center'>
          <div className='p-10 pb-60 text-left self-center'>
            <div className='text-accent text-3xl font-mono mb-5'>Links: </div>
            <div className='flex'>
              {contentObj.contact.links.map((contact, i) => {
                return (
                  <div key={i} className='mb-2 mr-10'>
                    <a
                      href={contact.link}
                      target='_blank'
                      rel='noreferrer'
                      className='flex text-2xl underline underline-offset-4 font-sans'
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
            </div>
            <div className='text-accent text-3xl font-mono mb-5'>Contact:</div>
            <div className='flex'>
              {contentObj.contact.contacts.map((contact, i) => {
                return (
                  <div key={i} className='mb-2 mr-10'>
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
          </div>
        </div>
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

export default Content;
