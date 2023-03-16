
import Link from "next/link"

type Props = {
    active: string, 
    href: string, 
    content: string
}

const DashboardSelectorToggle = ({ active, href, content }: Props) => {
    return (
        <Link className={`dashboard-selector flex-center ${active === href ? 'active' : null}`} href={href}>{content}</Link>
    )
}

export default DashboardSelectorToggle