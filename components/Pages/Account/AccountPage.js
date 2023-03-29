import axios from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AccountPageContainer } from "./AccountPage.styled";
import logo3 from '@/public/logo3.jpg'
import settingsIconDark from '@/public/settingsIconDark.png'
import PostList from "@/components/Common/PostList/PostList";
import FollowButton from "@/components/Common/Buttons/FollowButton/FollowButton";
import { useAuth } from "@/hooks/useAuth";
import { GLOBAL } from "@/GLOBAL";
import Link from "next/link";
import { useRouter } from "next/router";

const AccountPage = ({minimalUserObject}) => {
    const {user} = useAuth({middleware: 'guest'})
    const [postObjects, setPostObjects] = useState(null)
    const [notAllowed, setNotAllowed] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    //getting the complete user object
    const fetchData = async() => {
        try{
            const response = await axios.get(`/api/post/user/${minimalUserObject.id}`)
            console.log(response.data)
            if(response.data.notAllowed){
                setNotAllowed(true)
            }else{
                setNotAllowed(false)
                setPostObjects(response.data.postObjects)
            }
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }
    const router = useRouter()
    useEffect(() => {
        setIsLoading(true)
        fetchData()
    }, [router.asPath])
    return (
        <AccountPageContainer>
            <div className="info">
                <div className="imageOuter center">
                    {/* This requires us to know the image size beforehand */}
                    <img src={GLOBAL.RESOURCE.IMAGE.PROFILE(GLOBAL.APP_URL, minimalUserObject.imageURL)} alt="profile picture"/>
                </div>
                <div className="meta">
                    <div className="row top">
                        <h1 className="username">{minimalUserObject.name}</h1>
                        <div className="buttons">
                            {
                                (user)
                                ? (
                                    (user.id === minimalUserObject.id)
                                    ? (
                                        <Link href='/account/settings' className="button settings center">
                                            {/* <Image src={settingsIconDark} alt="settings"/> */}
                                            <span>Edit Profile</span>
                                        </Link>
                                    )
                                    : (
                                        <div className="followButtonContainer button">
                                            <FollowButton currUser={user} compareToUser={minimalUserObject}/>
                                        </div>
                                    )
                                )
                                : null
                            }     
                        </div>
                    </div>
                    <div className="row followersList">
                        <div className="posts">
                            <span className="number">{minimalUserObject.postCount}</span>
                            <span className="text">post{minimalUserObject.postCount!==1 ? 's' : null}</span>
                        </div>
                        <div className="following">
                            <span className="number">{minimalUserObject.following}</span>
                            <span className="text">following</span>
                        </div>
                        <div className="followers">
                            <span className="number">{minimalUserObject.followers}</span>
                            <span className="text">follower{minimalUserObject.followers!==1 ? 's' : null}</span>
                        </div>
                    </div>
                    <div className="row bio">
                        <p>{minimalUserObject.bio}</p>
                    </div>
                </div>
            </div>
            <div className="postListOuter">
                {
                    (isLoading)
                    ? <PostList postObjects={null} isLoading={true}/>
                    : (!notAllowed)
                        ? <PostList postObjects={postObjects} isLoading={false}/>
                        : (
                            <div className="privateError">
                                <div className="imageContainer">
                                    <img src="/privateIcon2.png" alt="" />
                                </div>
                                <div className="text">
                                    <h3>This Account Is Private</h3>
                                    <p>You must follow this account to see its posts</p>
                                </div>
                            </div>
                        )
                }
            </div>
        </AccountPageContainer>
    );
}

export default AccountPage;