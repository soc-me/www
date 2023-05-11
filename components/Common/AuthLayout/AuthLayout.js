import { AuthLayoutContainer } from "./AuthLayout.styled";

const AuthLayout = ({children}) => {
    return (
        <AuthLayoutContainer>
            <div className="authLayoutInner center">
                {/* <div className="backgroundImage">
                    <div className="image"></div>
                </div> */}
                {/* <div className="children">
                    {children}
                </div> */}
                {children}
            </div>
        </AuthLayoutContainer>
    );
}

export default AuthLayout;