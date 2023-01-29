import { CommentIcon, Like, Profile } from 'components/icons';
import Image from 'next/image';
import { Comment } from '../comment';

const Post = () => {
  return (
    <div className='flex lg:ml-[500px] lg:mx-10 mx-5'>
      <div className=' lg:bg-[#11101A] lg:rounded-xl lg:mb-4 mt-10'>
        <div className='lg:mx-6'>
          <div className='flex items-center gap-4 lg:pt-6'>
            <Profile />
            <p>Natali Charkviani</p>
          </div>
          <div className='mt-4'>
            <h4 className='text-sm sm:text-base mb-4'>
              &quot;Follow Your dream&quot;. movie-
              <span className='text-[#DDCCAA]'>Billy Elliot. (2000)</span>
            </h4>
            <Image
              src='/assets/images/movie.png'
              alt='movie'
              width={900}
              height={500}
            />
          </div>
          <section className='flex mt-5 text-xl items-center'>
            <div className='flex gap-4'>
              <span>3</span>
              <CommentIcon></CommentIcon>
            </div>
            <div className='flex gap-4 ml-5'>
              <span className='ml-6'>10</span>
              <Like></Like>
            </div>
          </section>
          <hr className='h-px my-8 bg-gray border-0' />
          <section>
            <Comment />
          </section>
          <section className='mt-4 flex  mb-4 lg:pb-6'>
            <Profile />
            <input
              placeholder='Write a comment'
              className='block ml-3 pl-4 w-full bg-[#24222F] rounded-lg'
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Post;
