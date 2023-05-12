import { NothingFoundContainer, SkeletonUserContainer, UserListContainer } from "@/components/Common/UserList/UserList.styled";
import { NotificationElementContainer, NotificationListContainer } from "./NotificationList.styled";
import { GLOBAL } from "@/GLOBAL";
import Link from "next/link";
import { parseTime } from "@/hooks/general";
import { useRouter } from "next/router";
import { SkeletonUser } from "@/components/Common/UserList/UserList";

const NotificationList = ({loading, notificationObjects}) => {
    if (loading) return (
        <UserListContainer>
            <SkeletonUser/>
            <SkeletonUser/>
            <SkeletonUser/>
            <SkeletonUser/>
        </UserListContainer>
    )
    if (notificationObjects.length === 0) return (
        <NothingFoundContainer>
            <p>You have no notifications</p>
        </NothingFoundContainer>
    )
    return (
        <NotificationListContainer>
            {
                notificationObjects.map(notificationObject => <NotificationElemement notificationObject={notificationObject}/>)
            }
        </NotificationListContainer>
    );
}

export default NotificationList;

const NotificationElemement = ({notificationObject}) => {
    const router = useRouter()
    const redirectToPost = () => {
        router.push(`/post/${notificationObject.on_post_id}`)
    }
    return (
        <NotificationElementContainer className="notifEl" onClick={redirectToPost}>
            <div className="imageContainer center" href={`/account/${notificationObject.notification_from_user_id}`}>
                <img src={GLOBAL.RESOURCE.IMAGE.PROFILE(GLOBAL.APP_URL, notificationObject.imageURL)}/>
            </div>
            <p>
                {notificationObject.message}
            </p>
            <div className="time">
                {parseTime(notificationObject.created_at)}
            </div>
        </NotificationElementContainer>
    );
}