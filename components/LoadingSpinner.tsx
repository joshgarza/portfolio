import React from "react";

export const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div
        className="w-12 h-12 border-t-2 border-blue-500 border-solid rounded-full animate-spinner"
        style={{
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          borderLeftColor: "transparent",
        }}
      ></div>
      <p className="text-gray-700">Loading times may take 1-2 minutes.</p>
      <p className="text-sm text-gray-500">
        Note: The responses generated by this application come from AI and may
        not be accurate or appropriate in all contexts.
      </p>
    </div>
  );
};