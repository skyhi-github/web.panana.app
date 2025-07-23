<script setup lang="ts">
const fields = ref([
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
])
const providers = ref([
  {
    label: 'Google',
    icon: 'i-simple-icons-google',
    color: 'neutral',
    variant: 'subtle'
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    color: 'neutral',
    variant: 'subtle'
  }
])
</script>

<template>
  <UAuthForm
    class="max-w-md"
    title="Login"
    description="Enter your credentials to access your account."
    icon="i-lucide-user"
    :providers="providers"
    :fields="fields"
  />
</template>
