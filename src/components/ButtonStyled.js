import styled from 'styled-components';

const ButtonStyled = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    

    button{
        font-size:13px;
        margin: 0 10px;
        background-color:#f5f5f0;
        border: none ;
        text-transform: inherit;
        border-radius: 5px;
        color: #585858;

        &:hover{
            box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
            border: 0.5px solid lightgray;
        }
        &:focus{
            border: 1px solid #0066cc;
        }

        @media(max-width:768px){
            margin-top: 20px;
        }
    }
`;

export default ButtonStyled;