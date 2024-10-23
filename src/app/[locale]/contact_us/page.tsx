import React, { FC, useState } from 'react'
import "./page.css"
import initTranslations from '@/app/i18n'
import TranslationsProvider from '@/components/ts/translation-provider'
import Content from './components/content'
import Back_botton from '@/components/ts/back-botton'

const Contact_us: FC = async ({ params: { locale } }: any) => {
  const namespaces = ['contactUs']
  const { resources } = await initTranslations(locale, namespaces, undefined, undefined);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={namespaces}>
      <div className='px-10'>
        <div className=' relative bg-clip'>
          <Back_botton className='left-0 top-7' />
          <Content />
        </div>
      </div>
    </TranslationsProvider>
  )
}

export default Contact_us