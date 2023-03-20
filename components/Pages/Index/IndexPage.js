import PostList from "@/components/Common/PostList/PostList";
import { useEffect, useState } from "react";
import { IndexContainer } from "./IndexPage.styled";

const IndexPage = () => {
    const [onlyFollowing, setOnlyFollowing] = useState(false);
    return (
        <IndexContainer className="center">
            <div className="indexInner">
                {/*To do: Add side bar  */}
                <div className="postsOuter">
                    <div className="typeSelect">
                        <button className={`all selected-${!onlyFollowing}`} onClick={() => setOnlyFollowing(false)} >
                            <span>All Posts</span>
                        </button>
                        <button className={`true selected-${onlyFollowing}`} onClick={() => setOnlyFollowing(true)}>
                            <span>Following</span>
                        </button>
                    </div>
                    <PostList postObjects={testPosts}/>
                </div>
            </div>
        </IndexContainer>
    );
}

const testPosts = [
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

export default IndexPage;