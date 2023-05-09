import { PropsWithChildren, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  onClick?(): void;
  disabled?: boolean;
};

export default function Button({ children, onClick, disabled = false }: Props) {
  return (
    <button
      className="bg-blue-600 rounded px-8 py-3 text-white uppercase tracking-widest text-xs lg:text-base disabled:bg-gray-400 transition-colors"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
