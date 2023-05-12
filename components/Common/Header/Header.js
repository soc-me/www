import Link from "next/link";
import { HeaderContainer, NavContainer } from "./Header.styled";
import { GLOBAL } from "@/GLOBAL";
import { useAuth } from "@/hooks/useAuth";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";

const Header = () => {
    const { user } = useAuth({middleware: 'guest'});
    const [requestCount, setRequestCount] = useState(null);
    const getReqeustCount = async () => {        
        //get follow request count
        try{
            const res = await axios(`/api/follow/followrequests_count/${user.id}`);
            setRequestCount(res.data.requestCount);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        if(user&&user.is_private){
            getReqeustCount();
        }
    },[user])
    return (
        <HeaderContainer className="center">
            <div className="headerInner">
                <Link className="logo" href='/'>
                    <div className="image"></div>
                    <h2 className="center">{GLOBAL.SITE_NAME.uppercase}</h2>
                </Link>
                <NavContainer>
                    <ul>
                        <li className="homeLink">
                            <Link href='/' aria-label="Link to home page"><div className="image"></div></Link>
                        </li>
                        <li className="accountsLink">
                            <Link href='/search?category=accounts' aria-label="Link to account search"><div className="image"></div></Link>
                        </li>
                        {(
                            (user) 
                            ? (
                                <>
                                {
                                    user.is_private
                                    ? (
                                        <li className="requestsLink">
                                            <Link href={`/account/requests`} aria-label="Link to follow requests"><div className="image"></div></Link>
                                        </li>
                                    )
                                    : null
                                }
                                <li className="notificationsLink">
                                    <Link href={`/notifications`} aria-label="Link to notifications"><div className="image"></div></Link>
                                </li>
                                <li className="profileLink">
                                    <Link href={`/account/${user.id}`} aria-label="Link to profile page" className="profContainer"><div className="image" style={{backgroundImage: `url('${GLOBAL.RESOURCE.IMAGE.PROFILE(GLOBAL.APP_URL, user.imageURL)}')`}}></div></Link>
                                </li>
                                </>
                            )
                            : (
                                <li className="loginLink">
                                    <Link href='/register' aria-label="Link to register page">Join</Link>
                                </li>
                            )
                        )}
                    </ul>
                </NavContainer>
            </div>
        </HeaderContainer>
    );
}

export default Header;