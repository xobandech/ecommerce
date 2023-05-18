const BigNewsBlock = ({ bigNews }) => {
  return (
    <div className="big-news-block">
      {bigNews.map(({ headline, category, content, img, id, date }) => (
        <div key={id} className={"big-news"}>
          <h4>{headline}</h4>
          <img src={img} alt={headline} />
          <p>{date}</p>
          <p>
            <strong>{category}</strong>
          </p>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
};

export default BigNewsBlock;