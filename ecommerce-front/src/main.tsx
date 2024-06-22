import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";
import './styles/global.css'
//styles
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(<AppRouter />);
