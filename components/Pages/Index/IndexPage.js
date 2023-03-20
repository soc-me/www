import PostList from "@/components/Common/PostList/PostList";
import { GLOBAL } from "@/GLOBAL";
import useFetchPosts from "@/hooks/useFetchPosts";
import { useEffect, useState } from "react";
import { IndexContainer } from "./IndexPage.styled";

const IndexPage = () => {
    const [onlyFollowing, setOnlyFollowing] = useState(false);
    const {postObjects, isLoading, error} = useFetchPosts({onlyFollowing});
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
                    {
                        (!isLoading)
                        ? <PostList postObjects={postObjects} />
                        : <div className="loading">Loading...</div>
                    }
                </div>
            </div>
        </IndexContainer>
    );
}

export default IndexPage;