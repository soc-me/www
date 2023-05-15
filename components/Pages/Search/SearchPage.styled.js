import { GLOBAL } from "@/GLOBAL";
import styled from "styled-components";

export const SearchPageContainer = styled.div`
    width: 100%;
    width: clamp(500px, 55%, 1000px);
    margin-top: 30px;
    margin-bottom: 20px;
    @media (max-width: 1000px) { width: 97.5%; }
    & .searchInner{
        width: 100%;
        display: flex;
        flex-direction: column;
        & .top{
            width: 100%;
            display: flex; flex-direction: column;
            margin-bottom: 30px;
            & .searchBar{
                width: 100%;
                background-color: ${GLOBAL.SECONDARY_COLOR};
                border-radius:5px;
                border: 1px solid ${GLOBAL.ACCENT_COLOR};
                display: flex; align-items: center;
                & input{
                    width: 100%;
                    height: 40px;
                    padding: 10px 20px;
                    background-color: transparent;
                    border: none;
                    outline: none;
                    color: white;
                    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                        color: #DDDDDD;
                        opacity: 1; /* Firefox */
                    }
                    :-ms-input-placeholder { /* Internet Explorer 10-11 */
                        color:  #DDDDDD;
                    }
                    ::-ms-input-placeholder { /* Microsoft Edge */
                        color:  #DDDDDD;
                    }
                }
                & .imageContainer{
                    background-color: ${GLOBAL.PRIMARY_COLOR};
                    padding: 5px 5px;
                    margin: 0 20px;
                    border-radius: 5px;;
                }
            }
            & .categories{
                margin-top: 10px;
                width: 100%;
                display: flex;
                align-items: center;
                box-sizing: border-box;
                & .category{
                    width: 50%;
                    height: 50px;
                    border-bottom: 3px solid ${GLOBAL.ACCENT_COLOR};
                    background-color: transparent;
                    color: inherit;
                    outline: none;
                    & h2{
                        font-weight: 500;
                        box-sizing: border-box;
                        height: 100%;
                        width: 100%;
                        display: flex; align-items: center; justify-content: center;
                    }
                    &.selected{
                        border-bottom: 3px solid ${GLOBAL.LOADER_COLOR};
                    }
                    cursor: pointer;
                    &:hover{
                        background-color: ${GLOBAL.PRIMARY_COLOR};
                        &:first-of-type{
                            border-radius: 5px 0 0 0;
                        }
                        &:last-of-type{
                            border-radius: 0 5px 0 0;
                        }
                    }
                }
            }
        }
    }
`;