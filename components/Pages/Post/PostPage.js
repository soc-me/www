import { useAuth } from "@/hooks/useAuth";
import { PostPageContainer } from "./PostPage.styled";
import { useEffect, useRef, useState } from "react";
import PostList, { SkeletonPost } from "@/components/Common/PostList/PostList";
import Image from "next/image";
import leftArrowIcon from "@/public/leftArrowIcon.png";
import { useRouter } from "next/router";
import New from "../Index/New/New";
import axios from "@/lib/axios";
import { LoadingContainer } from "@/components/Common/PostList/PostList.styled";

/*
    SEO:
    To make sure we don't lose any SEO, all public posts will have their data available on initial load.
    This post data will be loaded to a ghost element which the user cannot see - this data will be replaced
    with the data from an API call. This is because we cannot make authenticate the user before the page loads.
*/

const PostPage = ({data}) => {
    const [postLoading, setPostLoading] = useState(true)
    const [commentLoading, setCommentLoading] = useState(true)
    const [postData, setPostData] = useState(null)
    const [commentData, setCommentData] = useState(null)
    const {user} = useAuth({'middleware': data.is_private ? 'auth' : 'guest'})
    const router = useRouter()
    const navigateBack = () =>{
        router.back()
    }
    // get post data on user init and change
    const getPostData = async() => {
        try{
            const res = await axios(`/api/post/${data.postObject.id}`)
            setPostData(res.data.postObject)
            setPostLoading(false)
        }
        catch(err){
            if(err.response.status === 401){
                router.push('/')
            }
        }
        try{
            const res = await axios(`/api/comment/post/${data.postObject.id}`)
            setCommentData(res.data.commentObjects)
            setCommentLoading(false)
        }
        catch(err){
            if (err.response.data.noComments){
                setCommentData([])
                setCommentLoading(false)
            }
        }
    }
    const addToListFn = (postObject) => {
        setCommentData([...commentData, postObject])
    }
    useEffect(()=>{
        getPostData()
    },[user])
    return (
        <PostPageContainer>
            <div className="postPageInner">
                <div className="threadStarter">
                    <h2 onClick={navigateBack}>
                        <Image src={leftArrowIcon} alt="left arrow icon" width={20} height={20} />
                        <span>Thread</span>
                    </h2>
                    <div className="starterContainer">
                    {
                        !postLoading
                        ? <PostList postObjects={[postData]} isLoading={false} user={user} postPage={true}/>
                        : <>
                            <LoadingContainer>
                                <SkeletonPost/>
                            </LoadingContainer>
                          </>
                    }
                    </div>
                </div>
                <div className="newContainer">
                    <New uploadToURL={`/api/comment/create/${data.postObject.id}`} addToList={addToListFn} loggedIn={user} placeHolder={'Leave a comment on this post.'}
                    />
                </div>
                <div className="comments">
                    {/* <h2>Comments</h2> */}
                    <div className="commentsContainer">
                    {
                        !commentLoading
                        ? <PostList postObjects={commentData} isLoading={false} user={user} isCommentList={true} parentPost={postData} customNotFoundMessage={'No Comments'}/>
                        : <>
                            <LoadingContainer>
                                <SkeletonPost/>
                            </LoadingContainer>
                          </>
                    }
                    </div>
                </div>
            </div>
        </PostPageContainer>
    );
}

export default PostPage;