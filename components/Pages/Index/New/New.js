import Image from "next/image";
import { NewContainer } from "./New.styled";
import createIcon from '@/public/createIcon.png';
import { useState } from "react";
import axios from "@/lib/axios";

const New = ({uploadToURL, addToList}) => {
    const [text, setText] = useState(null);
    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('content', text);
        try { 
            const res = await axios.post(uploadToURL, form);
            addToList(res.data.postObject)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <NewContainer onSubmit={(e)=>{handleSubmit(e)}}>
            <textarea name="" id="" placeholder="What's on your mind?" required onChange={(e)=>{setText(e.target.value)}}></textarea>
            <button type="submit">
                <div className="image center"><Image src={createIcon}/></div>
            </button>
        </NewContainer>
    );
}

export default New;