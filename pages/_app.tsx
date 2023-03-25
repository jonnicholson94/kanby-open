
import { Roboto } from 'next/font/google'

import '../styles/animations.css'
import '../styles/common.css'
import '../styles/components.css'
import '../styles/global.css'
import '../styles/text.css'

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin']
})

const MyApp = ({ Component, pageProps }) => {
    return (
            <main className={roboto.className}>
                <Component {...pageProps} />
            </main>
    )
}

export default MyApp