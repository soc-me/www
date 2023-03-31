import Link from "next/link";
import { UserElContainer, UserListContainer } from "./UserList.styled";

const UserList = ({userObjects, isLoading}) => {
    return (
        <UserListContainer>
            {
                userObjects.map((userObject, index) => {
                    return (
                        <UserEl userObject={userObject} key={index}/>
                    )
                })
            }
        </UserListContainer>
    );
}

export const UserEl = ({userObject}) => {
    return (
        <UserElContainer className="userEl">
            <Link className="imageContainer center" href={`/account/${userObject.id}`}>
                <img src={`${userObject.imageURL}`}/>
            </Link>
            <Link className="username" href={`/account/${userObject.id}`}>{userObject.name}</Link>
        </UserElContainer>
    )
}

export default UserList;