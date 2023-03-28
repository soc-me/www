import { useAuth } from "@/hooks/useAuth";
import { PostPageContainer } from "./PostPage.styled";

const PostPage = ({minimalPostData}) => {
    const {user}  = useAuth({middleware: "guest"})
    //check whether post is private
    // if private, check if user is logged in
    return (
        <PostPageContainer>
            <div className="postPageInner">
                Hello
            </div>
        </PostPageContainer>
    );
}

export default PostPage;