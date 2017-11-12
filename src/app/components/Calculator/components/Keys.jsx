import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { calculateNewValue, changeValue, clearValue } from "../Calculator.actions";
const styles = require('../calculator.scss');

const Keys = ({value, btns, changeValue, clearValue, calculateNewValue }) => {
      const btnsCategories = Object.keys(btns);

      return (
          <div className={ styles.keys }>
              {
                  btnsCategories.map( (category, index) =>
                      <div className={ styles[category] } key={ index }>
                          {
                              btns[category].map((key, index) => {
                                  let onClick = changeValue.bind(this, key);
                                  if(key === 'C') {
                                      onClick = clearValue.bind(this);
                                  }

                                  if(key === '=') {
                                      onClick = calculateNewValue.bind(this, value);
                                  }

                                  return (
                                      <button key={ index } onClick={ onClick }>
                                          { key }
                                      </button>
                                  );
                              })
                          }
                      </div>
                  )
              }
          </div>
      )
};

const mapStateToProps = (state) => ({
    value: state.value,
    btns: state.btns
});

const mapDispatchToProps = (dispatch) => ({
    changeValue: (text) => {
        dispatch(changeValue(text))
    },
    clearValue: () => {
        dispatch(clearValue());
    },
    calculateNewValue: (value => {
        dispatch(calculateNewValue(value));
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Keys);