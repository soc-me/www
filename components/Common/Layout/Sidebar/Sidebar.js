import { SidebarContainer } from "./Sidebar.styled";
import Link from "next/link";
import { GLOBAL } from "@/GLOBAL";

const Sidebar = () => {
    return (
        <SidebarContainer>
            <ul>
                <li>
                    <Link href={`/post/${null}`}>
                        <div className="image profile"></div>
                        <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <div className="image home"></div>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href='/search'>
                        <div className="image search"></div>
                        <span>Search</span>
                    </Link>
                </li>
                <li>
                    <Link href='/post/create'>
                        <div className="image create"></div>
                        <span>Create</span>
                    </Link>
                </li>
                <li>
                    <Link href={GLOBAL.REPO_LINK}>
                        <div className="image github"></div>
                        <span>Github</span>
                    </Link>
                </li>
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;