import Image from "next/image";
import { NewContainer } from "./New.styled";
import createIcon from '@/public/createIcon.png';
import { useState } from "react";
import axios from "@/lib/axios";
import Spinner from "@/components/Common/Spinner/Spinner";
import TextEditor from "@/components/Common/TextEditor/TextEditor";

const New = ({uploadToURL, addToList}) => {
    const [text, setText] = useState(null);
    const [loading, setLoading] = useState(null);
    const [clearEditor, setClearEditor] = useState(0);  // set this to any value to refresh the editor
    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('content', text);
        setLoading(true);
        try { 
            console.log(text)
            const res = await axios.post(uploadToURL, form);
            console.log(res.data.postObject)
            addToList(res.data.postObject)
            //setText('');  this is not needed because we are using the clearEditor state
            setClearEditor(clearEditor+1);  // set this to any value to refresh the editor
        } catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <NewContainer onSubmit={event => event.preventDefault()}>
            {/* <textarea name="" id="" placeholder="What's on your mind?" required onChange={(e)=>{setText(e.target.value)}} value={text}></textarea> */}
            <div className="textEditorContainer">
                <TextEditor text={text} setText={setText} isEditable={true} placeholder={"What's on your mind?"} clearEditor={clearEditor}/>
            </div>
            <button onClick={(e)=>{handleSubmit(e)}}>
                {
                    loading
                    ? <Spinner size={20} border={3}/>
                    : <div className="image center"><Image src={createIcon} alt='Create Icon'/></div>
                }
            </button>
        </NewContainer>
    );
}

export default New;