import styled from "styled-components";
import { Form, Field } from "formik";

export const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 15px;
`;

export const InputForm = styled(Field)`
    margin-top: 10px;
    margin-bottom: 20px;
    width: 200px;
`;

export const AddButton = styled.button`
    width: 90px;
    outline: none;
    border: 1px solid grey;
    background-color: white;
    transition: background-color 250ms linear;
    &:hover, &:focus {
        background-color: #0088ff;
    }
`;