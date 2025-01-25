export default {
  getMe(state){
    return state.me
  },
  getTweetPopupState: (state) => {
    return state.isTweetPopupActive
  },
  getLoginStatus: (state) => {
    return state.isLoggedIn
  },
  getLoadingStatus: (state) => {
    return state.globalIsLoading
  },
  getMyProfileId(state) {
    return state.me.id;
  },
  getEditProfileStatus(state) {
    return state.editProfilePopup
  },
  getProfileTweetCount(state) {
    return state.profileTweetCount
  },
  getMobileMenuState(state){
    return state.isMobileMenuActive
  }
}