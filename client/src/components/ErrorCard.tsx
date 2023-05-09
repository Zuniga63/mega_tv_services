import React from "react";

function ErrorCard({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <div className="border border-red-600 rounded px-4 py-2 bg-red-100">
      <h3 className="font-bold font-display text-sm text-red-500 mb-2">
        Opps, something went wrong!
      </h3>
      <p className="text-xs text-red-700">{message}</p>
    </div>
  );
}

export default ErrorCard;
