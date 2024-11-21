import { Toaster } from "react-hot-toast";
import MainNavigation from "./components/landing-page/MainNavigation";

export default function App() {
  return (
    <>
      <Toaster toastOptions={{ duration: 7000 }} />
      <MainNavigation />
    </>
  );
}
