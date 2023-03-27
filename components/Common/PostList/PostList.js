import { GLOBAL } from "@/GLOBAL";
import Link from "next/link";
import { useEffect, useState } from "react";
import PostEl from "./PostEl/PostEl";
import { LoadingContainer, PostListContainer } from "./PostList.styled";

const PostList = ({postObjects, isLoading}) => {
    if(!isLoading){
        return (
            <PostListContainer>
                <div className="postListInner">
                {postObjects.map((postObject) => (
                    <PostEl key={postObject.id} postObject={postObject}/>
                ))}
                </div>
            </PostListContainer>
        );
        console.log('rednered')
    }else{
        return(
            <LoadingContainer>
                <div className="loading"></div>
                <div className="loading"></div>
                <div className="loading"></div>
                <div className="loading"></div>
            </LoadingContainer>
        );
    }
}


export default PostList;