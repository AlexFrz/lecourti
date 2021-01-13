import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import Reservation from "../components/Reservation";

export default function Home() {
  return (
    <>
      <div className="homepage">
        <Sidebar />
        <Carousel />
        <Reservation />
      </div>

      <style jsx>{`
        .homepage {
          display: flex;
        }
      `}</style>
    </>
  );
}
