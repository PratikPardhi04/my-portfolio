import React from "react";

export function Button({ children, className, variant, size, ...props }) {
  // Simple variant and size handling (optional)
  let baseClasses = "rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors";

  if (variant === "ghost") {
    baseClasses += " bg-transparent hover:bg-indigo-100 dark:hover:bg-indigo-700";
  } else {
    baseClasses += " bg-indigo-600 text-white hover:bg-indigo-700";
  }

  if (size === "icon") {
    baseClasses += " p-2";
  } else {
    baseClasses += " px-4 py-2";
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
