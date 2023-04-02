
import DashboardSelectorToggle from "../elements/DashboardSelectorToggle"

type Props = {
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
}

const DashboardSelector = ({ state, setState }: Props) => {
    
    return (
        <div className="auto-height width-100 flex-center border-separator">
            <div className="auto-height width-80 flex-start margin-vertical-20">
                { state ?
                <>
                    <DashboardSelectorToggle active={true} content="Active" onClick={() => setState(true)} /> 
                    <DashboardSelectorToggle active={false} content="Completed" onClick={() => setState(false)} />
                </> :
                <>
                    <DashboardSelectorToggle active={false} content="Active" onClick={() => setState(true)} /> 
                    <DashboardSelectorToggle active={true} content="Completed" onClick={() => setState(false)} />
                </> }                
            </div>
        </div>
    )
}

export default DashboardSelector