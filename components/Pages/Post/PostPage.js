import { useAuth } from "@/hooks/useAuth";
import { PostPageContainer } from "./PostPage.styled";

const PostPage = ({data}) => {
    const {user}  = useAuth({middleware: "guest"})
    // if the owners account is public, the post data will be available. if not, we need to make a request
    return (
        <PostPageContainer>
            <div className="postPageInner">
                Hello
            </div>
        </PostPageContainer>
    );
}

export default PostPage;