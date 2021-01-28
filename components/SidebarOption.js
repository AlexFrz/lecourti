import React from "react";
import TheLink from "./TheLink";
import { useRouter } from "next/router";
import { device } from "../javascripts/device";
import styled from "styled-components";

const StyledSidebarOption = styled.div`
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    color: #141414;
    width: 100%;
    height: 75px;

    border-bottom: 0.3px solid rgba(0, 0, 0, 0.15);
    transition: all 0.3s;

    cursor: pointer;
    transition: 200ms color ease-in;

    &:hover {
      background-color: #29524e !important;
    }

    > h4 {
      margin: 0 auto;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

export default function SidebarOption({ title, path }) {
  return (
    <>
      <TheLink href={path}>
        <div className="sidebarOption">
          <h4>{title}</h4>
        </div>
      </TheLink>
      <style jsx>{`
        .selected {
          background-color: #29524e;
          height: 75px;
        }

        .selected:hover {
          background-color: #29524e !important;
        }

        .selected h4 {
          color: #fafafa;
          font-weight: 700 !important;
        }

        .sidebarOption {
          display: flex;
          align-items: center;
          color: #141414;
          width: 100%;
          height: 75px;

          border-bottom: 0.3px solid rgba(0, 0, 0, 0.15);
          transition: all 0.3s;

          cursor: pointer;
          transition: 200ms color ease-in;
        }

        @media ${device.mobileL} {
          .sidebarOption {
            height: 10vh;
          }

          .selected {
            height: 11vh;
          }
        }

        .sidebarOption:hover {
          transform: translateY(1px);
          background-color: rgba(200, 200, 200, 0.2);

          cursor: pointer;
        }

        .sidebarOption h4 {
          margin: 0 auto;
          font-size: 16px;
          font-weight: 400;
        }
      `}</style>
    </>
  );
}
