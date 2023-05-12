import { useAuth } from "@/hooks/useAuth";
import { NotificationsContainer } from "./NotificationsPage.styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import NotificationList from "./NotificationList/NotificationList";

const NotificationsPage = () => {
    const {user} = useAuth({middleware: 'auth'})
    const [notificationObjects, setNotificationObjects] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetchNotifications();
    },[])
    const fetchNotifications = async () => {
        setLoading(true);
        try{
            const res = await axios(`/api/notification/my_notifications`);
            setNotificationObjects(res.data.notificationObjects);
            setLoading(false);
            readAllNotifications();
        }catch(err){
            console.log(err);
        }
    }
    const readAllNotifications = async () => {
        try{
            const res = await axios.put(`/api/notification/read_all`);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <NotificationsContainer>
            <div className="notificationsInner">
                <h1>Notifications</h1>
                <NotificationList loading={loading} notificationObjects={notificationObjects}/>
            </div>
        </NotificationsContainer>
    );
}

export default NotificationsPage;