import { useAddQuote, useMovieDetail } from 'hooks';
import { useTranslation } from 'next-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { updateQuote } from 'services';
import { editQuote } from 'stores/modalSlice';
import { QuoteType, UpdateQuoteType } from 'types';

const useEditQuotes = (quote: QuoteType) => {
  const dispatch = useDispatch();
  const { t } = useTranslation('movies');
  const { removeQuote } = useMovieDetail();
  const methods = useForm({ mode: 'all' });
  const queryClient = useQueryClient();
  //update quote
  const { mutate: updateQuoteMutation } = useMutation(updateQuote, {
    onSuccess: () => {
      queryClient.invalidateQueries('quotes');
      dispatch(editQuote());
    },
    onError: (errors: any) => {
      console.log(errors);
    },
  });
  const onSubmit: SubmitHandler<UpdateQuoteType> = (data) => {
    const updatedData = {
      ...data,
      image: data.image[0],
      id: quote.id,
    };
    updateQuoteMutation(updatedData);
  };

  const { setImage, selectedImage } = useAddQuote();

  return {
    dispatch,
    t,
    removeQuote,
    methods,
    onSubmit,
    setImage,
    selectedImage,
  };
};

export default useEditQuotes;
