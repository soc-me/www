import Image from "next/image";
import { NewContainer } from "./New.styled";
import createIcon from '@/public/createIcon.png';
import { useState } from "react";
import axios from "@/lib/axios";
import Spinner from "@/components/Common/Spinner/Spinner";

const New = ({uploadToURL, addToList}) => {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(null);
    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('content', text);
        setLoading(true);
        try { 
            const res = await axios.post(uploadToURL, form);
            console.log(res.data.postObject)
            addToList(res.data.postObject)
            setText('')
        } catch (err) {
            console.log(err);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <NewContainer onSubmit={(e)=>{handleSubmit(e)}}>
            <textarea name="" id="" placeholder="What's on your mind?" required onChange={(e)=>{setText(e.target.value)}} value={text}></textarea>
            <button type="submit">
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