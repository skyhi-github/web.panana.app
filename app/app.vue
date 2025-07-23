<template>
  <div>
    <!-- Navigation -->
    <nav class="p-4 bg-gray-100 shadow">
      <NuxtLink to="/" class="mr-4">Home</NuxtLink>
      <NuxtLink to="/dashboard" class="mr-4">Dashboard</NuxtLink>
      <button @click="logout" class="text-red-600">Logout</button>
    </nav>

    <!-- Main Content -->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const token = useCookie('access_token')

function logout() {
  token.value = null
  router.push('/login')
}
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
</style>
