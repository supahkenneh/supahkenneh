import React from 'react';
import { homeObj } from './helpers';
import { ContactForm } from './ContactForm';
import { useState } from 'react';

const Main = () => {
  let [showForm, setShowForm] = useState(false);

  return (
    <React.Fragment>
      <div
        className='w-2/5 bg-content-secondary flex justify-start content-center'
        id='main'
      >
        <div className='flex-col text-left p-5 sm:p-20 self-center pb-60'>
          <div className='text-2xl pt-40 sm:pt-0 font-mono text-accent animate-[fadeIn_500ms_ease-in_1]'>
            {homeObj.home.greeting}
          </div>
          <div className='text-7xl font-sans animate-[fadeIn_1500ms_ease-in_1]'>
            {homeObj.home.header}
          </div>
          <div className='text-lg opacity-70 animate-[fadeIn7_2000ms_ease-in_1]'>
            {homeObj.home.descr}
          </div>
          <div>
            <button className='border shadow-md rounded-md p-2 mt-5 bg-content-primary hover:bg-content-accent hover:text-white' onClick={() => setShowForm(!showForm)}>
              Let's Connect!
            </button>
          </div>
          {
            showForm && (
              <div>
                <ContactForm />
              </div>
            )
          }
        </div>
      </div>
      {/* {view === 'contact' ? (
          {contactObj.contacts.map((contact, i) => {
            return (
              <div key={i} className='flex justify-center self-center pb-10 sm:mb-60 animate-fadeIn'>
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
      )} */}
    </React.Fragment>
  );
};

export default Main;
