import { createStore } from 'redux'
import calculator from "../components/Calculator/Calculator.reducer";

const store = createStore(calculator);

export default store;