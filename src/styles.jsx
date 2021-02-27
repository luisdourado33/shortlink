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

export const Main = styled.main`
    background-color: #FFF;
    padding: 15px;
    color: #333;
    display: flex;
    border-radius: 2px;
    border-width: 10px;
    transition: border-width 2ms;
    :hover {
        border-color: #333;
        border-width: 10px;
        color: #33E;
    }
`;

export const Input = styled.input`
    border-radius: 10px;
    border-color: #eee;
    background-color: #eee;
    color: #333;
    padding: 10px;
`;

export const Form = styled.div`
    flex-direction: column;
    flex: 1;
    display: flex;
`;

export const SubmitButton = styled.button`
    padding: 5px;
    margin-block: 10px;
`;