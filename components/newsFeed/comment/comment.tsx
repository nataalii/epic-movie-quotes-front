/* eslint-disable @next/next/no-img-element */

const Comment = ({ comment }: { comment: any }) => {
  return (
    <div className='flex gap-8'>
      <img
        src={comment.user.thumbnail}
        alt='avatar'
        className='w-[3.5rem] h-[3.5rem] rounded-full object-cover'
      />
      <div className='flex flex-col gap-4 my-5 text-xl max-w-[50rem] w-full'>
        <p className=' font-semibold'>{comment.user.name}</p>
        <p className='break-all'>{comment.body}</p>
        <hr className='h-px bg-gray border-0' />
      </div>
    </div>
  );
};

export default Comment;
