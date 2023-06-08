const NewsHeadlines = ({headlines}) => {
    return (
        <>
        <div className="hot-news">
        <h2>Hot news</h2>
        <div className="news-headlines">
            <ul>
            {headlines.map(({id, headline}) => {
                return <a href="ss" key={id}><li><h2>
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