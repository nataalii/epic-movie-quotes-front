import { Button, BackgroundImage, Footer, Header } from 'components';
export default function Home() {
  return (
    <div className='bg-[#11101A] text-[#DDCCAA] font-helvetica '>
      <Header />
      <div className='flex justify-center items-center gap-6 flex-col h-[37rem]'>
        <h1 className='lg:w-[42rem] text-2xl lg:text-[4rem] text-center font-semibold leading-normal whitespace-pre-wrap'>
          Find any quote in <br /> millions of movie lines
        </h1>
        <Button item='Get Started' color='red' size='lg:text-2xl' />
      </div>
      <BackgroundImage
        img='bg-interstellar bg-linear-top-left  '
        quote='“You have to leave somethig behind to go forward”'
        movieName='Interstellar, 2014'
      />

      <BackgroundImage
        img='bg-tenebaums lg:bg-fixed'
        quote='“I think we’re just gonna have to be secretly in love with earch other and leave it that“'
        movieName='The Royal Tenenbaums, 2001'
      />
      <BackgroundImage
        img='bg-lord-of-rings  lg:bg-fixed'
        quote='“Even the smallest person can change the course of the future”'
        movieName='The Lord of the Rings, 2001'
      />
      <Footer />
    </div>
  );
}
