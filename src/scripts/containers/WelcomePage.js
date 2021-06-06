import React from 'react';
import Button from '@cmsgov/design-system/dist/components/Button/Button';
import Page from '../components/Page';

export default function DynamicFormFlow() {
  // eslint-disable-next-line max-len
  return (
    <Page>
      <h1>Accessible Ballot Search</h1>
      <h2>Find, print, and fill out your ballot</h2>
      <div>
        {/* eslint-disable-next-line max-len */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum pulvinar posuere.</p>
        {/* eslint-disable-next-line max-len */}
        <p>Duis egestas elit vulputate est aliquet, in tincidunt ipsum suscipit. Vivamus sit amet varius justo, vel molestie diam. Etiam dignissim hendrerit est, at vehicula ante euismod id.</p>
        <ul>
          <li>Quisque ornare porta sollicitudin.</li>
          <li>Pellentesque varius ligula in mattis malesuada.</li>
          <li>Praesent quis nibh elit.</li>
        </ul>
        {/* eslint-disable-next-line max-len */}
        <p>Maecenas sodales enim vitae laoreet imperdiet. Ut enim mauris, commodo sed justo eu, porta sagittis sem. Maecenas tempor, nibh a blandit lobortis, nibh elit sagittis odio, vel feugiat felis mauris nec libero. Nullam feugiat in enim tempor sollicitudin.</p>
      </div>
      <Button
        variation="primary"
        type="button"
        size="big"
        href="/find"
      >
        Get Started
      </Button>
    </Page>
  );
}
