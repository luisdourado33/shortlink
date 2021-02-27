import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff;
    background-image: url("https://www.transparenttextures.com/patterns/black-thread-light.png");
`;

export const MainDiv = styled.main`
    padding: 15px;
    color: #333;
    display: flex;
    border-radius: 2px;
    border-width: 10px;
    align-items: center;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const LinkList = styled.div`
    background-color: #FFF;
    padding: 15px;
    color: #333;
    display: flex;
    flex: 1;
    flex-direction: row;
    border-radius: 2px;
    border-width: 10px;
`;

export const LinkItem = styled.div`
    background-color: #333;
    border-radius: 10px;
    color: #FFF;
    padding: 10px;
    margin-block: 10px;
`;

export const Input = styled.input`
    border-radius: 10px;
    border-color: #eee;
    border-style: solid;
    background-color: #eee;
    font-family: 'Montserrat', sans-serif;
    color: #333;
    padding: 10px;
`;

export const Form = styled.div`
    flex-direction: column;
    flex: 1;
    display: flex;
    margin-left: 50px;

    @media (max-width: 768px) {
        margin-left: 0px;
    }
`;

export const SubmitButton = styled.button`
    padding: 5px;
    background-color: #eee;
    border-color: transparent;
    border-radius: 10px;
    border-width: 0.1em;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    border-style: solid;
    margin-block: 10px;
    transition: border-color 0.5s;

    :hover {
        border-color: #333;
        border-width: 0.1em;
    }
`;