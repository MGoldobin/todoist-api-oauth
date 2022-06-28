export const CLIENT_ID = 'a0d54e03ff1a4d4688aad3f986ce06e7'
export const CLIENT_SECRET = '7d97978b30eb4a28acb7a17307b0adea'
export const REDIRECT_URI = 'http://localhost:3000/private'
export const AUTH_URL = `https://todoist.com/oauth/authorize?client_id=${CLIENT_ID}&scope=data:read_write,data:delete&state=secretstring` // `https://oauth.vk.com/authorize?client_id=${APP_ID}&display=page&redirect_uri=${REDIRECT_URI}&scope=wall&response_type=token&v=${API_VERSION}&state=123456`
export const GET_TOKEN_URL = (code: string) => `https://todoist.com/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`
export const GET_WALL = 'wall.get'
export const ADD_WALL = 'wall.add'
export const DELETE_WALL = 'wall.delete'
export const EDIT_WALL = 'wall.edit'