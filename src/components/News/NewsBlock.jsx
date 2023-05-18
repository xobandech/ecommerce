import "./NewsStyling.scss";

const NewsBlock = ({ news }) => {
  return (
    <>
      {news.map(({ headline, category, content, img, id, date }) => (
        <div className={"news-block"}>
          <h4>{headline}</h4>
          <img src={img} alt={headline} />
          <div className="info">
            <p>
              <small>{date}</small>{" "}
            </p>
            <p>
              <strong>{category}</strong>
            </p>
            <p>{content.toString().slice(0, 80) + "..."}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsBlock;
