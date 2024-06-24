import { NavLink } from "react-router-dom";
import styled from "styled-components";
 
 
export const NavLinkLight = styled(NavLink)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #ffffff;
    }
`;

export const NavLinkDark = styled(NavLink)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #696969;
    }
`;