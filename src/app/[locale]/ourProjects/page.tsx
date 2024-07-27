import { FC } from "react"
import Projects_header from "./components/projects-header"
import Projects_content from "./components/projects-content"
import TranslationsProvider from "@/components/ts/translation-provider"
import initTranslations from "@/app/i18n"

const Our_projects: FC = async ({ params: { locale } }: any) => {
  const namespaces = ['our_projects']
  const { resources } = await initTranslations(locale, namespaces, undefined, undefined);
  
  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={namespaces}>
      <div className="relative">
        <Projects_header />
        <Projects_content />
      </div>
    </TranslationsProvider>
  )
}
export default Our_projects