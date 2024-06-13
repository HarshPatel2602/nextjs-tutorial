import { API_BASE_URL } from "@/config/constants";

export default function Home() {
  console.log(process.env.CUSTOM_MODE);

  return (
    <main>
      {process.env.NODE_ENV === "development" ? (
        <h1>Development Mode</h1>
      ) : (
        <h1>Production Mode</h1>
      )}
      <h1>Environment Variables in Next JS</h1>

      <h1>{API_BASE_URL}</h1>
    </main>
  );
}
