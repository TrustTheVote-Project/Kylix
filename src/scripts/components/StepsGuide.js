import React from "react";
import StepList from "@cmsgov/design-system/dist/components/StepList/StepList";
import StepLink from "./StepLink";

export default function StepsGuide({ appState }) {
  const steps = appState.steps.map((step) => {
    return {
      ...step,
      component: StepLink,
    };
  });
  return <StepList steps={steps}></StepList>;
}
