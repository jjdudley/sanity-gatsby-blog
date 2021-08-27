import React from "react";

export const Modules = ({ reactModule }) => {
  switch (reactModule._type) {
    default:
      return (
        <div>
          <b>{reactModule._type} not implemented</b>
        </div>
      );
  }
};