import styled from 'styled-components';

const SearchStyled = styled.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 999px;
    padding: 10px 20px;
    width: 70vw;
    height: 27px;
    max-width: 560px;
    justify-content: space-evenly;
    margin-top: 30px;

    &:hover{
        box-shadow: 1px 3px 3px rgba(0,0,0,0.1);
    }

    @media(max-width:768px)
    {
        width: 80%;
        height: 20px;
    }
    
    input{
        flex: 1;
        border:none;
        outline: none;
        padding: 10px 15px;
        font-size: medium;
    }

    .search-icon,.mic-icon{
        height: 100%;
        height: 1.4rem;
        width: 1.4rem;

        @media(max-width:768px){
            height: 20px;
            width: 30px;
        }
    }

    .search-icon{
        color: #9AA0A6;
    }
    .mic-icon{
        color: #4285F4;
        @media(max-width:768px){
            color: #9AA0A6;
        }
    }
`;

export default SearchStyled;