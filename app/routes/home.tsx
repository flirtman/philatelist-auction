import type { Route } from "./+types/home";
import HomePage from "../pages/Home/index.jsx";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Stampee's Auction" },
    { name: "description", content: "Welcome to Stampee's Auction!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
