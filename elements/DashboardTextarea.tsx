
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin']
})

type Props = {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
}

const DashboardTextarea = ({ state, setState }: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        setState(e.target.value)

    }

    return (
        <textarea className={`dashboard-input description width-95 margin-vertical-10 ${roboto.className}`} value={state} onChange={handleChange} placeholder="Enter a description" />
    )
}

export default DashboardTextarea