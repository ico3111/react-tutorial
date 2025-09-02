import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//import "./index.css";
import Paragrafo from "./Paragrafo.jsx";
import CaixaTexto from "./CaixaTexto.jsx";
import TarefasForm from "./TarefasForm.jsx";
import AppTarefas from "./AppTarefas.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppTarefas />
    {/* <Paragrafo nome="opa" />
    <CaixaTexto />
    <TarefasForm/> */}
  </StrictMode>
);
