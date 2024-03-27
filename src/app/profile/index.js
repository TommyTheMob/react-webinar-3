import {memo, useCallback, useMemo} from 'react';
import {useParams} from 'react-router-dom';
import useStore from '../../hooks/use-store';
import useSelector from '../../hooks/use-selector';
import useTranslate, {useServiceTranslate} from '../../hooks/use-translate';
import useInit from '../../hooks/use-init';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import Navigation from '../../containers/navigation';
import Spinner from '../../components/spinner';
import ArticleCard from '../../components/article-card';
import LocaleSelect from '../../containers/locale-select';
import TopHead from '../../containers/top-head';
import ProfileCard from '../../components/profile-card';

function Profile() {
  const store = useStore();

  useInit(() => {
    store.actions.profile.load();
  }, []);

  const select = useSelector(state => ({
    profile: state.profile.data,
    waiting: state.profile.waiting,
  }));

  const {t} = useTranslate();
  const { translate: tt } = useServiceTranslate()

  return (
    <PageLayout>
      <TopHead/>
      <Head title={tt('title')}>
        <LocaleSelect/>
      </Head>
      <Navigation/>
      <Spinner active={select.waiting}>
        <ProfileCard tt={tt} data={select.profile}/>
      </Spinner>
    </PageLayout>
  );
}

export default memo(Profile);
