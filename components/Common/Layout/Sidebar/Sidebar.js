import { SidebarContainer } from "./Sidebar.styled";
import Link from "next/link";

const Sidebar = () => {
    return (
        <SidebarContainer>
            <ul>
                <li>
                    <Link href='/'>
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
                    <Link href='/'>
                        <div className="image search"></div>
                        <span>Search</span>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <div className="image explore"></div>
                        <span>Explore</span>
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <div className="image github"></div>
                        <span>Github</span>
                    </Link>
                </li>
            </ul>
        </SidebarContainer>
    );
}

export default Sidebar;