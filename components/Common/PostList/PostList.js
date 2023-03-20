import Link from "next/link";
import { useEffect, useState } from "react";
import { PostListContainer } from "./PostList.styled";

const PostList = ({resourceURL}) => {
    //Post Objects
    const [postObjects, setPostObjects] = useState([]);
    
    //Add posts to postElements
    const addPosts = (newPostObjects) => {
        setPostObjects([...postObjects, ...newPostObjects]);
    }

    //Fetch posts
    const asyncFetchPosts = async () => {
        addPosts(test_postObjects)
    }
    useEffect(() => {
        asyncFetchPosts();
    }, [])

    return (
        <PostListContainer>
            <div className="postListInner">
            {postObjects.map((postObject) => (
                <div className="post">
                        <Link href={`/account/1`} className="imageContainer">
                            <div className="image"
                                style={{backgroundImage: `url('/logo3.jpg')`}}
                                ></div>
                        </Link>
                        <div className="content">
                            <div className="meta">
                                <Link href={`/account/1`} className="username">{postObject.name}</Link>
                                <div className="seperator"></div>
                                <span className="date">2 hr</span>
                            </div>
                            <div className="text">{postObject.text}</div>
                        </div>
                </div>
                ))}
            </div>
        </PostListContainer>
    );
}

const test_postObjects = [
    {
        'id': 1,
        'name': 'Thenu_K',
        'text': 'This is a test post.',
        'date': '2021-08-01',
        'likeCount': 12,
    },
    {
        'id': 1,
        'name': 'Thenu_K',
        'text': 'This is a second test post.',
        'date': '2021-08-01',
        'likeCount': 12,
    }
]

export default PostList;