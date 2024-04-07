import {PropsWithChildren, useContext, useEffect} from 'react';
import {TokenContext} from "../../context/context.ts";
import {useNavigate} from "react-router-dom";

type ProtectedProps = PropsWithChildren

function ProtectedRoute({ children }: ProtectedProps) {
    const {token} = useContext(TokenContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(token === null) {
            navigate('/login', {replace: true})
        }
    }, [navigate, token])

    return children;
}

export default ProtectedRoute;