"use client";
import { TextField, TextArea, Button } from "@radix-ui/themes";
import React from "react";

const newIssue = () => {
  return (
    <div className="max-w-xl space-y-5">
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Add description" />

      <Button>Submit new issue</Button>
    </div>
  );
};

export default newIssue;
