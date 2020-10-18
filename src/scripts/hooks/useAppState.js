import { useState } from 'react';

export default function useAppState() {
  // const [addressComplete, setAddressComplete] = useState(false);
  const [steps] = useState([
    {
      id: 'info',
      heading: 'Enter your info',
      description: 'Enter your address, state ID, etc.',
      started: true,
      completed: true,
      href: '/info',
    },
    {
      id: 'download-ballot',
      heading: 'Download your pdf ballot',
      started: true,
      completed: false,
      href: '/download',
    },
    {
      id: 'fill-out',
      heading: 'Fill out and print',
      description: 'Fill out your ballot using Adobe software and print',
      started: false,
      completed: false,
    },
  ]);

  return {
    steps,
  };
}
