import Link from "next/link";
import { HeaderContainer, NavContainer } from "./Header.styled";
import { GLOBAL } from "@/GLOBAL";

const Header = () => {
    return (
        <HeaderContainer className="center">
            <div className="headerInner">
                <Link className="logo" href='/'>
                    <div className="image"></div>
                    <h2 className="center">{GLOBAL.SITE_NAME.uppercase}</h2>
                </Link>
                <NavContainer>
                    <ul>
                        <li className="homeLink">
                            <Link href='/' aria-label="Link to home page"><div className="image"></div></Link>
                        </li>
                        <li className="accountsLink">
                            <Link href='/accounts' aria-label="Link to account search"><div className="image"></div></Link>
                        </li>
                        <li className="profileLink">
                            <Link href='/account/1' aria-label="Link to profile page"><div className="image" style={{backgroundImage: `url('/logo3.jpg')`}}></div></Link>
                        </li>
                    </ul>
                </NavContainer>
            </div>
        </HeaderContainer>
    );
}

export default Header;