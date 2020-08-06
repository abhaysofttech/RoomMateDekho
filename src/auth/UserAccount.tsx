import React, { useEffect, useState } from 'react'
import { useSelector, connect, useDispatch } from "react-redux"
import { UserAccountDetails } from '../services/ApiServices'
import { IonButton, IonLoading } from '@ionic/react'

const UserAccount = (props: any) => {
    const userAccData = useSelector((state: any) => state.userActionsReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(UserAccountDetails({}))
    }, [])
    return (
        <div>
            <IonButton color="secondary" onClick={() => dispatch(UserAccountDetails({}))}>Call API</IonButton>
            <IonLoading
                isOpen={props.userAccDataStack.loader}
                message={"Fetching Data...."}
               // onDidDismiss={() => props.userAccDataStack.loader}
            />
            {userAccData.response.map((user: any) => { return <p>{user.name}</p> })}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        userAccDataStack: state.userActionsReducer,
    };
}
export default connect(mapStateToProps, null)(UserAccount)