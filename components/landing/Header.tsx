import { Arrow } from '../icons';
import { Button } from '../button';
const Header = () => {
  return (
    <header className=' w-5/6 m-auto font-helvetica md:sticky top-0 z-40'>
      <div className='flex justify-between items-center py-6 '>
        <h2 className='uppercase font-bold '>movie quotes</h2>
        <div className='flex justify-center items-center gap-4 '>
          <ul className='w-24 text-center hidden md:block'>
            <li className='flex flex-row justify-center items-center gap-3 text-white'>
              Eng <Arrow />
            </li>
          </ul>
          <Button item='Sign Up' color='red' size='hidden ' />
          <Button item='Log in' color='transparent' />
        </div>
      </div>
    </header>
  );
};

export default Header;
