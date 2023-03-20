import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 100%;
    display: flex; flex-direction: column;
    align-items: center;
    & .layoutInner{
        width: 95%;
        max-width: 2000px;
        display: flex; flex-direction: row; align-items: flex-start;
        margin-top: 55px;
        & .sidebarOuter{
            margin-right: 5vw;
            padding-right: 1.5vw;
            position: sticky;
            left: 0;
            top: calc(55px + 30px);  /* margin of page + header*/
            margin-top: calc(30px);  /* margin of page*/ 
            border-right: 0px solid ${GLOBAL.ACCENT_COLOR};   
            overflow-y:scroll;
            min-height: calc(100vh - 55px);
            & >div{
                width: 100%;
            }
       }
    }
    & .childContainer{
        width: 100%;
        display: flex; flex-direction: column;
        justify-content: flex-start;
        min-height: calc(100vh - 55px);
    }
`