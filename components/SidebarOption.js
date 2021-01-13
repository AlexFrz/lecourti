import React from "react";
import Link from "../components/Link";
import { useRouter } from "next/router";

export default function SidebarOption({ title, path }) {
  return (
    <>
      <Link href={path}>
        <div className="sidebarOption">
          <h4>{title}</h4>
        </div>
      </Link>
      <style jsx>{`
        .selected {
          background-color: #29524e;
          min-height: 75px;

          &:hover {
            background-color: #29524e !important;
          }

          h4 {
            color: #fafafa;
            font-weight: 700 !important;
          }
        }
        .sidebarOption {
          display: flex;
          align-items: center;
          color: #141414;
          width: 100%;
          height: 75px;

          border-bottom: 0.3px solid rgba(0, 0, 0, 0.15);
          transition: all 0.3s;

          &:hover {
            transform: translateY(1px);
            background-color: rgba(200, 200, 200, 0.2);

            cursor: pointer;
          }

          cursor: pointer;
          transition: 200ms color ease-in;

          h4 {
            margin: 0 auto;
            font-size: 16px;
            font-weight: 300;
          }
        }
      `}</style>
    </>
  );
}
