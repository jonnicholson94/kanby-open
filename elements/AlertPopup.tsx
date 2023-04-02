
import * as AlertDialog from '@radix-ui/react-alert-dialog'

type Props = {
    children: React.ReactElement,
    title: string,
    description: string,
    onClick: React.Dispatch<React.MouseEvent>
}

const AlertPopup = ({ children, title, description, onClick }: Props) => {

    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                { children }
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="alert-overlay" />
                <AlertDialog.Content className="alert-popup-content flex-center flex-column">
                    <AlertDialog.Title className="width-80 auto-height margin-top-30">{title}</AlertDialog.Title>
                    <AlertDialog.Description className="width-80 auto-height margin-top-10">{description}</AlertDialog.Description>
                    <div className="auto-height width-80 flex-end margin-vertical-50">
                        <AlertDialog.Cancel className="cancel-button margin-right-10">
                            <button style={{ backgroundColor: '#fff' }}>Cancel</button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action onClick={onClick}>
                            <button className="action-button">Confirm</button>
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}

export default AlertPopup