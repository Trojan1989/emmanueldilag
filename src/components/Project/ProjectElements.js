import styled from 'styled-components';

export const ProjectSection = styled.div`

    background: #ededed;
    
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

        @media screen and (max-width: 768px) {
            font-size: 14px;
        }
    }

    .icon {
        font-size: 25px;
        margin-right: 2rem;

        @media screen and (max-width: 768px) {
            font-size: 14px;
            margin-right: 1rem;
        }
    }
`;

export const ProjectTitle = styled.div`
`;

export const SubHeader = styled.h1`
    padding-bottom: 30px;
    text-align: left;
    margin-left: 45px;
    font-size: 25px;
`;