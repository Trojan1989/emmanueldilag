import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 2.5rem;
    position: relative;
    font-family: 'Montserrat';
    text-transform: uppercase;

    :before {
        content: '';
        position: absolute;
        top: 100%;
        left: 32%;
        width: 35%;
        border-bottom: 2px solid #1ebba3;
        margin-top: 10px;

        @media screen and (max-width: 540px) {
            width: 80%;
            left: 10%;
        }
    }

    @media screen and (max-width: 540px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width: 425px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 375px) {
        font-size: 2rem;
    }
`;