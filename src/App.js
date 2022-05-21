import { React } from "react";

import { GlobalProvider } from "./context/globalContext";
import MainPage from "./components/Pages/MainPage";

import "./App.css";
import "./lib/fontawesome/css/all.min.css";

function App() {
  return (
    <GlobalProvider>
      <MainPage />
    </GlobalProvider>
  );
}

export default App;
