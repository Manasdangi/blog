export const Loginstart=(usercredential)=>({

    type:"LOGIN_START"
})
export const Loginsuccess=(user)=>({
    type="LOGIN_SUCCESS",
   payload:user,
})

export const Loginfailure=(user)=>({
    type="LOGIN_FAILURE",
})

export const Logout=(user)=>({
    type="LOG_OUT",
})

export const Updatestart=(usercredential)=>({

    type:"UPDATE_START"
})
export const Updatesuccess=(user)=>({
    type="UPDATE_SUCCESS",
   payload:user,
})

export const Updatefailure=(user)=>({
    type="UPDATE_FAILURE",
})
