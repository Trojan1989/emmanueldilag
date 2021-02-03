import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';

export const NavStyles = styled.div`
    background: ${({scrollNav}) => (scrollNav ? '#343a40' : 'transparent')};
    height: 60px;
    margin-top: -60px;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: all 0.6s ease-in-out;
    font-family: 'Lato';

    .navbar {
        font-weight: 700;
        font-size: 16px;
        padding: 10px 0;
        font-weight: 400;
        text-transform: uppercase;

        @media screen and (max-width: 767px) {
            background: #343a40;
        }
    }

    .navbar .navbar-brand {
        font-weight: bold;
    }

    .navbar.toggle {
        color: white;
    }

    .navbar-toggler {
        outline: none;
        border: none;
        padding-right: 0;
    }

    .navbar-toggler-icon {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
    }

    .navbar-nav {
        padding: 0 1rem;

        @media screen and (max-width: 767px) {
            padding-left: 0;
            padding-top: 20px;
            padding-bottom: 20px;
        }
    }

    .navbar-nav .nav-item {

        @media screen and (max-width: 425px) {
            padding: 10px 0;
        }
    }
`;

export const NavLink = styled(LinkScroll)`
    color: white !important;
    padding: 0 1rem;
    cursor: pointer;
    font-weight: 600;

    &.active, &:hover {
        color: #1ebba3 !important;
        transition: all 0.3s ease-in-out;
    }

    @media screen and (max-width: 425px) {
        padding: 0;
    }
`;