import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import AuthContext from "@/context/AuthContext";
Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContext>
      <Component {...pageProps} />
    </AuthContext>
  );
}
