import Link from "next/link";
import { PostElContainer } from "./PostEl.styled";

const PostEl = ({postObject}) => {
    return (
        <PostElContainer>
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
                    <button className="menu center">
                        <div className="image"></div>
                    </button>
                </div>
                <div className="text">{postObject.content}</div>
                <div className="buttonControls">
                    <button className="like item">
                        {/* Todo: create reusable like button */}
                        <div className="image likeIcon"></div>
                        <span className="likeCount">10</span>
                    </button>
                    <Link className="comment item" href={`/post/${postObject.id}`}>
                        <div className="image commentIcon"></div>
                        <span>Comments</span>
                    </Link>
                </div>
            </div>
        </PostElContainer>
    );
}

export default PostEl;