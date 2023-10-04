import { extendTheme } from "@chakra-ui/react";
import { Kumbh_Sans } from "next/font/google";

const kumbh = Kumbh_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
  style: ["normal"],
});
const theme = extendTheme({
  fonts: {
    kumbh: kumbh.style.fontFamily,
    heading: kumbh.style.fontFamily,
    body: kumbh.style.fontFamily,
  }
})

export default theme;