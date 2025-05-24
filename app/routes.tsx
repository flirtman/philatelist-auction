import App from "./root";
import Home from "./routes/home"; // create this if it doesn’t exist

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },
];

export default routes;
