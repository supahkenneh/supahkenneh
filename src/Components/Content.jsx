import contentObj from './text';

const Content = (props) => {
  const aboutMeParsed = contentObj.aboutMe.body.split('\n');
  return (
    <div className='w-2/5 bg-content-gray'>
      {props.view === 'about'
        ? aboutMeParsed.map((line) => {
            return <div className='text-xl'>{line.trim()}</div>;
          })
        : ''}
    </div>
  );
};

export default Content;
