import { useState } from "react";

type Props = {
  title?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange(value: string): void;
};

function TextInput({ placeholder, value, onChange, title }: Props) {
  return (
    <div className="relative">
      {value && value?.length > 0 && (
        <span
          className={`absolute top-0 left-2 -translate-y-1/2 text-[0.6rem] font-bold bg-white text-neutral-600`}
        >
          {title?.toLocaleUpperCase()}
        </span>
      )}
      <input
        type="text"
        className="border border-gray-600 px-4 py-2 text-xs block w-full rounded focus:outline-none text-blue-600"
        placeholder={placeholder?.toUpperCase()}
        value={value}
        onChange={(e) => {
          onChange(e.currentTarget.value);
        }}
        onFocus={(e) => e.target.select()}
      />
    </div>
  );
}

export default TextInput;
