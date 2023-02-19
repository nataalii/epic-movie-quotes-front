import { useMutation, useQueryClient } from 'react-query';
import { toggleLike } from 'services';

const useLike = () => {
  const queryClient = useQueryClient();
  const { mutate: likeMutation } = useMutation(toggleLike, {
    onSuccess: () => {
      queryClient.invalidateQueries('quotes');
      queryClient.invalidateQueries('movies');
    },
  });

  return { likeMutation };
};

export default useLike;
