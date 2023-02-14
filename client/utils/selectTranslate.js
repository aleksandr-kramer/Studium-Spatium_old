import { en } from "../locales/en";
import { es } from "../locales/es";
import { ru } from "../locales/ru";
import { useRouter } from "next/router";

export default function selectTranslate() {
  const router = useRouter();
  const { locale } = router;
  const t =
    locale === "en" ? en : locale === "ru" ? ru : locale === "es" ? es : "";
  return t;
}
