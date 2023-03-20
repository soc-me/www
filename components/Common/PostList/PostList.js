import Link from "next/link";
import { PostListContainer } from "./PostList.styled";

const PostList = ({postObjects}) => {
    const postElements = postObjects.map((postObject) => (
        <div className="post">
                <Link href={`/account/1`} className="imageContainer">
                    <div className="image"
                        style={{backgroundImage: `url('/logo3.jpg')`}}
                    ></div>
                </Link>
                <div className="content">
                    <div className="meta">
                        <Link href={`/account/1`} className="username">{postObject.name}</Link>
                        <div className="seperator"></div>
                        <span className="date">2 hr</span>
                    </div>
                    <div className="text">{postObject.text}</div>
                </div>
        </div>
    ))
    return (
        <PostListContainer>
            <div className="postListInner">
                {postElements}
            </div>
        </PostListContainer>
    );
}

export default PostList;