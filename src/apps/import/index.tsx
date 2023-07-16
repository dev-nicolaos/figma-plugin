import React from "react";
import { createRoot } from "react-dom/client";

import Container from "./container";
import "pavelLaptev/react-figma-ui/styles/global.css";
import "pavelLaptev/react-figma-ui/ui/ui.css";

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("react-page");
  const root = createRoot(container);
  root.render(<Container />);
});