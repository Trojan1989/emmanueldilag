import styled from 'styled-components';

export const AboutSection = styled.div`

    background: #ededed;
    overflow: hidden;

    .me {
        border-top-left: 2px solid #000;
        box-shadow: 5px 5px 15px #555;
        border: 2px solid #1ebba3;
    }

    ul {
        margin-top: 3rem;
    }

    ul li {
        list-style: none;
        text-align: left;
        display: block;
        font-size: 16px;
        line-height: 35px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        padding: 5px;

        &:hover {
            box-shadow: 5px 5px 15px rgba(0,0,0,0.4);
            transform: scale(1.01);
            border-bottom: 3px solid #1ebba3;
            border-right: 3px solid #1ebba3;
            font-weight: bold;
        }

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }

        @media screen and (max-width: 540px) {
            font-size: 16px;
        }

        @media screen and (max-width: 280px) {
            font-size: 14px;
        }
    }

    ul li ul {
        margin-top: 0;
    }

    ul li ul li {
        margin-left: 45px;

        @media screen and (max-width: 768px) {
            margin-left: 10px;
        }

        &:hover {
            border-right: none;
            border-left: 2px solid #1ebba3;
        }
    }

    ul li .icon {
        font-size: 25px;
        margin-right: 3rem;

        @media screen and (max-width: 768px) {
            font-size: 14px;
            margin-right: 1rem;
        }

        @media screen and (max-width: 540px) {
            font-size: 18px;
        }

        @media screen and (max-width: 280px) {
            font-size: 18px;
        }
    }

    b {
        &:hover {
            color: red;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }
    }
`;

export const AboutTitle = styled.div`
`;

export const AboutMe = styled.p`
    text-align: justify;
    padding-top: 30px;
    font-family: 'Poppins';
    line-height: 28px;
    font-family: 'Montserrat';

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    @media screen and (max-width: 540px) {
        // font-size: 14px;
        line-height: 28px;
    }

    @media screen and (max-width: 280px) {
        font-size: 14px;
        line-height: 35px;
    }
`;

export const AboutKnowledge = styled.div`
    font-family: 'Montserrat';
    text-align: left;

    h1 {
        margin-left: 45px;

        @media screen and (max-width: 540px) {
            font-size: 1.8rem;
        }
    }
`;