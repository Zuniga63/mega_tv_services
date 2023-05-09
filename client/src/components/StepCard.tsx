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
  disabledAction?: boolean;
};

function StepCard({
  title,
  description,
  action,
  actionContent,
  disabledAction = false,
  children,
}: Props) {
  const { step, maxStep } = useAppSelector(subscriptionSelector);
  return (
    <section>
      <header className="mb-16">
        <h2 className="text-center text-xl font-display text-gray-800">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-xs text-gray-700 text-center">
            {description}
          </p>
        )}
      </header>

      <div className="w-9/12 mx-auto">{children}</div>

      <footer className="mt-16 flex flex-col justify-center items-center">
        <div>
          {action && (
            <Button onClick={action} disabled={disabledAction}>
              {actionContent}
            </Button>
          )}
        </div>
        <span className="mt-4 uppercase text-xs text-neutral-300">
          Step {step} of {maxStep}
        </span>
      </footer>
    </section>
  );
}

export default StepCard;
