import { getCookie } from 'h3';

export default defineEventHandler(async (event) => {
    console.log('server middleware called');
    const user = getCookie(event, 'userCookie');
    // console.log('server middleware - user', user);
});