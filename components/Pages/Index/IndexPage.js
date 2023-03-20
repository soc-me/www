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
                </div>
            </div>
        </IndexContainer>
    );
}

export default IndexPage;