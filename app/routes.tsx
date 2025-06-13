import App from "./root";
import Home from "./routes/home";
import Product from "./routes/product";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/product",
                element: <Product />,
            },
        ],
    },
];

export default routes;
