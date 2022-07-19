import contentObj from './text';

const Content = (props) => {
  const aboutMeParsed = contentObj.aboutMe.body.split('\n');
  return (
    <div className='w-5/12 bg-content-gray flex justify-center content-center'>
      <div className='p-10 pb-60 text-left self-center'>
        {props.view === 'about'
          ? aboutMeParsed.map((line, i) => {
              return (
                <div className='text-xl font-sans p-px opacity-80' key={i}>
                  {line.trim()}
                </div>
              );
            })
          : ''}
      </div>
    </div>
  );
};

export default Content;
