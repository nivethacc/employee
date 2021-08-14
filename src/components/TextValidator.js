import React from 'react';
import { ValidatorComponent } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';

class TextValidator extends ValidatorComponent {

  renderValidatorComponent() {
    const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;

    return (
      <div>
        <TextField
          {...rest}
          ref={(r) => { this.input = r; }}
        />
        {this.errorText()}
      </div>
    );
  }

  errorText() {
    const { isValid } = this.state;

    if (isValid) {
        return null;
    }

    return (
      <div style={{ color: 'red' }}>
        {this.getErrorMessage()}
      </div>
    );
  }
}

export default TextValidator;