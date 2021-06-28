import styled from 'styled-components';

const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;

    .app_Body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .google-icon{
        height: 90px;
        object-fit: contain;
        margin-top: 7% ;

        @media(max-width:768px){
            height: 50px;
            margin-top: 15%;
        }
    }

`;

export default HomeStyled;