"use client";

import { Spinner } from "flowbite-react";

function LoadingComponent() {
  return (
    <div className="text-center">
      <Spinner className="block w-14 h-14 m-auto" aria-label="Center-aligned spinner example" />
    </div>
  );
}
export default LoadingComponent;
