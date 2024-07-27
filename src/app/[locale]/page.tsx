import initTranslations from '../i18n';
import TranslationsProvider from '@/components/ts/translation-provider';
import { Logo } from '@/components/ts/logo';
import { ElectronicBoardLeft } from '@/components/ts/electronic-board-left';
import { ElectronicBoardRight } from '@/components/ts/electronic-board-right';
import { Dropdown } from '@/components/ts/dropdown';

export default async function Home({ params: { locale } }: any) {

  const namespaces = ['home']
  const { resources } = await initTranslations(locale, namespaces, undefined, undefined)

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={namespaces}>
      <Dropdown />

      <div className='grid grid-cols-5 items-center'>
        <ElectronicBoardLeft />
        <Logo />
        <ElectronicBoardRight />
      </div>
    </TranslationsProvider>
  );
}