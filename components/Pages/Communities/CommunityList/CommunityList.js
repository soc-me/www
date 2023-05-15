import Link from "next/link";
import { CommunityListContainer, SkeletonCommunityElementContainer } from "./CommunityList.styled";
import { parseTime } from "@/hooks/general";
import { useRouter } from "next/router";
import { NothingFoundContainer } from "@/components/Common/UserList/UserList.styled";
import { GLOBAL } from "@/GLOBAL";

const CommunityList = ({communityObjects, loading}) => {
    const router = useRouter();
    const redirectToCommunity = (id) => {
        router.push(`/community/${id}`);
    }
    if(loading){
        return(
            <CommunityListContainer className="communityList">
                <SkeletonCommunityElement/>
                <SkeletonCommunityElement/>
                <SkeletonCommunityElement/>
                <SkeletonCommunityElement/>
                <SkeletonCommunityElement/>
            </CommunityListContainer>
        )
    }
    if(!communityObjects || communityObjects.length === 0){
        return(
            <NothingFoundContainer>
                <h1>No Communities Found</h1>
            </NothingFoundContainer>
        )
    }
    return (
        <CommunityListContainer className="communityList">
            {communityObjects.map((object, index) => {
                return (
                    <div key={index} className="listEl" onClick={()=>redirectToCommunity(object.id)}>
                        <Link className="communityImage" href={`/community/${object.id}`}
                            style={{backgroundImage: `url(${object.community_icon_image_url!=null && object.community_icon_image_url!=='null' ? `${GLOBAL.APP_URL}${object.community_icon_image_url}` : "/communityGenericImage.png"})`}}
                        ></Link>
                        <div className="text">
                            <Link className="nameContainer" href={`/community/${object.id}`}>
                                <h3 className="name">{object.community_name}</h3>
                            </Link>
                            {
                                object.last_post_time
                                ? (
                                    <div className="lastPosted">
                                        <p>Last posted {parseTime(object.last_post_time)}</p>
                                    </div>
                                )
                                : null
                            }
                        </div>
                    </div>
                );
            })}
        </CommunityListContainer>
    );
}

const SkeletonCommunityElement = () => {
    return(
        <SkeletonCommunityElementContainer className="listEl">
            <div className="communityImage"></div>
            <div className="text">
            </div>
        </SkeletonCommunityElementContainer>
    )
}


export default CommunityList;