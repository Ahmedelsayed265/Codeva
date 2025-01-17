import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import { router } from "./providers/router";
import i18n from "./utils/i18n";
import ParticlesComponent from "./components/ParticlesComponent";

export default function App() {
  const { lang } = useSelector((state) => state.language);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const body = document.querySelector("body");
    lang === "en" ? body.classList.add("en") : body.classList.remove("en");
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <>
      <Toaster expand={false} duration={2000} position="bottom-right" />
      <ParticlesComponent />
      <RouterProvider router={router} />
    </>
  );
}
