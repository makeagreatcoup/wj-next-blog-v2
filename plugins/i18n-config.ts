import { defaultLocale } from "@/utils";

export const i18n ={
  defaultLocale: defaultLocale, // 默认语言,
  locales:['en-US','zh-CN']
}
export type Locale = typeof i18n['locales'][number];