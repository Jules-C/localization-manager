export default defineNuxtRouteMiddleware((to) => {
    const firebaseUser = useFirebaseUser();
    if (!firebaseUser.value) {
        return navigateTo('/firebase');
    }
});