const NewsHeadlines = ({headlines}) => {
    return (
        <>
        <div className="hot-news">
        <h2>Hot news</h2>
        <div className="news-headlines">
            <ul>
            {headlines.map((headline, index) => {
                return <a href="ss"><li key={index}><h2>
                    {headline}
                    </h2></li></a>;
            })}
            </ul>
        </div>
        </div>
        </>
    );
}

export default NewsHeadlines;   