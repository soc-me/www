import { useAuth } from "@/hooks/useAuth";
import New from "../Index/New/New";
import { CommunityPageContainer } from "./CommunityPage.styled";
import { useEffect, useState } from "react";
import PostList from "@/components/Common/PostList/PostList";
import axios from "@/lib/axios";

const CommunityPage = ({communityInfo}) => {
    const [postObjects, setPostObjects] = useState(null)
    const [loading, setIsLoading] = useState(true)
    const {user} = useAuth({middleware: "guest"})
    useEffect(()=>{
        fetchPosts()
    },[])
    const fetchPosts = async() => {
        try{
            const response = await axios.get(`/api/post/community/${communityInfo.id}`)
            setPostObjects(response.data.postObjects)
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <CommunityPageContainer>
            <div className="communityInner">
                <div className="top">
                    <div className="banner"
                        style={{backgroundImage: `url(${(communityInfo.community_banner_image_url!=null && communityInfo.community_banner_image_url!=='null') ? communityInfo.banner_url : "/communitiesBanner.jpg"})`}}
                    ></div>
                    <div className="title">
                        <div className="communityLogo"
                            style={{backgroundImage: `url(${communityInfo.community_icon_image_url!=null && communityInfo.community_icon_image_url!=='null' ? communityInfo.community_icon_image_url : "/communityGenericImage.png"})`}}
                        ></div>
                        <h1>{communityInfo.community_name}</h1>
                    </div>
                    <div className="about">
                        <h2>About</h2>
                        <p>{communityInfo.community_description}</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="newContainer">
                        <New 
                            uploadToURL={`/api/post/create`}
                            addToList={(newPost) => {setPostObjects([newPost, ...postObjects])}}
                            loggedIn={user}
                            // placeHolder={'Post to this community.'}
                            communityID={communityInfo.id}
                        />
                    </div>
                    <div className="postListContainer">
                        <PostList
                            postObjects={postObjects}
                            isLoading={loading}
                            user={user}
                            isCommentList={false}
                            customNotFoundMessage={"No posts in this community"}
                        />
                    </div>
                </div>
            </div>
        </CommunityPageContainer>
    );
}

export default CommunityPage;