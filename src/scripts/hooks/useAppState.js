import React, { useState, useEffect } from "react";

export default function useAppState() {
  const [addressComplete, setAddressComplete] = useState(false);
  const [steps, setSteps] = useState([
    {
      id: "info",
      heading: "Enter your info",
      description: "Enter your address, state ID, etc.",
      started: true,
      completed: true,
      href: "/info",
      // component: StepLink,
    },
    {
      id: "download-ballot",
      heading: "Download your pdf ballot",
      started: true,
      completed: false,
      href: "/download",
      // component: StepLink,
    },
    {
      id: "fill-out",
      heading: "Fill out and print",
      description: "Fill out your ballot using Adobe software and print",
      started: false,
      completed: false,
      // component: <Link to="/" />,
    },
  ]);

  return {
    steps,
  };
}
