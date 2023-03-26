import { GLOBAL } from "@/GLOBAL";
import { parseTime } from "@/hooks/general";
import Color from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "next/link";
import TextEditor from "../../TextEditor/TextEditor";
import { TextEditorContainer } from "../../TextEditor/TextEditor.styled";
import { PostElContainer } from "./PostEl.styled";

const PostEl = ({postObject}) => {
    const editor = useEditor({
        extensions: [
          Color.configure({ types: [TextStyle.name, ListItem.name] }),
          TextStyle.configure({ types: [ListItem.name] }),
          StarterKit.configure({
            bulletList: {
              keepMarks: true,
              keepAttributes: false, 
            },
            orderedList: {
              keepMarks: true,
              keepAttributes: false,
            },
            history: true,
            italic: false,
            heading:{
              levels: [1],
            }
          })
        ],
        content: postObject.content,
        editable: false,
    })
    return (
        <PostElContainer>
            <div className="content">
                <div className="meta">
                    <Link href={`/account/${postObject.user_id}`} className="imageContainer">
                        <div className="image"
                            style={{backgroundImage: `url('${GLOBAL.RESOURCE.IMAGE.PROFILE(GLOBAL.APP_URL, postObject.imageURL)}')`}}
                        ></div>
                    </Link>
                    <Link href={`/account/${postObject.user_id}`} className="username">{postObject.name}</Link>
                    <div className="seperator"></div>
                    <span className="date">{parseTime(postObject.created_at)}</span>
                    <button className="menu center">
                        <div className="image"></div>
                    </button>
                </div>
                <div className="text">
                    <TextEditorContainer>
                        <EditorContent editor={editor}/>
                    </TextEditorContainer>
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