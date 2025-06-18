import initTranslations from '../i18n';
import TranslationsProvider from '@/components/ts/translation-provider';
import { Logo } from '@/components/ts/logo';
import { ElectronicBoardLeft } from '@/components/ts/electronic-board-left';
import { ElectronicBoardRight } from '@/components/ts/electronic-board-right';
import Dropdown from '@/components/ts/dropdown';
import Footer from '@/components/ts/footer';

const Home = async (props: { params: Promise<{ locale: string }> }) => {
  const { locale } = await props.params
  const namespaces = ['home']
  const { resources } = await initTranslations(locale, namespaces, undefined, undefined)

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={namespaces}>
      <Dropdown />
      <div className='grid grid-cols-5'>
        <ElectronicBoardLeft />
        <Logo />
        <ElectronicBoardRight />
      </div>
      <Footer />
    </TranslationsProvider>
  );
}
export default Home