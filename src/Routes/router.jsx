import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import LatestNews from "../Components/LatestNews";
import Header from "../Components/Header";
import Test from "../Components/test";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <Navigate to={"category/1"} />
            },
            {
                path: "category/:id",
                element: <CategoryNews />,
                loader: async ({ params }) => {
                   
                    const res = await fetch("https://mocki.io/v1/764a0a33-4c72-4176-8121-219af4f0b786");
                    if (!res.ok) {
                        throw new Error("Failed to fetch news");
                    }
                    const allNews = await res.json();

                    const categoryId = parseInt(params.id, 10);
                    const filtered = allNews.filter(item => item.category_id === categoryId);

                    return filtered;
                },
            },
        ]
    },
    {
        path: '/news',
        element: <h1>News layout</h1>
    },
    {
        path: '/auth',
        element: <h1>Login</h1>
    },
    {
        path: '/error',
        element: <h1>Error</h1>
    },
]);
export default router;
