import Link from "next/link";
import { AuthContainer } from "./Auth.styled";

const Auth = ({isLogin}) => {
    const handleLogin = (e) => {
        e.preventDefault()
    }
    return (
        <AuthContainer>
            <div className="authInner">
                <h1 className="title">{isLogin ? "Login" : "Register"}</h1>
                <p className="meta">By continuing, you agree to our <Link href='/'>rules and regulations.</Link></p>
                <form onSubmit={(isLogin)=>{handleLogin(isLogin)}}>
                    {
                        (!isLogin) 
                        ? (
                            <div className="inputElement email">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email"/>
                            </div>
                        )
                        : null
                        
                    }
                    <div className="inputElement username">
                        <label htmlFor="name">Username</label>
                        <input type="username" name="name" id="name"/>
                    </div>
                    <div className="inputElement password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password"/>
                    </div>
                    <div className="inputElement submit">
                        <button type="submit">{isLogin ? "Login" : "Register"}</button>
                    </div>
                    <div className="alt">
                        <p className="meta">{isLogin ? "Don't have an account?" : "Already have an account?"} <Link href={isLogin ? "/register" : "/login"}>{isLogin ? "Sign Up." : "Login."}</Link></p>
                    </div>
                </form>
            </div>
        </AuthContainer>
    );
}

export default Auth;