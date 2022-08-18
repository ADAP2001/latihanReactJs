import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetails() {
    const params = useParams();
    const [artikel, setArtikel] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(function () {
        async function getArticle() {
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

            if (!request.ok) {
                return setNotFound(true);
            }

            const response = await request.json();

            document.title = response.title;
            setArtikel(response);
            setLoading(false);
        }
        getArticle();
    },
        [params]);

    if (notFound) {
        return <h1>Artikel tidak ditemukan ...</h1>
    }

    return (
        <section>
            {loading ? (
                <i>Loading article</i>
            ) : (
                <article>
                    <h1>Blog Detail</h1>
                    <h2 className="article-title">{artikel.title}</h2>
                    <time className="article-time">{new Date(artikel.publishedAt).toLocaleDateString()}</time>
                    <br></br>
                    <img src={artikel.imageUrl} alt={artikel.title} className="article-image" />
                    <p className="article-summary">{artikel.summary}</p>
                    <p className="article-source">
                        Source: {' '}
                        <a href={artikel.url} target="_blank" rel="noreferrer">
                            {artikel.newsSite}
                        </a>
                    </p>
                </article>
            )}
        </section>
    );
}