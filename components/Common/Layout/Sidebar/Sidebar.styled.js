import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 100%;
    & ul{
        width: 100%;
        display: flex; flex-direction: column;
        align-items: flex-start;
        & li{
            width: 100%;
            display: flex; flex-direction: row; align-items: center;
            margin-bottom: 20px;
            &:last-of-type{margin-bottom: 0;}
            & a{
                width: 100%;
                display: flex; flex-direction: row; align-items: center;
                justify-content: center;
                width: 180px;
                padding: 10px 0;
                border-radius: 10px;
                height: 60px;
                box-sizing: border-box;
                background-color: ${GLOBAL.PRIMARY_COLOR};
                cursor: pointer;
                &:hover{background-color: ${GLOBAL.BUTTON_COLORS[0].PRIMARY};}
                & .image{
                    width: 30px; height: 30px;
                    margin-right: 15px;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    &.profile{background-image: url('/userIcon.png');}
                    &.home{background-image: url('/homeIcon.png');}
                    &.search{background-image: url('/searchIcon.png');}
                    &.explore{background-image: url('/exploreIcon.png');}
                    &.github{background-image: url('/githubIcon.png');}
                }
                & span{
                    font-weight: 500;
                }
            }
        }
    }
`