import Header from "../Header/Header";
import { LayoutContainer } from "./Layout.styled";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({children}) => {
    return (
        <LayoutContainer>
            <Header/>
            <div className="layoutInner">
                <div className="sidebarOuter">
                    <div>
                        <Sidebar/>
                    </div>
                </div>
                <div className="childContainer">
                    {children}
                </div>
            </div>
        </LayoutContainer>
    );
}

export default Layout;