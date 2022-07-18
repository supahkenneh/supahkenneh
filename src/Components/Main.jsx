import headshot from '../assets/headshot.jpg';

const Main = () => {
  return (
    <div className='w-3/5 bg-content-dark-gray flex justify-center content-center'>
      <div>
        <img
          src={headshot}
          alt='headshot'
          className='h-80 w-80 object-cover rounded-lg border-4 border-blue-300'
        />
      </div>
    </div>
  );
};

export default Main;
