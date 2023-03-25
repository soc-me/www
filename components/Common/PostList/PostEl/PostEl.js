import Link from "next/link";
import TextEditor from "../../TextEditor/TextEditor";
import { PostElContainer } from "./PostEl.styled";

const PostEl = ({postObject}) => {
    return (
        <PostElContainer>
            <div className="content">
                <div className="meta">
                    <Link href={`/account/${postObject.user_id}`} className="imageContainer">
                        <div className="image"
                            style={{backgroundImage: `url('/logo3.jpg')`}}
                        ></div>
                    </Link>
                    <Link href={`/account/${postObject.user_id}`} className="username">{postObject.name}</Link>
                    <div className="seperator"></div>
                    <span className="date">2 hr</span>
                    <button className="menu center">
                        <div className="image"></div>
                    </button>
                </div>
                <div className="text">
                    <TextEditor text={postObject.content} isEditable={false} placeholder={''} setText={null}/>
                </div>
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