import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Component from './Component';
import { changeValue } from './actions'

class Container extends React.Component {

  handleChangeValue = (key, value) => {
    const { actions } = this.props;
    actions.changeValue(key, value);
  }

  render() {
    const { prepSchool: { sportId, positionId, highSchool, day, month, year, gender, customGender } } = this.props;

    return (
      <Component
        sportId={sportId}
        positionId={positionId}
        highSchool={highSchool}
        day={day}
        month={month}
        year={year}
        gender={gender}
        customGender={customGender}
        onChangeValue={this.handleChangeValue}
      />
    );
  }
}

const mapStateToProps = state => ({
  prepSchool: state.prepSchool,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    changeValue,
  }, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));
