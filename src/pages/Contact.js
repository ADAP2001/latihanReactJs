import { useEffect } from "react"

export default function Contact() {
    useEffect(function () {
        document.title = 'Contact'
    }, [])
    return (
        <section>
            <h1 className="section-title"> Contact Page</h1>
            <p className="section-deskripsi"> Kamu dapat menghubungiku dibawah ini:</p>
            <ul>
                <li> WA: 0888509343</li>
                <li> Email: akhsandaffa.2020@student.uny.ac.id</li>
            </ul>
            <p className="section-deskripsi"> Hubungi Sosial Media Kami</p>
        </section>
    )
}