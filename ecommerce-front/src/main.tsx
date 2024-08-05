import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";
//redux
import { Provider } from "react-redux";
import { store, persistor } from "@store/index";
//axios
import "./services/axios-global"
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}></PersistGate>
    <AppRouter />
  </Provider>
);
