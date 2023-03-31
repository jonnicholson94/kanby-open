
import Link from "next/link"
import { Anton } from "next/font/google"

import { useSessionContext, useUser } from "@supabase/auth-helpers-react"

const anton = Anton({
    weight: '400',
    subsets: ['latin']
})

type Props = {
    url: string,
    link: string
}

const GlobalHeader = ({ url, link }: Props) => {

    const user = useUser()
    const { isLoading } = useSessionContext()

    if (isLoading) {
        return 
    }

    return (
        <header className="auto-height flex-center">
            <nav className="height-100 width-100 flex-around margin-vertical-10">
                <div className="width-47 flex-start margin-left-20">
                    <Link className="head-link bold" href="/">Kanby</Link>
                </div>
                <div className="width-47 flex-end margin-right-20">
                    { user ? <Link className="action-button height-50 flex-center" href={url}>{link}</Link> : null }
                </div>
            </nav>
        </header>
    )
}

export default GlobalHeader 