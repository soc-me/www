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
import LikeButton from "./LikeButton/LikeButton";
import { PostElContainer, PostMenuContainer } from "./PostEl.styled";
import { useEffect, useRef, useState } from "react";
import axios from "@/lib/axios";
import TipTapImage from "@tiptap/extension-image";

const PostEl = ({postObject, user, isComment} = null) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
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
          }),
          TipTapImage.configure({
              inline: true,
          }),
        ],
        content: postObject.content,
        editable: false,
    })
    if (isDeleted) return null;
    return (
        <PostElContainer className="postEl">
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
                    <button className="menuOuter center" onClick={()=>setShowMenu(true)}>
                        <div className="image"></div>
                        {
                            showMenu
                            ? <PostMenu postObject={postObject} setShowMenu={setShowMenu} user={user} isComment={isComment ? isComment : false} setIsDeleted={setIsDeleted}/>
                            : null
                        }
                    </button>
                </div>
                <div className="text">
                    <TextEditorContainer>
                        <EditorContent editor={editor}/>
                    </TextEditorContainer>
                </div>
                {
                    !isComment
                    ? (
                        <div className="buttonControls">
                            <div className="likeOuter item">
                                <LikeButton initialLikeCount={postObject.likeCount} postID={postObject.id} userLiked={postObject.liked} user={user}/>
                            </div>
                            <Link className="comment item" href={`/post/${postObject.id}`}>
                                <div className="image commentIcon"></div>
                                <span>Comments</span>
                            </Link>
                        </div>
                    )
                    : null
                }
            </div>
        </PostElContainer>
    );
}

export const PostMenu = ({postObject, setShowMenu, user, isComment, setIsDeleted} = null) => {
    const [showDelete, setShowDelete] = useState(null);
    const [showDeleteAsAdmin, setShowDeleteAsAdmin] = useState(null);
    const ref = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            setShowMenu(false);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
    const addToClipboard = () => {
        navigator.clipboard.writeText(`${GLOBAL.WWW_URL}/post/${postObject.id}`)
        .then(()=>{
            setShowMenu(false);
        })
    }
    useEffect(()=>{
        if(user.id === postObject.user_id){
            setShowDelete(true);
        }
        if(user.isAdmin){
            setShowDeleteAsAdmin(true);
        }
    }, [user])
    const deletePost = async(asAdmin) => {
        try{
            const formData = new FormData();
            formData.append("asAdmin", asAdmin);
            if(isComment){
                const res = await axios.delete(`/api/comment/delete/${postObject.id}`, {data: formData})
            }else{
                const res = await axios.delete(`/api/post/delete/${postObject.id}`, {data: formData})
            }
            setIsDeleted(true);
        }
        catch (err){
            console.log(err);
        }
    }
    return(
        <PostMenuContainer id={`menuButton_${postObject.id}`} ref={ref}>
            {
                showDelete
                ? <button className="delete delete" onClick={()=>deletePost(false)}>Delete {isComment ? 'Comment' : 'Post'}</button>
                : null
            }
            {
                showDeleteAsAdmin
                ? <button className="deleteAsAdmin delete" onClick={()=>deletePost(true)}>Delete As Admin</button>
                : null
            }
            {
                !isComment
                ? (
                    <>
                        <Link href={`/post/${postObject.id}`}>Go to Post</Link>
                    </>
                )
                : null
            }
            <button className="copyURL" onClick={addToClipboard}>Copy URL</button>
        </PostMenuContainer>
    )
}

export default PostEl;