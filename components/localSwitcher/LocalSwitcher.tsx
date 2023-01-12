import { Arrow } from 'components/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const LocaleSwitcher = ({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: any;
}) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const languages = ['Eng', 'ქართ'];

  return (
    <div className=' w-12 md:w-20 flex flex-col align-center text-white  cursor-pointer  '>
      <div className=' flex items-center gap-2'>
        <h1 onClick={() => setIsActive(!isActive)}>{selected}</h1>
        <Arrow />
      </div>

      <div className='relative top-2'>
        {isActive && (
          <ul className='absolute bg-slate-700 rounded-md p-1'>
            {router.locales?.map((locale, index) => (
              <li
                key={locale}
                onClick={(e) => {
                  setSelected(e.currentTarget.textContent);
                  setIsActive(false);
                }}
                className=' px-3 '
              >
                <Link href={router.asPath} locale={locale}>
                  {languages[index]}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LocaleSwitcher;
