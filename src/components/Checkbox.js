import React from "react";


class checkbox extends Component {
  state = {
    checkbox: "",
    checkboxValid: false,
    errorMsg: {},
    selectedCheckBox: 0
  };
} validateForm = () => {
  const { checkboxValid } = this.state;
  this.setState({
    formValid: checkboxValid
  })}

  export default checkbox