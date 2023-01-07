const BackgroundImage: React.FC<{
  movieName: string;
  quote: string;
  img: string;
}> = (props) => {
  return (
    <div>
      <div
        className={
          'bg-no-repeat h-96 bg-cover bg-center md:h-screen relative overflow-hidden ' +
          props.img
        }
      >
        <div className=' w-full h-screen absolute bg-linear-gradient '></div>
        <div className='h-full flex flex-col justify-center items-center lg:items-start lg:ml-72 text-white '>
          <div className=' max-w-[24rem] w-[75%] md:max-w-[48rem] -top-5 md:-mt-20 z-20  '>
            <div>
              <div className='text-xl md:text-[3rem] relative leading-normal font-semibold  '>
                <div className='h-[2px] bg-white w-4 md:w-14 absolute top-4 md:top-8 -left-6 md:left-[-4.2rem]'></div>
                <p>{props.quote}</p>
              </div>
              <p className='mt-4 md:text-3xl'>{props.movieName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
