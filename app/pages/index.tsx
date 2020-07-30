import { Head } from "blitz"
import vizJson from "./viz.json"
import Vida from "vidajs"

const Home = () => (
  <div className="container">
    <Head>
      <title>VidaBlitz</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
    </Head>

    <main>
      <div style={{ width: "100%", height: "500px" }}>
        <Vida vizData={vizJson} />
      </div>
    </main>
  </div>
)

export default Home
