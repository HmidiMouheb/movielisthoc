import React from "react";

export default function IsLoadingHoc(WrappedComponent) {
  return (
    <div>
      <WrappedComponent />
    </div>
  );
}
