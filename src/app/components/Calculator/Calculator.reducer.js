const initialState = {
    value: '0',
    btns: {
        numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '='],
        basicOperations: ['+', '-', '*', '/'],
        clearValue: ['C']
    }
};

const calculator = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_VALUE':
            return {
                ...state,
                value: state.value === '0' ? action.text : `${state.value}${action.text}`
            };
        case 'CLEAR_VALUE':
            return {
                ...state,
                value: '0'
            };
        case 'CALCULATE_NEW_VALUE':
            return {
                ...state,
                value: eval(action.value) === Infinity ? '0' : `${eval(action.value)}`
            };
        default:
            return state;
    }
};

export default calculator;