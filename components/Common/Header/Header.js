import Link from "next/link";
import { HeaderContainer } from "./Header.styled";
import { GLOBAL } from "@/GLOBAL";

const Header = () => {
    return (
        <HeaderContainer className="center">
            <div className="headerInner">
                <Link className="logo" href='/'>
                    <div className="image"></div>
                    <h2 className="center">{GLOBAL.SITE_NAME.uppercase}</h2>
                </Link>
            </div>
        </HeaderContainer>
    );
}

export default Header;