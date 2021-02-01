function sendRequest(url = '', data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
}

const defaultData = {
  driversLicense: null,
  eyeColor: null,
};

export default function postVoterLookup(data = defaultData, onSuccess, onError) {
  const postData = {
    VoterRecordsRequest: {
      GeneratedDate: '2020-1-1',
      Issuer: 'KylixDemo',
      TransactionId: '12345',
      Type: [
        'other',
      ],
      VendorApplicationId: 'Kylix v2020.1',
      Voter: {
        DateOfBirth: '1983-1-1T00:00:00',
        VoterId: [
          {
            Type: 'drivers-license',
            StringValue: data.driversLicense,
            AttestNoSuchId: false,
          },
          {
            Type: 'ssn4',
            StringValue: '4411',
            AttestNoSuchId: false,
          },
        ],
        Name: {
          FirstName: 'MINNIE',
          MiddleName: 'Q',
          LastName: 'MOUSE',
          Suffix: null,
        },
        AdditionalInfo: [
          {
            Name: 'EyeColor',
            StringValue: data.eyeColor,
          },
        ],
        RegistrationAddress: {
          NumberedThoroughfareAddress_type: {
            CompleteAddressNumber: {
              AddressNumber: '1221',
            },
            CompleteStreetName: {
              StreetNamePreDirectional: {
                Value: null,
              },
              StreetName: 'PALMER',
              StreetNamePostType: {
                Value: 'LN',
              },
              StreetNamePostDirectional: {
                Value: null,
              },
            },
            CompleteSubAddress: {
              SubAddressType: {
                Value: 'APT',
              },
              SubAddressIdentifier: {
                Value: '3A',
              },
            },
            CompletePlaceName: [
              {
                PlaceName: [
                  {
                    PlaceNameTypeSpecified: true,
                    PlaceNameType: 'MunicipalJurisdiction',
                    Value: 'EAST LANSING',
                  },
                  {
                    PlaceNameTypeSpecified: true,
                    PlaceNameType: 'County',
                    Value: '78',
                  },
                ],
              },
            ],
            StateName: [
              'MI',
            ],
            ZipCode: [
              48823,
            ],
          },
        },
        RegistrationMethod: 'Other',
        RegistrationFormSpecified: false,
      },
    },
  };
  sendRequest('http://localhost:3000/api/v1/voter-lookup', postData)
    .then((response) => {
      if (response.status !== 200) {
        // console.log('Looks like there was a problem. Status Code: ' +
        //   response.status);
      }
      return response.json();
    })
    .then((json) => onSuccess(json))
    .catch((err) => {
      onError(err);
    });
}
