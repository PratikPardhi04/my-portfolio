<<<<<<< HEAD
import React from "react";

export function Card({ children, className }) {
  return (
    <div
      className={`rounded-lg border border-gray-300 p-4 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}
=======
import React from "react";

export function Card({ children, className }) {
  return (
    <div
      className={`rounded-lg border border-gray-300 p-4 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}
>>>>>>> 1fcbe3d0a66db1eeec7e9f34512a4dbb9a9b5676
