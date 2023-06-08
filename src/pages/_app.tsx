import { type AppType } from "next/dist/shared/lib/utils";
import { NavigationBar } from "~/components/NavigationBar";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <div>
    <NavigationBar/>
    <Component {...pageProps} />
  </div>;
};

export default MyApp;
