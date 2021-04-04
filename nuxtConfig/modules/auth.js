// Auth module config: https://auth.nuxtjs.org/api/options
export default {
  cookie: false,
  resetOnError: true,
  fullPathRedirect: true,
  redirect: {
    login: '/auth/login/',
    logout: false,
    home: false,
    callback: '/auth/callback/',
  },
  strategies: {
    google: {
      endpoints: {
        authorization: 'https://accounts.google.com/o/oauth2/auth',
        token: undefined,
        userInfo: '/me',
        logout: false,
      },
      token: {
        property: 'id_token',
      },
      responseType: 'token id_token',
      codeChallengeMethod: '',
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
    },
  },
}
