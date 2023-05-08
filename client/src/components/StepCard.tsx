import { useAppSelector } from "@/app/store/hooks";
import { subscriptionSelector } from "@/features/Subscription";
import { ReactNode } from "react";
import Button from "./Button";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
  action?(): void;
  actionContent?: string;
};

function StepCard({
  title,
  description,
  action,
  actionContent,
  children,
}: Props) {
  const { step, maxStep } = useAppSelector(subscriptionSelector);
  return (
    <section>
      <header className="mb-8">
        <h2 className="text-center text-xl">{title}</h2>
        {description && <p>{description}</p>}
      </header>

      {children}

      <footer className="mt-8 flex flex-col justify-center items-center">
        <div>{action && <Button onClick={action}>{actionContent}</Button>}</div>
        <span className="mt-4 uppercase text-xs text-neutral-300">
          Step {step} of {maxStep}
        </span>
      </footer>
    </section>
  );
}

export default StepCard;
