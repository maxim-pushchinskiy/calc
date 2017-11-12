import React from 'react';
import Display from "./components/Display";
import Keys from "./components/Keys";

const styles = require('./calculator.scss');

const Calculator = () => (
    <div className={ styles.cals }>
        <Display />
        <Keys />
    </div>
);

export default Calculator;