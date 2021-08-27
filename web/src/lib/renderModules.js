import React from "react";
import { Modules } from "../components/modules";

export const renderModules = (modules) => {
  if (modules) {
    return modules.map((module) => (
      <Modules key={module._key} reactModule={module} />
    ));
  }
};