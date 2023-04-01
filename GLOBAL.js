export const GLOBAL = {
    APP_URL: 'http://localhost:8000',
    WWW_URL: 'http://localhost:3000',
    PRIMARY_COLOR: '#242526',
    SECONDARY_COLOR: '#18191A',
    ACCENT_COLOR: '#444444',
    SITE_NAME: {
        normal: 'Socme', uppercase: 'SOCME', lowercase: 'socme'
    },
    BUTTON_COLORS: [
        {
            PRIMARY: '#444444', SECONDARY: '#555555', LIKED: '#FA5252'
        }
    ],
    LOADER_COLOR: '#2f59ff',

    //URLS
    RESOURCE:{
        POST:{
            ALL: '/api/post/all',
            FOLLOWING: '/api/post/following',
            SINGLE: (postID)=>{return `/api/post/${postID}`},
        },
        IMAGE:{
            PROFILE: (APP_URL, imageURL)=>{return `${APP_URL}${imageURL}`},
        }
    },
    REPO_LINK: 'https://github.com/orgs/soc-me/repositories'
}