import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AuthContainer } from "./Auth.styled";

const Auth = ({isLogin}) => {
    const emailRef = useRef(null)
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const [inputValues, setInputValues] = useState(null)
    const [errors, setErrors] = useState(null)
    const [status, setStatus] = useState({loading: null})
    useEffect(()=>{
        setInputValues({
            email: !isLogin ? emailRef.current.value : null,
            name: nameRef.current.value,
            password: passwordRef.current.value
        })
    },[])
    const { login, register } = useAuth({
        middleware: 'guest'
    })
    const handleAuth = (e) => {
        e.preventDefault()
        if(isLogin){
            login({setErrors: setErrors, setStatus: setStatus, name: inputValues.name, password: inputValues.password})
        }else{
            register({setErrors: setErrors,setStatus: setStatus,email: inputValues.email,name: inputValues.name,password: inputValues.password})
        }
    }
    useEffect(()=>{
        console.log(errors, status)
    },[errors, status])
    return (
        <AuthContainer>
            <div className="authInner">
                <h1 className="title">{isLogin ? "Login" : "Register"}</h1>
                <p className="meta">By continuing, you agree to our <Link href='/'>rules and regulations.</Link></p>
                <form onSubmit={(event)=>{handleAuth(event)}}>
                    {
                        (!isLogin) 
                        ? (
                            <div className="inputElement email">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" ref={emailRef}
                                 onChange={(e)=>{setInputValues(prevState => ({...prevState, email: e.target.value}))}}
                                />
                            </div>
                        )
                        : null
                    }
                    <div className="inputElement username">
                        <label htmlFor="name">Username</label>
                        <input type="username" name="name" id="name" ref={nameRef}
                         onChange={(e)=>{setInputValues(prevState => ({...prevState, name: e.target.value}))}}
                        />
                    </div>
                    <div className="inputElement password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password"  ref={passwordRef}
                         onChange={(e)=>{setInputValues(prevState => ({...prevState, password: e.target.value}))}}
                        />
                    </div>
                    <div className="inputElement submit">
                        <button type="submit">
                            {
                                (status.loading===true)
                                ? 'Loading...'
                                :  isLogin ? "Login" : "Register"
                            }
                        </button>
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