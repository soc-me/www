import Spinner from "@/components/Common/Spinner/Spinner";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";
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
            email: (!isLogin && !emailRef.current===null) ? emailRef.current.value : null,
            name: nameRef.current ? nameRef.current.value : null,
            password: passwordRef.current ? passwordRef.current.value : null
        })
    },[])
    const {user, login, register, pauseSWR, resumeSWR } = useAuth({
        middleware: 'guest', redirectIfAuthenticated: '/'
    })
    const handleAuth = (e) => {
        e.preventDefault()
        setStatus({loading: true})
        pauseSWR()
        if(isLogin){
            login({setErrors: setErrors, setStatus: setStatus, name: inputValues.name, password: inputValues.password})
        }else{
            register({setErrors: setErrors,setStatus: setStatus,email: inputValues.email,name: inputValues.name,password: inputValues.password})
        }   
        resumeSWR()
    }
    useEffect(()=>{
        console.log(errors)
    },[errors])
    return (
        <AuthContainer>
            <div className="authInner">
                <h1 className="title">{isLogin ? "Login" : "Register"}</h1>
                <p className="meta">By continuing, you agree to our <Link href='https://example.com'>rules and regulations.</Link></p>
                {(user || (status.loading===false && errors==null))
                ?(
                <p className="redirection">You will be redirected momentarily.</p>
                )
                :(
                <form onSubmit={(event)=>{handleAuth(event)}}>
                    {
                        (!isLogin) 
                        ? (
                            <div className="inputElement email">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" ref={emailRef}
                                 onChange={(e)=>{setInputValues(prevState => ({...prevState, email: e.target.value}))}}
                                 required
                                />
                            </div>
                        )
                        : null
                    }
                    <div className="inputElement username">
                        <label htmlFor="username">Username</label>
                        <input type="text" autoComplete="username"to name="username" id="username" ref={nameRef}
                         onChange={(e)=>{setInputValues(prevState => ({...prevState, name: e.target.value}))}}
                        required
                        />
                    </div>
                    <div className="inputElement password">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password"  ref={passwordRef}
                         onChange={(e)=>{setInputValues(prevState => ({...prevState, password: e.target.value}))}}
                         required
                        />
                    </div>
                    <div className="inputElement submit">
                        <button type="submit">
                            {
                                (status.loading===true)
                                ? (
                                    <div className="spinnerOuter center"><Spinner size={25} border={3}/></div>
                                )
                                :  isLogin ? "Login" : "Register"
                            }
                        </button>
                    </div>
                    {
                    (errors)    
                    ? 
                    <div className="errorContainer">
                        *{
                            isLogin
                            ? (errors.error)
                            : errors
                        }
                    </div>
                    : null
                    }
                    <div className="alt">
                        <p className="meta">{isLogin ? "Don't have an account?" : "Already have an account?"} <Link href={isLogin ? "/register" : "/login"}>{isLogin ? "Sign Up." : "Login."}</Link></p>
                    </div>
                </form>
                )
                }
                
            </div>
            <div className="bgImage"></div>
        </AuthContainer>
    );
}

export default Auth;