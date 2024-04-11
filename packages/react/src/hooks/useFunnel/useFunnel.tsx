import { ReactElement, ReactNode, useState } from "react";

type StepsProps<T> = {
  children: ReactNode;
  name: T;
};

type FunnelProps<T> = {
  children: Array<ReactElement<StepsProps<T>>>;
};

export const useFunnel = <T extends string>(steps: readonly T[]) => {
  const [step, setStep] = useState(steps[0]);

  const Step = (props: StepsProps<T>): ReactElement => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps<T>) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step } as const;
};
