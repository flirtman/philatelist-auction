import type { Route } from "./+types/home";
import ProductPage from "../pages/Product/index.jsx";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Stampee's Auction | Product Name" },
        { name: "description", content: "Product Name" },
    ];
}

export default function Home() {
    return <ProductPage />;
}
