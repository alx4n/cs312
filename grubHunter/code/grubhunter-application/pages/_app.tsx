import "@/styles/globals.css";
import "@/styles/layout.css";
import type { AppProps } from "next/app";
import { LayoutComponent } from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>);
}
