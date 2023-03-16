import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FormspreeProvider } from "@formspree/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FormspreeProvider project={"Birthday Invitation"}>
        <Component {...pageProps} />
      </FormspreeProvider>
    </>
  );
}
