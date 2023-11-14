import { BrowserRouter,  } from "react-router-dom";
import { MainLayout } from "./layout";
import { Router } from "./router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Router />
        </MainLayout>
      </BrowserRouter>
    </>
  );
}