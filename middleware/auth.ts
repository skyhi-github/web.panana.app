import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "nuxt/app";

export default defineNuxtRouteMiddleware((to, from) => {
    const authenticated = useCookie('user');

    if (!authenticated.value) {
        return navigateTo('login')
    }

})