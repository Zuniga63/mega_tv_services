import { PropsWithChildren, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  onClick?(): void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button
      className="bg-blue-600 rounded px-8 py-3 text-white uppercase tracking-widest text-xs lg:text-base"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
