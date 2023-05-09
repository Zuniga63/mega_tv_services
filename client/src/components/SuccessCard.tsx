import React from "react";

function SuccessCard() {
  return (
    <div className="border border-green-600 rounded px-4 py-2 bg-green-100">
      <h3 className="font-bold font-display text-sm text-green-500 mb-2">
        Successful subscription!
      </h3>
      <p className="text-xs text-green-700">
        One of our advisors will contact you.
      </p>
    </div>
  );
}

export default SuccessCard;
