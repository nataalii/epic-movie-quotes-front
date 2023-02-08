import { toast } from 'react-toastify';
import MobileMessage from './mobileToast';

const useMobileToast = () => {
  const notification = (text: string) =>
    toast(<MobileMessage text={text} />, {
      style: {
        maxWidth: '340px',
        backgroundColor: '#D1E7DD',
        margin: 'auto',
      },
    });
  return { notification };
};
export default useMobileToast;
