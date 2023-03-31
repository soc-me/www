import UserList from "@/components/Common/UserList/UserList";
import { RequestsPageContainer } from "./RequestsPage.styled";
import { useState } from "react";

const RequestsPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <RequestsPageContainer>
            <div className="requestsPageInner">
                <h1>Follow Requests</h1>
                <div className="userListOuter">
                    <UserList userObjects={testUserObjects}  isLoading={isLoading}/>
                </div>
            </div>
        </RequestsPageContainer>
    );
}

const testUserObjects = [
    {
        name: "testUser1",
        imageURL: "https://i.imgur.com/0y0y0y0.jpg",
    },
    {
        name: "testUser1",
        imageURL: "https://i.imgur.com/0y0y0y0.jpg",
    }
]

export default RequestsPage;