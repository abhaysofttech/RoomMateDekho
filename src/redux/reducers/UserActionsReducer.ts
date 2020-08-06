import { UserActionTypes } from "../actions/UserActions"


interface UserActionsReducerState {
    loader: boolean,
    response: any[],
    error: string
}

const initialState: UserActionsReducerState = {
    loader: false,
    response: [],
    error: ''
}

export const UserActionsReducer = (state = initialState, action: any ): UserActionsReducerState => {
    debugger
    switch (action.type){
        case UserActionTypes.USER_ACCOUNT_DETAILS_REQUEST:{
            return{
                ...state,
                loader:true
            }
        }
        case UserActionTypes.USER_ACCOUNT_DETAILS_SUCCESS:{
            return{
                ...state,
                loader:false,
                response:action.payload
            }
        }
        case UserActionTypes.USER_ACCOUNT_DETAILS_ERROR:{
            return{
                ...state,
                loader:false,
                error:action.payload
            }
        }
        default:{
            return state
        }
    }
}