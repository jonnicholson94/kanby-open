
import { SessionContextProvider, useSessionContext } from '@supabase/auth-helpers-react'
import { supabase } from '../lib/supabase/supabaseClient'

import { useState } from 'react'

import { Roboto } from 'next/font/google'

import '../styles/animations.css'
import '../styles/common.css'
import '../styles/components.css'
import '../styles/global.css'
import '../styles/text.css'

import Spinner from '../elements/Spinner'

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin']
})

const MyApp = ({ Component, pageProps }) => {

    const { isLoading } = useSessionContext()
    
    { isLoading ? <Spinner /> : null }
    
    return (
        <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
            <main className={roboto.className}>
                <Component {...pageProps} />
            </main>
        </SessionContextProvider>
    )
}

export default MyApp