import axios from "@/lib/axios";
import { useState } from "react";
import { LikeButtonContainer } from "./LikeButton.styled";

const LikeButton = ({initialLikeCount, postID, userLiked}) => {
    const [isLiked, setIsLiked] = useState(userLiked);
    const [loading, setLoading] = useState(false);
    const handleLike = async () => {
        if(loading) {return};
        if(isLiked){
            setIsLiked(false);
            try{
                const res = await axios.delete(`/api/like/create/${postID}`);
                console.log(res.data);
            }catch(err){
                console.log(err);
                setIsLiked(true);
            }
        }else{
            setIsLiked(true);
            try{
                const res = await axios.post(`/api/like/delete/${postID}`);
                console.log(res.data);
            }catch(err){
                console.log(err);
                setIsLiked(false);
            }
        }
    }
    return (
        <LikeButtonContainer onClick={handleLike}>
            {
                loading
                ? (<>
                    <div className="image likeIcon" style={{backgroundImage: "url('/heartOff.png')"}}></div>
                    <span className="likeCount">Like</span>
                  </>)
                : (<>
                    {
                        isLiked
                        ? <div className="image likeIcon whyy" style={{backgroundImage: "url('/heartOn.png')"}}></div>
                        : <div className="image likeIcon" style={{backgroundImage: "url('/heartOff.png')"}}></div>
                    }
                    <span className="likeCount">{initialLikeCount===0 ? 'Like' : initialLikeCount}</span>
                </>)
            }
        </LikeButtonContainer>
    );
}

export default LikeButton;