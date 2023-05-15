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
import { NothingFoundContainer } from "@/components/Common/UserList/UserList.styled";

const AccountPage = ({minimalUserObject}) => {
    const {user} = useAuth({middleware: 'guest'})
    const [postObjects, setPostObjects] = useState(null)
    const [notAllowed, setNotAllowed] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [followerCount, setFollowerCount] = useState(minimalUserObject.followers)
    //getting the complete user object
    const fetchData = async() => {
        try{
            const response = await axios.get(`/api/post/user/${minimalUserObject.id}`)
            if(response.data.notAllowed){
                setNotAllowed(true)
            }else{
                setNotAllowed(false)
                setPostObjects(response.data.postObjects)
            }
        }catch(error){
            setNotAllowed(true)
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
                <div className="row">
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
                                                <FollowButton currUser={user} compareToUser={minimalUserObject} updateCount={setFollowerCount}/>
                                            </div>
                                        )
                                    )
                                    : (
                                        <Link href='/register' className="button fakeFollow center">
                                                {/* <Image src={settingsIconDark} alt="settings"/> */}
                                                <span>Follow</span>
                                        </Link>
                                    )
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
                                <span className="number">{followerCount}</span>
                                <span className="text">follower{followerCount!==1 ? 's' : null}</span>
                            </div>
                        </div>
                        <div className="row bio">
                            <p>{minimalUserObject.bio}</p>
                        </div>
                    </div>
                </div>
                <div className="row second">
                    <div className="innerRow followersList">
                        <div className="posts">
                            <span className="number">{minimalUserObject.postCount}</span>
                            <span className="text">post{minimalUserObject.postCount!==1 ? 's' : null}</span>
                        </div>
                        <div className="following">
                            <span className="number">{minimalUserObject.following}</span>
                            <span className="text">following</span>
                        </div>
                        <div className="followers">
                            <span className="number">{followerCount}</span>
                            <span className="text">follower{followerCount!==1 ? 's' : null}</span>
                        </div>
                    </div>
                    <div className="innnerRow bio">
                        <p>{minimalUserObject.bio}</p>
                    </div>
                </div>
            </div>
            <div className="postListOuter">
                {
                    (isLoading)
                    ? <PostList postObjects={null} isLoading={true} user={user}/>
                    : (!notAllowed)
                        ? <PostList postObjects={postObjects} isLoading={false} user={user}/>
                        : (
                            <NothingFoundContainer>
                                <p>This is a private account - follow them to see their posts.</p>
                            </NothingFoundContainer>
                        )
                }
            </div>
        </AccountPageContainer>
    );
}

export default AccountPage;