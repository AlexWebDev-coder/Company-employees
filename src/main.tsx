import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./public/style/main.css";
import "./public/style/reset.css";
import AppLayout from "./layout/index.tsx";

import { BrowserRouter } from "react-router-dom";
import QueryProvider from "./providers/query/index.tsx";
import createEmotionCache from "./lib/createEmotionCache.ts";

const clientSideEmotionCache = createEmotionCache();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <QueryProvider dehydratedState={clientSideEmotionCache}>
      <AppLayout>
        <App />
      </AppLayout>
    </QueryProvider>
  </BrowserRouter>
);
