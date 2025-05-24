import type { Route } from "./+types/home";
import HomePage from "../pages/Home/index.jsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Great! React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
