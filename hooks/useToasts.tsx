import { Message } from 'components';
import { toast } from 'react-toastify';

const useToasts = (message: string) => {
  const notification = toast(<Message text={message} />);

  return notification;
};

export default useToasts;
