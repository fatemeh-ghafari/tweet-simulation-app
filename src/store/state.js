import {defaultUser} from '@/services/functions'

export default {
  me: defaultUser(),
  isTweetPopupActive: false,
  isLoggedIn: false,
  globalIsLoading: false,
  editProfilePopup: false,
  profileTweetCount: 0,
  isMobileMenuActive: false
}