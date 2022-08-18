import { useEffect } from "react"

export default function Profile() {
    useEffect(function () {
        document.title = 'Profile'
    }, [])
    return (
        <section>
            <h1 className="section-title"> Profile Page</h1>
            <p className="section-deskripsi"> Perkenalkan, Nama Saya Akhsan Daffa. Saat ini, saya sedang menempuh perkuliahan di Universitas Negeri Yogyakarta</p>
        </section>
    )
}