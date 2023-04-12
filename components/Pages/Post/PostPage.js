import { useAuth } from "@/hooks/useAuth";
import { PostPageContainer } from "./PostPage.styled";
import { useRef } from "react";
import PostList from "@/components/Common/PostList/PostList";
import Image from "next/image";
import leftArrowIcon from "@/public/leftArrowIcon.png";
import { useRouter } from "next/router";
import New from "../Index/New/New";
//
const PostPage = ({data}) => {
    const {user}  = useAuth({middleware: "guest"})
    const isPrivate = useRef(data.is_private)
    const router = useRouter()
    // if the owners account is public, the post data will be available. if not, we need to make a request
    const navigateBack = () =>{
        router.back()
    }
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
                        !isPrivate.current  
                        ? <PostList postObjects={[data.postObject]} isLoading={false} user={user}/>
                        : 'Loading...'
                    }
                    </div>
                </div>
                <div className="comments">
                    {/* <h2>Comments</h2> */}
                    <div className="commentsContainer">
                    </div>
                </div>
                <div className="newContainer">
                    <New uploadToURL={'/api/comment/create'} addToList={null} loggedIn={user} placeHolder={'Leave a comment.'}/>
                </div>
            </div>
        </PostPageContainer>
    );
}

export default PostPage;