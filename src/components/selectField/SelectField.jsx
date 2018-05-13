import React from 'react';

class SelectField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };
  }

  handleOpen = () => this.setState({ opened: !this.state.opened });

  handleChange = (value) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(value);
    }

    this.handleOpen();
  }

  renderChildren = () => {
    const { value } = this.props;
    return React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        className: value === child.props.value ?
          'select-field__list-item select-field__list-item_active' :
          'select-field__list-item',
        onClick: (event) => this.handleChange(child.props.value),
      });
    });
  }

  getPrimaryText = () => {
    const { children, value } = this.props;

    let primaryText = null;

    React.Children.forEach(children, (child) => {
      if (value === child.props.value && child.props.primaryText) {
        primaryText = child.props.primaryText;
      }
    });

    return primaryText;
  }

  render() {
    const { name, placeholderText, className } = this.props;
    const { opened } = this.state;

    const primaryText = this.getPrimaryText();

    return (
      <div className={`select-field ${className ? className : ''}`}>
        <div className="select-field__input">
          <label className="select-field__input-label">{name}</label>
          <div onClick={this.handleOpen} className="select-field__input-button">
            <div>
              {primaryText ?
                primaryText :
                <span className="select-field__input-button-placeholder">{placeholderText}</span>}
            </div>
          </div>
        </div>
        {
          opened && <ul className="select-field__list">
            {this.renderChildren()}
          </ul>
        }
      </div>

    );
  }
}

export default SelectField;
