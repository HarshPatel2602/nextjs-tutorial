"use client";
import Script from "next/script";

const Page = () => {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file loaded");
        }}
      />
      <h1>Get user getLocation</h1>
    </div>
  );
};

export default Page;
