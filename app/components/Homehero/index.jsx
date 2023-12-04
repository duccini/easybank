import Image from "next/image";

import "./styles.css";

import DesktopBG from "@/public/desktop-bg.svg";
import ImageMockups from "@/public/image-mockups.png";
import Button from "../Button";

export default function Homehero() {
  return (
    <div className="homehero">
      <div className="homehero_wrap">
        <div className="homehero_info">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <Button />
        </div>
      </div>

      <div className="desktop_bg">
        <Image alt="BG 1" src={DesktopBG} width={1200} />
        <Image alt="BG 2" src={ImageMockups} width={550} />
      </div>
    </div>
  );
}
