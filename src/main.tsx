import { createRoot } from "react-dom/client";
import "./style.css";
import { Viewer } from "./Viewer";

import { App } from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { TrainingListsService } from "./generated";
import { AiViewer } from "./AiViewer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route
        path="/:id"
        element={<Viewer />}
        loader={async ({ params }) => {
          return await TrainingListsService.getTraininglistsWords(
            parseInt(params.id!, 10)
          );
        }}
      />
      <Route
        path="/:id/ai"
        element={<AiViewer />}
        loader={async ({ params }) => {
          return await TrainingListsService.getTraininglistsWords(
            parseInt(params.id!, 10)
          );
        }}
      />
    </>
  )
);
createRoot(document.getElementById("app") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
