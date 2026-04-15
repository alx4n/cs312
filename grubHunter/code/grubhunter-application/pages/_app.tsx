import "@/styles/globals.css";
import "@/styles/layout.css";
import type { AppProps } from "next/app";
import { LayoutComponent } from "@/components/layout";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </SessionProvider>
  );
}
