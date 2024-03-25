import {memo, useCallback, useMemo} from 'react';
import useStore from '../../hooks/use-store';
import useSelector from '../../hooks/use-selector';
import useTranslate, {useServiceTranslate} from '../../hooks/use-translate';
import Select from '../../components/select';

function LocaleSelect() {

  // const {lang, setLang} = useTranslate();

  const { locale: lang, setLocale: setLang } = useServiceTranslate()
  console.log(lang, setLang)


  const options = {
    lang: useMemo(() => ([
      {value: 'ru', title: 'Русский'},
      {value: 'en', title: 'English'},
    ]), [])
  };

  return (
    <Select onChange={setLang} value={lang} options={options.lang}/>
  );
}

export default memo(LocaleSelect);
