import { GLOBAL } from "@/GLOBAL";
import Link from "next/link";
import { useEffect, useState } from "react";
import PostEl from "./PostEl/PostEl";
import { LoadingContainer, PostListContainer } from "./PostList.styled";
import { NothingFoundContainer } from "../UserList/UserList.styled";

const PostList = ({postObjects, isLoading, user, isCommentList, parentPost, postPage, customNotFoundMessage}=null) => {
    if(!isLoading && postObjects){
        if(postObjects.length == 0){
            return(
                <NothingFoundContainer className="emptyContainer">
                    {
                        customNotFoundMessage ? <p>{customNotFoundMessage}</p> : <>No Posts Found</>
                    }
                </NothingFoundContainer>
            )
        }
        return (
            <PostListContainer>
                <div className="postListInner">
                {postObjects.map((postObject) => (
                    <PostEl key={postObject.id} postObject={postObject} user={user} isComment={isCommentList ? isCommentList : false} parentPost={parentPost} postPage={postPage}/>
                ))}
                </div>
            </PostListContainer>
        );
    }else{
        return(
            <LoadingContainer>
                <SkeletonPost/>
                <SkeletonPost/>
                <SkeletonPost/>
            </LoadingContainer>
        );
    }
}

export const SkeletonPost = () => {
    return (
        <div className="loading">
            <div className="row top">
                <div className="skeleton image"></div>
                <div className="skeleton meta"></div>
            </div>
            <div className="row bottom">
                <div className="skeleton content"></div>
            </div>
        </div>
    );
}


export default PostList;