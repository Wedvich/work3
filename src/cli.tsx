import React from "react";
import { render, Text } from "ink";
import path from "node:path";
import os from "node:os";
import { spawnSync } from "node:child_process";

const binaryDir = path.resolve(import.meta.dirname, "../native/build/bin");
const exeName = os.platform() === "win32" ? "work3.exe" : "work3";
const exePath = path.join(binaryDir, exeName);

const res = spawnSync(exePath, [], { encoding: "utf-8" });

render(
  <>
    <Text>work3: Node.js CLI</Text>
    <Text>work3: native C++ binary ({res.status})</Text>
  </>
);
