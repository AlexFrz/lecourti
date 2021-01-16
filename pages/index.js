import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import Reservation from "../components/Reservation";
import Popup from "../components/Popup";
import TheFooter from "../components/TheFooter";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Lora-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Lora-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <div className="homepage">
        <Sidebar />
        <Carousel typeOf="bigcarousel" />
        <Reservation />
        <Popup />
      </div>
      <TheFooter />

      <style jsx>{`
        .homepage {
          display: flex;
        }
      `}</style>
    </>
  );
}
