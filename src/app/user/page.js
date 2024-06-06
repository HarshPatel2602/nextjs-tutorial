"use client";

import { useState } from "react";

const Page = () => {
  const [h3Style, setH3Style] = useState({ backgroundColor: "magenta" });
  return (
    <div>
      <h1 style={{ backgroundColor: "purple" }}>User Page</h1>
      <h2>Heading 2 in User Page</h2>
      <h3 style={h3Style}>Heading 3 in User Page</h3>
      <button onClick={() => setH3Style({ backgroundColor: "green" })}>
        Update Style
      </button>
    </div>
  );
};

export default Page;
