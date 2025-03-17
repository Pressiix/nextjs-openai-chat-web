"use client";

import * as React from "react";
import MDEditor from "@uiw/react-md-editor";
const FormEditor = () => {
  const [value, setValue] = React.useState<string>();
  return <MDEditor value={value} onChange={(e) => setValue(e)} />;
};
export default FormEditor;
