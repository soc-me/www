import Header from "../Header/Header";
import { LayoutContainer } from "./Layout.styled";

const Layout = ({children}) => {
    return (
        <LayoutContainer>
            <Header/>
            <div className="layoutInner">
                {children}
            </div>
        </LayoutContainer>
    );
}

export default Layout;