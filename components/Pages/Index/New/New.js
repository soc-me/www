import Image from "next/image";
import { NewContainer } from "./New.styled";
import createIcon from '@/public/createIcon.png';
import { useState } from "react";
import axios from "@/lib/axios";
import Spinner from "@/components/Common/Spinner/Spinner";
import { MenuBar } from "@/components/Common/TextEditor/TextEditor";
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect } from 'react'
import Placeholder from '@tiptap/extension-placeholder'
import { TextEditorContainer } from "@/components/Common/TextEditor/TextEditor.styled";
import { useRouter } from "next/router";
import TipTapImage from '@tiptap/extension-image'

const New = ({uploadToURL, addToList, loggedIn, placeHolder, communityID} = {}) => {
    const [text, setText] = useState(null);
    const [loading, setLoading] = useState(null);
    //editor config
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
          Placeholder.configure({
            placeholder: placeHolder ? placeHolder :`What's on your mind?`,
          }),
          TipTapImage.configure({
            inline: true,
          }),
        ],
        content: text,
        onUpdate: (({editor}) => {
          const html = editor.getHTML()
          setText(html)
        }),
        editable: true,
    })
    const router = useRouter();
    const handleSubmit = async(e) => {
        if (!loggedIn) {
            router.push('/login');
            return;
        }
        e.preventDefault();
        if(!text) return;
        //parse html to text
        const parser = new DOMParser();
        const parsed_text = parser.parseFromString(text, 'text/html');
        if(!parsed_text.body.innerText.length) return;
        const form = new FormData();
        form.append('content', text);
        if(communityID){
            form.append('community_id', communityID);
        }else{
            form.append('community_id', null);
        }
        setLoading(true);
        try { 
            const res = await axios.post(uploadToURL, form);
            addToList(res.data.returnObject)
            editor.commands.clearContent(true);   
        } catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <NewContainer onSubmit={event => event.preventDefault()}>
            <div className="textEditorContainer">
                <TextEditorContainer>
                    <EditorContent editor={editor}/>
                    <div className="menuBar">
                        <MenuBar editor={editor} />
                    </div>
                </TextEditorContainer>
            </div>
            <div className="buttonContainer">
                <button onClick={(e)=>{handleSubmit(e)}}>
                    {
                        loading
                        ? <Spinner size={15} border={3}/>
                        : <div className="image center"><Image src={createIcon} alt='Create Icon'/></div>
                    }
                </button>
            </div>
        </NewContainer>
    );
}

export default New;