
import Link from "next/link"
import { Anton } from "next/font/google"

const anton = Anton({
    weight: '400',
    subsets: ['latin']
})

type Props = {
    url: string,
    link: string
}

const GlobalHeader = ({ url, link }: Props) => {
    return (
        <header className="auto-height flex-center">
            <nav className="height-100 width-90 flex-around margin-vertical-30">
                <div className="width-47 flex-start">
                    <Link className={`${anton.className} head-link`} href="/">Kanby</Link>
                </div>
                <div className="width-47 flex-end">
                    <Link className="cta-button height-50 flex-center" href={url}>{link}</Link>
                </div>
            </nav>
        </header>
    )
}

export default GlobalHeader 