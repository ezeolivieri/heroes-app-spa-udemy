import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="login/*" element={
          <PublicRoute>
            <Routes>
              <Route path='/*' element={<LoginPage />}/>
            </Routes>
          </PublicRoute>
        } />

        {/* PRIVATE ROUTES */}
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
}
