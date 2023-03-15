
import Link from "next/link"
import { Anton } from "next/font/google"

const anton = Anton({
    weight: '400',
    subsets: ['latin']
})

const GlobalHeader = () => {
    return (
        <header className="auto-height flex-center">
            <nav className="height-100 width-90 margin-vertical-30">
                <Link className={`${anton.className} head-link`} href="/">Kanby</Link>
            </nav>
        </header>
    )
}

export default GlobalHeader 