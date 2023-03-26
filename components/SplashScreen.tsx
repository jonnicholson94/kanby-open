import Spinner from "../elements/Spinner"

import { Anton } from "next/font/google"

const anton = Anton({
    weight: '400',
    subsets: ['latin']
})

const SplashScreen = () => {
    return (
        <div className="splash-screen flex-center flex-column">
            <h1 className={`${anton.className} margin-vertical-20`}>Kanby</h1>
            <Spinner />
        </div>
    )
}

export default SplashScreen