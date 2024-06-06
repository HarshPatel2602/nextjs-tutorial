import custom from "./custom.module.css"
import other from "./other.module.css"
import outside from "@/style/outside.module.css"

export default function Home() {
  return (
    <main>
      <h1 className={custom.main}>CSS Modules with Next JS</h1>
      <h2 className={other.main}>Heading 2 in Main Page</h2>
      <h3 className={outside.main}>Heading 3 in Main Page</h3>
    </main>
  );
}
