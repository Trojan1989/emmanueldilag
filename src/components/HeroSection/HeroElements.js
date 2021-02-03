import styled from 'styled-components';
import computer from '../img/computers.png';

export const HeroSection = styled.div`
    background: url(${computer});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;

export const HeroIntro = styled.h5`
    font-size: 2.5em;
    font-weight: 300;
    color: #fff;
    font-family: sans-serif;

    @media screen and (max-width: 540px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 1.8rem;
    }
`;

export const HeroName = styled.h1`
    font-size: 4em;
    font-weight: bolder;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    padding: 10px 0 15px 0;

    @media screen and (max-width: 540px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 2rem;
    }
`;

export const HeroWord = styled.p`
    font-size: 1em;
    font-weight: lighter;
    color: #fff;
    word-spacing: 5px;
    letter-spacing: 1px;

    @media screen and (max-width: 540px) {
        font-size: 1.5rem;
    }
`;