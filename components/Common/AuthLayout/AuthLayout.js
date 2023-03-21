import { AuthLayoutContainer } from "./AuthLayout.styled";

const AuthLayout = ({children}) => {
    return (
        <AuthLayoutContainer>
            <div className="authLayoutInner">
                <div className="backgroundImage">
                    <div className="image"></div>
                </div>
                <div className="children">
                    {children}
                </div>
            </div>
        </AuthLayoutContainer>
    );
}

export default AuthLayout;