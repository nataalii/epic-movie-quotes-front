import { ProfileIcon } from 'components/icons';

const Comment = () => {
  return (
    <div className='max-w-[56rem]'>
      <div className='mt-7 flex items-center gap-4 '>
        <ProfileIcon />
        <p>Natali charkviani</p>
      </div>
      <p className=' lg:ml-20 '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        nunc vel massa facilisis consequat elit morbi convallis convallis.
        Volutpat vitae et nisl et. Adipiscing enim integer mi leo nisl. Arcu
        vitae mauris odio eget.
      </p>
      <div className='border-b-2 my-8 border-gray lg:w-[88%] lg:ml-20'></div>
    </div>
  );
};

export default Comment;
