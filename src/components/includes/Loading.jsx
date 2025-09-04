import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
      <div className="mt-6 text-lg text-gray-700 font-medium tracking-wide">
        Loading...
      </div>
    </div>
  );
}
