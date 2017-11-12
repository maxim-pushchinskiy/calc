import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const styles = require('../calculator.scss');

const Display = ({ value }) => (
    <input className={ styles.display } value={ value} />
);

const mapStateToProps = (state) => (
    { value: state.value }
);

Display.propTypes = {
    value: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(Display);