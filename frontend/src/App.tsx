import {ThemeProvider} from "styled-components";
import primary from "./components/Themes/primary.ts";
import GlobalStylesStyled from "./components/GlobalStyles/GlobalStyles.styled.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import TasksPage from "./pages/TasksPage/TasksPage.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.tsx";
import {TokenContext} from "./context/context.ts";
import {useEffect, useState} from "react";

const router = createBrowserRouter([
    {
        path: '/',
        element: (<ProtectedRoute>
            <TasksPage />
        </ProtectedRoute>),
        errorElement: <ErrorPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
]);

function App() {
    const getToken = () : string | null => {
        return localStorage.getItem('token') || null;
    };

    const [token, setToken] = useState(getToken());

    useEffect(() => {
        setToken(getToken());
    }, []);

    const updateToken = (token: string | null) => {
        setToken(token);
        if(token === null) {
            localStorage.removeItem("token");
        } else {
            localStorage.setItem("token", token);

        }
    }

    return (
        <>
            <ThemeProvider theme={primary}>
                <GlobalStylesStyled/>
                <TokenContext.Provider value={{token, updateToken}}>
                    <RouterProvider router={router} />
                </TokenContext.Provider>
            </ThemeProvider>
        </>
    )
}

export default App
