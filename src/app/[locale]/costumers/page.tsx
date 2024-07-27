import { FC } from "react"
import CustomerSlider from "./components/customer-slider"
import "./page.css"
import TranslationsProvider from "@/components/ts/translation-provider"
import initTranslations from "@/app/i18n"
import Content from "./components/content"

const Customers: FC = async ({ params: { locale } }: any) => {
  const namespaces = ['customers']
  const { resources } = await initTranslations(locale, namespaces, undefined, undefined);

  return (
    <TranslationsProvider resources={resources} locale={locale} namespaces={namespaces}>
      <div className="grid grid-cols-12 justify-between max-w-[1400px] mx-auto">
        <CustomerSlider direction="vertical" loop={true} slidesPerView={6} delay={2000} spaceBetween={10} className="h-screen col-span-1 border-l border-yellow-400" reverseDirection={true} />
        <CustomerSlider direction="vertical" loop={true} slidesPerView={6} delay={4000} spaceBetween={10} className="h-screen col-span-1" reverseDirection={false} />

        <Content/>

        <CustomerSlider direction="vertical" loop={true} slidesPerView={6} delay={4500} spaceBetween={10} className="h-screen  col-span-1" reverseDirection={false} />
        <CustomerSlider direction="vertical" loop={true} slidesPerView={6} delay={3000} spaceBetween={10} className="h-screen  col-span-1 border-r border-yellow-400" reverseDirection={true} />
      </div>
    </TranslationsProvider>
  )
}
export default Customers