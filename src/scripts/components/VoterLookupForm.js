import React, { useState } from 'react';
import Alert from '@cmsgov/design-system/dist/components/Alert/Alert';
import Button from '@cmsgov/design-system/dist/components/Button/Button';
import Dropdown from '@cmsgov/design-system/dist/components/Dropdown/Dropdown';
import FormLabel from '@cmsgov/design-system/dist/components/FormLabel/FormLabel';
import TextField from '@cmsgov/design-system/dist/components/TextField/TextField';
import postVoterLookup from '../api-sdk/postVoterLookup';
// import PropTypes from 'prop-types';

const VoterLookupForm = () => {
  const [driversLicense, setDriversLicense] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [ssn, setSsn] = useState('');
  const [state, setState] = useState('MI');
  const [zip, setZip] = useState('');
  const [nameFirst, setNameFirst] = useState('');
  const [nameMiddle, setNameMiddle] = useState('');
  const [nameLast, setNameLast] = useState('');
  const [dobMonth, setDobMonth] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [eyeColor, setEyeColor] = useState('');
  const [ballotUrl, setBallotUrl] = useState(null);
  const [formError, setFormError] = useState(null);

  const handleInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;
    switch (name) {
    case 'nameFirst':
      setNameFirst(value);
      break;
    case 'nameMiddle':
      setNameMiddle(value);
      break;
    case 'nameLast':
      setNameLast(value);
      break;
    case 'dobMonth':
      setDobMonth(value);
      break;
    case 'dobDay':
      setDobDay(value);
      break;
    case 'dobYear':
      setDobYear(value);
      break;
    case 'ssn':
      setSsn(value);
      break;
    case 'driversLicense':
      setDriversLicense(value);
      break;
    case 'streetAddress':
      setStreetAddress(value);
      break;
    case 'city':
      setCity(value);
      break;
    case 'state':
      setState(value);
      break;
    case 'zip':
      setZip(value);
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
    } else {
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
    <form onSubmit={handleSubmit} className="ds-l-container">
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
      <fieldset className="ds-u-margin-bottom--1">
        <FormLabel component="legend">Your Name</FormLabel>
        <div className="ds-l-form-row ds-u-margin-bottom--1">
          <TextField
            value={nameFirst}
            label="First Name"
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
            name="nameFirst"
            size="medium"
            required
            onChange={handleInputChange}
          />
          <TextField
            value={nameMiddle}
            label="Middle Name"
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
            name="nameMiddle"
            size="medium"
            onChange={handleInputChange}
          />
          <TextField
            value={nameLast}
            label="Last Name"
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
            name="nameLast"
            size="medium"
            required
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset className="ds-u-margin-bottom--1">
        <FormLabel component="legend">Date of Birth</FormLabel>
        <div className="ds-l-form-row ds-u-margin-bottom--1">
          <TextField
            value={dobMonth}
            label="Month"
            numeric
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
            name="dobMonth"
            size="small"
            required
            onChange={handleInputChange}
          />
          <TextField
            value={dobDay}
            label="Day"
            numeric
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
            name="dobDay"
            size="small"
            required
            onChange={handleInputChange}
          />
          <TextField
            value={dobYear}
            label="Year"
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
            name="dobYear"
            size="small"
            required
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset className="ds-u-margin-bottom--2">
        <FormLabel component="legend">Address</FormLabel>
        <div className="ds-l-row ds-u-margin-bottom--1">
          <TextField
            value={streetAddress}
            label="Street Address"
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
            name="streetAddress"
            size="large"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="ds-l-form-row ds-u-margin-bottom--1">
          <TextField
            value={city}
            label="City"
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
            name="city"
            size="medium"
            required
            onChange={handleInputChange}
          />
          <TextField
            value={state}
            label="State"
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
            name="state"
            size="small"
            required
            disabled
            onChange={handleInputChange}
          />
          <TextField
            value={zip}
            label="Zip"
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
            name="zip"
            mask="zip"
            size="medium"
            required
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset className="ds-u-margin-bottom--2">
        <div className="ds-l-form-row ds-u-margin-bottom--1 ds-u-margin-top--1">
          <TextField
            value={driversLicense}
            label="Driver's License"
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
            name="driversLicense"
            size="medium"
            required
            onChange={handleInputChange}
          />
          <TextField
            value={ssn}
            label="Social Security Number"
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
            name="ssn"
            mask="ssn"
            size="medium"
            required
            onChange={handleInputChange}
          />
          <Dropdown
            options={dropdownOptions}
            label="Eye Color"
            labelClassName="ds-u-margin-top--0"
            className="ds-l-col--auto"
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
        </div>
      </fieldset>
      <div className="ds-u-margin-bottom--2">
        <Button className="ds-c-button" size="medium" variation="primary" type="submit">Submit</Button>
      </div>
    </form>
  );
};

VoterLookupForm.propTypes = {
};

export default VoterLookupForm;
