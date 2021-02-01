import React, { useState } from 'react';
import Alert from '@cmsgov/design-system/dist/components/Alert/Alert';
import Button from '@cmsgov/design-system/dist/components/Button/Button';
import Dropdown from '@cmsgov/design-system/dist/components/Dropdown/Dropdown';
import TextField from '@cmsgov/design-system/dist/components/TextField/TextField';
import postVoterLookup from '../api-sdk/postVoterLookup';
// import PropTypes from 'prop-types';

const VoterLookupForm = () => {
  const [driversLicense, setDriversLicense] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [ballotUrl, setBallotUrl] = useState(null);
  const [formError, setFormError] = useState(null);

  const handleInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;
    switch (name) {
    case 'driversLicense':
      setDriversLicense(value);
      break;
    case 'eyeColor':
      setEyeColor(value);
      break;
    default:
      break;
    }
  };
  const dropdownOptions = [
    { label: '-- Select your eye color --', value: '' },
    { label: 'Blue', value: 'BLU' },
    { label: 'Brown', value: 'BRO' },
    { label: 'Unknown', value: 'XXX' },
  ];
  const onSuccess = (data) => {
    const { BallotUrl: _ballotUrl } = data;
    if (_ballotUrl) {
      setBallotUrl(_ballotUrl);
    }
    else {
      setFormError('Please try again.');
      setBallotUrl(null);
    }
  };
  const onError = () => {
    setFormError('Please try again.');
    setBallotUrl(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(null);
    const data = {
      eyeColor,
      driversLicense,
    };
    postVoterLookup(data, onSuccess, onError);
  };
  return (
    <form onSubmit={handleSubmit}>
      {ballotUrl && (
        <Alert variation="success" heading="Success">
          <p className="ds-c-alert__text">{ballotUrl}</p>
        </Alert>
      )}
      {formError && (
        <Alert variation="error" heading="Something went wrong">
          <p className="ds-c-alert__text">{formError}</p>
        </Alert>
      )}
      <TextField
        value={driversLicense}
        label="Driver's License"
        hint="Enter your driver's license number"
        labelClassName="ds-u-margin-top--0"
        name="driversLicense"
        required
        onChange={handleInputChange}
      />
      <Dropdown
        options={dropdownOptions}
        label="Eye Color"
        labelClassName="ds-u-margin-top--0"
        name="eyeColor"
        value={eyeColor}
        onChange={handleInputChange}
        required
      >
        {dropdownOptions.map((o) => {
          if (o.value === '') {
            return (
              <option
                disabled
                value={o.value}
                key={o.value}
              >
                {o.label}
              </option>
            );
          }
          return <option value={o.value}>{o.label}</option>;
        })}
      </Dropdown>
      <Button className="ds-c-button" variation="primary" type="submit">Submit</Button>
    </form>
  );
};

VoterLookupForm.propTypes = {
};

export default VoterLookupForm;
