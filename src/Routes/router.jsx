import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import LatestNews from "../Components/LatestNews";
import Header from "../Components/Header";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <Navigate to={"category/2"} />
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
        path: '/news/:id', 
        element: <h1>news layout</h1>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>, 
        children: [
            {
                path:'/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    },
]);
export default router;
