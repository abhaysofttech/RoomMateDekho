import { UserActions } from "../redux/actions/UserActions"
import { constants } from "../models/ApiConstant";
import Axios from 'axios';

export const UserAccountDetails = (param: any) => {
    debugger
    return (dispatch: any) => {
        dispatch(UserActions.UserAccRequest());
        Axios.get(constants.demouser)
            .then((response: any) => {
                const userData = response.data
                dispatch(UserActions.UserAccSuccess(userData));
            })
            .catch((error: any) => {
                const errorMsz = error.error
            })
    }
}