import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Category from "../../Pages/Category/Category";
import News from "../../Pages/News/News";
import { SERVERURL } from '../../lib/serverurl';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`${SERVERURL}/news`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`${SERVERURL}/category/${params.id}`)
                
        
            },
            {
                path: '/news/:id',
                element: <News></News>,
                loader: ({ params }) => fetch(`${SERVERURL}/news/${params.id}`)
            }
        ]
    }
])