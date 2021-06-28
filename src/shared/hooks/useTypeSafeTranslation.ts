import { useTranslation } from 'react-i18next';
import { TranslationKeys } from '#/src/generated/translationKeys';

interface DateTranslationType {
  time?: Date;
  date?: Date;
}

const useTypeSafeTranslation = () => {
  const { t } = useTranslation();

  return {
    t: (s: TranslationKeys, f?: DateTranslationType) => t(s, f),
  };
};

export default useTypeSafeTranslation;
