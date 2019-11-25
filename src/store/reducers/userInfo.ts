const userInfo = (state = {}, action) => {
  switch(action.type) {
    case 'SET_USER_INFO': 
      return {
        ...state,
        ...action.userInfo
      }
    default: 
       return state
  }
}

export default userInfo;