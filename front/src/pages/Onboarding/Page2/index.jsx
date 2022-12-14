import "pages/Onboarding/Page2/style.scss";
import usa from "assets/usa.jpg";
import kor from "assets/kor.jpg";
import canada from "assets/canada.png";
import china from "assets/china.png";
import france from "assets/france.png";
import germany from "assets/germany.png";
import italy from "assets/italy.png";
import uk from "assets/uk.png";
import React from "react";

export default function Page2({ activePage }) {
  return (
    <div className="page-div">
      <div className="contents-div">
        <h1 className={`title-h1 ${activePage && "slidein-up"}`}>
          <span>
            <b>세계 각지의 뉴스</b>를{" "}
          </span>
          <br /> 한 눈에 볼 수 있습니다.
        </h1>
        <h3 className={`subtitle-h3 ${activePage && "slidein-right "}`}>
          소식이 궁금한 나라가 있나요? <br />
          지구 반대편에서 어떡 소식이 들려올지 궁금하신가요? <br />
          뉴스터디의 지구본을 돌려가며 나라별 소식을 확인해보세요.
        </h3>
        <div className="country-wrapper">
          <div className="country-row">
            <img className="country-img" src={usa} alt="" />
            <img className="country-img" src={kor} alt="" />
            <img className="country-img" src={canada} alt="" />
            <img className="country-img" src={uk} alt="" />
          </div>
          <div className="country-row">
            <img className="country-img" src={france} alt="" />
            <img className="country-img" src={china} alt="" />
            <img className="country-img" src={germany} alt="" />
            <img className="country-img" src={italy} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
