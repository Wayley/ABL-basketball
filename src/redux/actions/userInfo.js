export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  }
}

function getUserInfoSuccess(userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo: userInfo
  }
}

function getUserInfoFail() {
  return {
    type: GET_USER_INFO_FAIL
  }
}
export function getUserInfo() {
  return function (dispatch) {
    dispatch(getUserInfoRequest());

    return fetch('http://127.0.0.1:8081/api/user.json')
      .then((response => {
        console.log(1)
        return response.json()
      }))
      .then((json) => {
        console.log(2)
        dispatch(getUserInfoSuccess(json))
      }
      ).catch(
      () => {
        console.log(3)
        dispatch(getUserInfoFail());
      }
      )
  }
}