import React from "react";
import { Outlet } from "react-router-dom";
import "./app.scss"

export default function App() {
  return (
      <main>
          <Outlet/>
      </main>
  );
}