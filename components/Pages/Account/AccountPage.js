import axios from "@/lib/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AccountPageContainer } from "./AccountPage.styled";
import logo3 from '@/public/logo3.jpg'
import settingsIconDark from '@/public/settingsIconDark.png'
import PostList from "@/components/Common/PostList/PostList";
import FollowButton from "@/components/Common/Buttons/FollowButton/FollowButton";
import { useAuth } from "@/hooks/useAuth";

const AccountPage = ({minimalUserObject}) => {
    const {user} = useAuth({middleware: 'guest'})
    const [postObjects, setPostObjects] = useState(null)
    const [isPrivate, setIsPrivate] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    //getting the complete user object
    const fetchData = async() => {
        try{
            const response = await axios.get(`/api/post/user/${minimalUserObject.id}`)
            if(response.data.isPrivate){
                setIsPrivate(true)
            }else{
                setIsPrivate(false)
                setPostObjects(response.data.postObjects)
            }
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <AccountPageContainer>
            <div className="info">
                <div className="imageOuter center">
                    <Image src={logo3} alt="profile picture"/>
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
                                        <button className="button settings center">
                                            {/* <Image src={settingsIconDark} alt="settings"/> */}
                                            <span>Edit Profile</span>
                                        </button>
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
                            <span className="number">10</span>
                            <span className="text">posts</span>
                        </div>
                        <div className="following">
                            <span className="number">10</span>
                            <span className="text">following</span>
                        </div>
                        <div className="followers">
                            <span className="number">10</span>
                            <span className="text">followers</span>
                        </div>
                    </div>
                    <div className="row bio">
                        <p>{minimalUserObject.bio}</p>
                    </div>
                </div>
            </div>
            <div className="postListOuter">
                <PostList postObjects={postObjects} isLoading={isLoading}/>
            </div>
        </AccountPageContainer>
    );
}

export default AccountPage;