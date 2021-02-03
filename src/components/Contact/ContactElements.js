import styled from 'styled-components';

export const ContactSection = styled.div`

    background: #ededed;

    form {
        text-align: left;
    }

    form .form-label {
        font-size: 18px;

        @media screen and (max-width: 1024px) {
            font-size: 28px;
        }

        @media screen and (max-width: 768px) {
            font-size: 22px;
        }

        @media screen and (max-width: 540px) {
            font-size: 20px;
        }

        // @media screen and (max-width: 425px) {
        //     font-size: 20px;
        // }

        // @media screen and (max-width: 375px) {
        //     font-size: 20px;
        // }

        // @media screen and (max-width: 320px) {
        //     font-size: 20px;
        // }

        @media screen and (max-width: 280px) {
            font-size: 18px;
        }
    }

    form ::placeholder {

        @media screen and (max-width: 1024px) {
            font-size: 22px;
        }

        @media screen and (max-width: 768px) {
            font-size: 20px;
        }

        @media screen and (max-width: 540px) {
            font-size: 20px;
        }

        // @media screen and (max-width: 425px) {
        //     font-size: 20px;
        // }

        // @media screen and (max-width: 375px) {
        //     font-size: 20px;
        // }

        // @media screen and (max-width: 320px) {
        //     font-size: 20px;
        // }

        @media screen and (max-width: 280px) {
            font-size: 18px;
        }
    }

    .btn.resume {
        background: #1ebba3;
        padding: 8px 16px;
        border-radius: 3px;
        color: white !important;
        font-size: 24px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border: none;

        &:hover {
            color: #1ebba3;
            background: #010101;
        }
    }

    .btn.submit {
        @media screen and (max-width: 1024px) {
            font-size: 28px;
        }

        @media screen and (max-width: 768px) {
            font-size: 22px;
        }

        @media screen and (max-width: 540px) {
            font-size: 20px;
        }

        // @media screen and (max-width: 425px) {
        //     font-size: 20px;
        // }

        // @media screen and (max-width: 375px) {
        //     font-size: 20px;
        // }

        // @media screen and (max-width: 320px) {
        //     font-size: 20px;
        // }

        @media screen and (max-width: 280px) {
            font-size: 18px;
        }
    }

`;

export const ContactTitle = styled.div`

`;

export const Footer = styled.footer`
    background: #343a40;
    color: whitesmoke;

    h3 {

        text-transform: uppercase;

        @media screen and (max-width: 768px) {
            font-size: 20px;
        }

        @media screen and (max-width: 540px) {
            font-size: 20px;
        }

        // @media screen and (max-width: 425px) {
        //     font-size: 20px;
        // }

        // @media screen and (max-width: 375px) {
        //     font-size: 20px;
        // }

        // @media screen and (max-width: 320px) {
        //     font-size: 20px;
        // }

        @media screen and (max-width: 280px) {
            font-size: 18px;
        }
    }

    p {
        @media screen and (max-width: 540px) {
            font-size: 16px;
        }

        // @media screen and (max-width: 425px) {
        //     font-size: 20px;
        // }

        // @media screen and (max-width: 375px) {
        //     font-size: 20px;
        // }

        // @media screen and (max-width: 320px) {
        //     font-size: 20px;
        // }

        @media screen and (max-width: 280px) {
            font-size: 12px;
        }
    }

    hr {
        border-bottom: 1px solid #fff;

        // @media screen and (max-width: 1024px) {
        //     width: 25vw;
        // }

        // @media screen and (max-width: 768px) {
        //     width: 22vw;
        // }

        // @media screen and (max-width: 540px) {
        //     width: 50vw;
        // }

        // @media screen and (max-width: 425px) {
        //     width: 45vw;
        // }

        // // @media screen and (max-width: 375px) {
        // //     width: 70vw;
        // // }

        // // @media screen and (max-width: 320px) {
        // //     width: 65vw;
        // // }

        // @media screen and (max-width: 280px) {
        //     width: 55vw;
        // }
    }

    .social {
        display: flex;
        justify-content: space-between;
        padding: 0 7rem;
        font-size: 1.3rem;

        &:hover {
            color: 
        }

        @media screen and (max-width: 1080px) {
            padding: 0 3rem;
        }

        @media screen and (max-width: 540px) {
            padding: 0 6rem;
            font-size: 1.5rem;
        }

        @media screen and (max-width: 425px) {
            padding: 0 4.5rem;
        }

        @media screen and (max-width: 375px) {
            padding: 0 4rem;
            font-size: 1.3rem;
        }

        @media screen and (max-width: 320px) {
            padding: 0 3rem;
        }

        @media screen and (max-width: 280px) {
            padding: 0 1rem;
            font-size: 1.1rem;
        }
    }

    .social a {
        color: #fff;
    }

    .fb {

        &:hover {
            color: #3b5998;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }


    }

    .ms {
        &:hover {
            color: #006AFF;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }

        @media screen and (max-width: 320px) {
            
        }
    }
    
    .go:hover {
        color: #db4a39;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }

    .info {
        margin-right: 10px;
    }
`;