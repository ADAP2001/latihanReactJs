import { useEffect } from "react"

export default function Home() {
    useEffect(function () {
        document.title = 'Home';
    }, []);


    return (
        <section>
            <h1 className="section-title"> Selamat Datang di Website Edukasi</h1>
            <p className="section-deskripsi"> Website Pertamaku ini berisi mengenai pemrograman Webots, Fuzzy Logic, Front-End, dan lain-lain</p>
        </section>
    )
}