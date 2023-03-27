import axios from "@/lib/axios";
import { useState } from "react";
import { LikeButtonContainer } from "./LikeButton.styled";

const LikeButton = ({initialLikeCount, postID, userLiked}) => {
    const [isLiked, setIsLiked] = useState(userLiked);
    const [likeCount, setLikeCount] = useState(initialLikeCount);
    const handleLike = async () => {
        if(isLiked){
            setIsLiked(false);
            setLikeCount(likeCount-1);
            try{
                const res = await axios.delete(`/api/like/delete/${postID}`);
            }catch(err){
                console.log(err);
                setIsLiked(true);
                setIsLiked(likeCount+1);
            }
        }else{
            setIsLiked(true);
            setLikeCount(likeCount+1);
            try{
                const res = await axios.post(`/api/like/create/${postID}`);
                console.log(res.data);
            }catch(err){
                console.log(err);
                setIsLiked(false);
                setIsLiked(likeCount-1);
            }
        }
    }
    return (
        <LikeButtonContainer onClick={handleLike}>
            {
                isLiked
                ? <div className="image likeIcon whyy" style={{backgroundImage: "url('/heartOn.png')"}}></div>
                : <div className="image likeIcon" style={{backgroundImage: "url('/heartOff.png')"}}></div>
            }
            <span className="likeCount">{likeCount===0 ? 'Like' : likeCount}</span>
        </LikeButtonContainer>
    );
}

export default LikeButton;