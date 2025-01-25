import User from '../models/User'

const userData = [
  {
    id: '12a1s3dz24c635q2e213a2dw1',
    username: 'fatemeh',
    password: 'password',
    profile: {
      pic: require('@/assets/images/pic.png'), // مسیر تصویر پروفایل
      pic_full: require('@/assets/images/pic.png'), // عکس پروفایل بزرگ
      pic_cover: require('@/assets/images/pic2.jpg'), // عکس کاور
      description: 'add Title .... ):',
      nickname: '@fatemeh',
      name: 'Fatemeh GH',
      website: 'https://fatemeh.com',
    },
    account: {
      following: 254, // تعداد کسانی که دنبال می‌کنه
      follower: 1100, // تعداد دنبال‌کننده‌ها (به صورت عدد)
    },
  },
]


export const users = [
  new User(userData[0])
]

export const userOneAuthInfo = {
  username: userData[0].username,
  password: userData[0].password
}

export const tweets = []

export const trends = [
  {
    name: '#News',
    tweetsCount: 343555
  },
  {
    name: '#Marketer',
    tweetsCount: 45565
  },
  {
    name: '#World',
    tweetsCount: 565609
  }
]