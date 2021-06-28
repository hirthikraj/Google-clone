import styled from 'styled-components';

const Navbarstyled = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    margin-top: 0.3rem;
    position: relative;

    @media(max-width:768px){
        justify-content: flex-start;
    }
    .navbar_mobile{
        display: flex;
        flex-direction: row;
    }

    .navbar_desktop{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .desktopmenu{
        font-size: 14px;
        color: #212121;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }

        @media(max-width:768px){
            display: none;
        }
    }

    .mobileIcon{
        display:none;

        @media(max-width:768px){
            display: block;
            margin-left: 60px;
            font-size: 14px;
            text-decoration:none;
            color: #212121;
            margin-right: -40px;
            margin-top: 5px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: grey;
            font-weight: 500;
            padding-bottom: 10px;
        }
        
        .active{
            border-bottom: 2px solid blue;
        }
    }

    .menu-icon{
        padding: 0.8rem;
        color: #717579;
        margin-right: 0.4rem;
        height: 1.7rem;
        width: 1.7rem;

        &:hover{
            background-color: #F0F0F0;
            border-radius: 50%;
            cursor: pointer;
        }

        @media(max-width:768px){
            position: absolute;
            right:60px
        }
    }

    .avatar{
        margin-right: 1rem;
        height: 2.3rem;
        width: 2.3rem;
        cursor: pointer;
        @media(max-width:768px){
            position: absolute;
            right:10px
        }
    }

    .burgerMenu{
        display: none;

        @media(max-width:768px){
            display: block;
            position: absolute;
            left: 15px;
            top: 10px;
            height: 25px;
            width: 25px;
        }
    }

`;

export default Navbarstyled;