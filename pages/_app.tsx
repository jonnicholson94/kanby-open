
import { useState } from 'react'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

import { Provider } from 'react-redux'
import { store } from '../features/store'

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
    
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())
    
    return (
        <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
            <Provider store={store}>
                <main className={roboto.className}>
                    <Component {...pageProps} />
                </main>
            </Provider>
        </SessionContextProvider>
    )
}

export default MyApp