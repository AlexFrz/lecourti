import React from "react";
import Sidebar from "../components/Sidebar";
import Reservation from "../components/Reservation";
import Popup from "../components/Popup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Head from "next/head";
import DomainPresentation from "../components/DomainPresentation";
import HeadSectionPicture from "../components/HeadSectionPicture";
import Features from "../components/Features";
import TheFooter from "../components/TheFooter";

export default function ledomaine() {
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
      <div className="flex">
        <Sidebar />
        <HeadSectionPicture imageSrc="/images/villa3.jpg" />
        <Reservation />
        <Popup />
        <DomainPresentation />
        <Features />
      </div>
      <TheFooter />
      <style jsx>{`
        .flex {
          margin-bottom: 410px;
        }
      `}</style>
    </>
  );
}
