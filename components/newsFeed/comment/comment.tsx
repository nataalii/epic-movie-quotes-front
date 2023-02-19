/* eslint-disable @next/next/no-img-element */

const Comment = ({ comment }: { comment: any }) => {
  return (
    <>
      <div className='flex gap-4 sm:gap-8'>
        <img
          src={comment.user.thumbnail}
          alt='avatar'
          className=' w-10 h-10 sm:w-[3.5rem] sm:h-[3.5rem] rounded-full object-cover'
        />
        <div className='flex flex-col sm:gap-4 my-2 sm:my-5 sm:text-xl  max-w-[50rem] w-full'>
          <p className=' font-semibold'>{comment.user.name}</p>
          <p className='break-all hidden sm:block'>{comment.body}</p>
          <hr className='h-px bg-gray border-0 hidden sm:block' />
        </div>
      </div>
      <div className=' sm:hidden my-3 flex flex-col gap-3'>
        <p className='break-all'>{comment.body}</p>
        <hr className='h-px bg-gray border-0 ' />
      </div>
    </>
  );
};

export default Comment;
