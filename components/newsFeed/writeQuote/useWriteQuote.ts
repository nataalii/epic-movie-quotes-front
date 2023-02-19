import { useAddQuote } from 'hooks';
import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { writeQuote } from 'stores/modalSlice';

const useWriteQuote = () => {
  const { t } = useTranslation('news-feed');
  const { addQuoteMutation } = useAddQuote();
  const dispatch = useDispatch();
  const onSubmit = async (data: any) => {
    const updatedData = {
      ...data,
      image: data.image[0],
    };
    console.log(updatedData);
    addQuoteMutation(updatedData, {
      onSuccess: () => {
        dispatch(writeQuote());
      },
    });
  };
  return { t, onSubmit, dispatch };
};

export default useWriteQuote;
