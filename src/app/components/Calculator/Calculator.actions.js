import {CALCULATE_NEW_VALUE, CHANGE_VALUE, CLEAR_VALUE} from "./Calculator.constants";

export const changeValue = (text) => ({
    type: CHANGE_VALUE,
    text
});

export const clearValue = () => ({
    type: CLEAR_VALUE,
});

export const calculateNewValue = (value) => ({
    type: CALCULATE_NEW_VALUE,
    value
});