import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faBookmark } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";
import LevelContainer from "./LevelContainer";
import Filter from "components/Filter";
import NewsCard from "components/NewsCard";

export default function NewsList() {
  const news = {
    img: "",
    title:
      "An Overseas news story that fits the difficulty An Overseas news story that fits the difficulty",
    body: "My time with SKT has already been such an amazing journey, and Im thankful for every day of it. Earlier this year, I felt myselfgradually getting weaker. It was like my skills were getting worseand the rest of the world was gaining on me. I’ve often wonderedwhat makes me great at League of Legends, and the best way I candescribe it is that I structure my playstyle through calculation andintuition. I’m always learning new things. I can predict eventsbefore they happen, and that helps me to be in the right place andmake the right play a step sooner than everyone else. For a whilethere it felt like my intuition was off, and I didn’t know if Icould recover. But right now I feel like I can play forever. At the",
    date: "Wed, September 7, 2022",
    category: "SPORTS",
    level: "c",
  };
  return (
    <section className="newslist-container">
      <LevelContainer />
      <article className="newslist-body-container">
        <div className="newslist-top-area">
          <h3 className="hottest-article-depth">
            A1 Level <b>&gt;</b> SPORTS <b>&gt;</b> LOL
          </h3>
          <Filter />
        </div>
        <div className="newslist-mid-area">
          <div className="hottest-article">
            <span className="hottest-article-img">d</span>
            <h1 className="hottest-article-title">{news.title}</h1>
            <div className="hottest-article-footer">
              <div className="hottest-article-category">
                <FontAwesomeIcon icon={faCircle} />
                {news.category}
              </div>
              <FontAwesomeIcon
                icon={faBookmark}
                className="hottest-article-bookmark"
              />
            </div>
          </div>
          <div className="sub-article-container">
            <NewsCard news={news} />
            <NewsCard news={news} />
          </div>
        </div>
        <div className="newslist-bot-area"></div>
      </article>
    </section>
  );
}
