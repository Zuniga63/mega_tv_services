import { HTMLInputTypeAttribute, useState } from "react";

type Props = {
  title?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange(value: string): void;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
};

function TextInput({
  placeholder,
  value,
  onChange,
  title,
  disabled = false,
  type = "text",
}: Props) {
  return (
    <div className="relative">
      {value && value?.length > 0 && !disabled && (
        <span
          className={`absolute top-0 left-2 -translate-y-1/2 text-[0.6rem] font-bold bg-white text-neutral-600`}
        >
          {title?.toLocaleUpperCase()}
        </span>
      )}
      <input
        type={type}
        className="border border-gray-600 px-4 py-2 text-xs block w-full rounded focus:outline-none text-blue-600 disabled:border-gray-400 disabled:text-gray-400"
        placeholder={placeholder?.toUpperCase()}
        value={value}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
        onFocus={(e) => e.target.select()}
        disabled={disabled}
      />
    </div>
  );
}

export default TextInput;
