import {ThemeProvider} from "styled-components";
import primary from "./components/Themes/primary.ts";
import GlobalStylesStyled from "./components/GlobalStyles/GlobalStyles.styled.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import TasksPage from "./pages/TasksPage/TasksPage.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <TasksPage />,
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
        return localStorage.getItem('token');
    }

    return (
        <>
            <ThemeProvider theme={primary}>
                <GlobalStylesStyled/>
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    )
}

export default App
