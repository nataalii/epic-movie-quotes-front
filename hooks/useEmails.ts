import { useQuery } from 'react-query';
import { getEmails } from 'services';

const useEmails = () => {
  const { data: emails, isLoading } = useQuery('emails', getEmails);

  return { emails: emails?.data, isLoading };
};

export default useEmails;
