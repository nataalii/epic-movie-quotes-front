import Arrow from '../components/icons/Arrow';
import Button from '../components/button/Button';
export default function Home() {
  return (
    <>
      <header className=' w-5/6 m-auto bg-blue-900 font-helvetica'>
        <div className='flex justify-between items-center py-6 '>
          <h2 className='uppercase text-[#DDCCAA] font-extrabold'>
            movie quotes
          </h2>
          <div className='flex justify-center items-center gap-4 text-white font-extrabold'>
            <ul className='w-24 text-center hidden md:block'>
              <li className='flex flex-row justify-center items-center gap-3'>
                Eng <Arrow />
              </li>
            </ul>
            <Button item='Sign Up' color='red' />
            <Button item='Log in' color='transparent' />
          </div>
        </div>
      </header>
    </>
  );
}
