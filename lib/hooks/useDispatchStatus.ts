
import { displayStatus, hideStatus } from "../../features/statusSlice"
import { useAppDispatch } from "../reduxHelpers"

const useDispatchStatus = () => {
    const dispatch = useAppDispatch()

    const dispatchStatus = (payloadMessage, payloadType) => {
        dispatch(displayStatus({
            payloadMessage: payloadMessage,
            payloadType: payloadType
         }))
     
         setTimeout(() => dispatch(hideStatus()), 5000)
    }

    return dispatchStatus
}

export default useDispatchStatus