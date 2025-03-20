import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./index.scss";
import ThemeProvider from "./context/provider/ThemeProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
