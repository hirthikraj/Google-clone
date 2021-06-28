import styled from "styled-components";

const SideMenuStyled = styled.div`
    position: absolute;
    background-color: white;
    width: 0%;
    height: 100%;
    z-index: 100;
    border-right: 1px solid lightgrey;
    transition: all 1s ease;
    max-width: 300px;
    
    .google-icon{
        display: none;
        position: absolute;
        left: 30px;
        top: -30px;
        height: 30px;
    }
    .close-icon{
        position: absolute;
        right: 20px;
        top:15px;
        height:35px
    }

    .topMenus{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 20%;
        margin-left: 5px;
        
        .Item{
            padding: 10px;
            display: flex;
            flex-direction: row;
        }
        .menuItem{
            color:#6b6b47;
        }
        span{
                margin-left: 10px;
                color: darkslategray;
        }
    }
    ${({ active }) => active && `
        width:60%;

        .google-icon{
            display:block;
            top:-20px;
        }
    `}
`;

export default SideMenuStyled;