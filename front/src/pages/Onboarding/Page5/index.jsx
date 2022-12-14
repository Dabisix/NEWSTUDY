import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeUp,
  faGlobe,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import React from "react";
import "pages/Onboarding/Page5/style.scss";
import Page5Img from "assets/page5-img.png";
import Page5ImgMobile from "assets/page5-img-mobile.png";

export default function Page5({ activePage }) {
  const isMobile = useMediaQuery({
    query: "(max-width:480px)",
  });
  return (
    <div className="page-color-div">
      <div className="page5-contents-div">
        <h1 className={`title-h1 ${activePage && "slidein-up"}`}>
          <b>핵심단어, TTS, 번역</b>
          {isMobile ? (
            <>
              <br /> 기능을 이용해보세요
            </>
          ) : (
            <>
              기능을 이용해서 <br />
              기사를 쉽게 읽어보세요.
            </>
          )}
        </h1>
        <h3 className={`subdescription-h3 ${activePage && "slidein-right "}`}>
          기사의 빈출 단어를 제공해드려요
          <br /> 모르는 단어는 나만의 단어장에 저장해보세요. <br /> TTS 기능을
          통해 따라 읽어보세요
        </h3>

        <div className="iconset-div">
          <div className="icon-row">
            <i>
              <FontAwesomeIcon icon={faVolumeUp} />
            </i>
            <div className="icon-desc">영문장을 읽어주는 TTS</div>
          </div>
          <div className="icon-row">
            <i>
              <FontAwesomeIcon icon={faGlobe} />
            </i>
            <div className="icon-desc">빠른 영-한 번역</div>
          </div>
          <div className="icon-row">
            <i>
              <FontAwesomeIcon icon={faBookmark} />
            </i>
            <div className="icon-desc">나만의 영단어 스크랩</div>
          </div>
        </div>
      </div>
      {isMobile ? (
        <img src={Page5ImgMobile} alt="" className="main-img" />
      ) : (
        <img src={Page5Img} alt="" className="main-img" />
      )}
    </div>
  );
}
