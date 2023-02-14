import { useTranslation } from 'next-i18next';
const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <footer className='p-4 md:pl-20 text-center md:text-start '>
      <span className=' text-sm  uppercase'>{t('footer_text')}</span>
    </footer>
  );
};

export default Footer;
