import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { search } from 'services';
import { RootState } from 'types/stateTypes';
const useSearch = () => {
  const { t } = useTranslation('news-feed');
  const dispatch = useDispatch();
  const { writeQuoteModal } = useSelector((store: RootState) => store.modal);
  const [isActive, setIsActive] = useState(false);
  const { replace } = useRouter();
  const searchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [searchRef, setIsActive]);
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      search: '',
    },
  });
  const queryClient = useQueryClient();

  const { mutate: submitForm } = useMutation(search, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: 'quotes' });
    },
  });
  const onSubmit = async (data: { search: string }) => {
    submitForm(data);
    replace({ query: data });
    methods.setValue('search', '');
  };

  return {
    t,
    dispatch,
    writeQuoteModal,
    isActive,
    methods,
    onSubmit,
    searchRef,
    setIsActive,
  };
};

export default useSearch;
