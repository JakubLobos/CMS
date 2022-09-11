import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 400px;
    min-height: 400px;
    padding: 50px 20px 50px 20px;
    background-color: whitesmoke;
    border: 1px solid black;
    border-radius: 20px;
    margin-bottom: 20px;
    color: black;

    & img {
        width: 100%;
        border: 4px solid black;
        margin: 20px 0 20px 0;
    }

    & h3 {
        margin-top: 20px;
        font-size: 14px;
    }

`