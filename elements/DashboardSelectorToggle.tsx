

type Props = {
    active: boolean, 
    content: string,
    onClick: React.Dispatch<React.MouseEvent>
}

const DashboardSelectorToggle = ({ active, content, onClick }: Props) => {
    
    return (
        <button 
            className={`dashboard-selector flex-center ${active ? 'active' : null}`}
            onClick={onClick}>{
                content}
        </button>
    )
}

export default DashboardSelectorToggle