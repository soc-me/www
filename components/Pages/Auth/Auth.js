import { AuthContainer } from "./Auth.styled";

const Auth = ({isLogin}) => {
    return (
        <AuthContainer>
            {
                isLogin ? 'login' : 'register'
            }
        </AuthContainer>
    );
}

export default Auth;