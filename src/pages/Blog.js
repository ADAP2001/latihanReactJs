import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

export default function Blog() {
    const [artikel, setArtikel] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        async function getArticles() {
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles')
            const response = await request.json();

            document.title = 'Blog';
            setArtikel(response);
            setLoading(false);
        }
        getArticles();
    }, [])

    return (
        <section>
            <h1 className="section-title"> Blog Page</h1>
            <p className="section-deskripsi">Berikut ini adalah tulisan artikel Seseorang:</p>

            {loading && <i>Loading Artikel ...</i>}
            {!loading && (
                <div className="articles">
                    {artikel.map(function (article) {
                        return (
                            <article key={article.id} className="article">
                                <h3 className="article-title">
                                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                                </h3>
                                <time className="article-time">
                                    {new Date(article.publishedAt).toLocaleDateString()}
                                </time>
                            </article>
                        )
                    })}
                </div>
            )}
        </section>
    )
}