export enum UserActionTypes {
    USER_ACCOUNT_DETAILS_REQUEST = "User Account Details Request",
    USER_ACCOUNT_DETAILS_SUCCESS = "User Account Details Success",
    USER_ACCOUNT_DETAILS_ERROR = "User Account Details Error"
}

export class UserActions {
    static UserAccRequest = () => {
        return {
            type:UserActionTypes.USER_ACCOUNT_DETAILS_REQUEST
        };
    };

    static UserAccSuccess = (response:any) => {
        return {
            type:UserActionTypes.USER_ACCOUNT_DETAILS_SUCCESS,
            payload:response
        };
    };

    static UserAccError = (error:any) => {
        return {
            type:UserActionTypes.USER_ACCOUNT_DETAILS_ERROR,
            payload:error
        };
    };
}