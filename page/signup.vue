<script setup lang="ts">
const fields = ref([
  {
    name: 'name',
    type: 'text',
    label: 'Full Name',
  },
  {
    name: 'email',
    type: 'text',
    label: 'Email',
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
  },
])
const providers = ref([
  {
    label: 'Google',
    icon: 'i-simple-icons-google',
    color: 'neutral',
    variant: 'subtle',
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    color: 'neutral',
    variant: 'subtle',
  },
])
</script>

<template>
  <UAuthForm
    class="max-w-md"
    title="Sign Up"
    description="Create your account to get started."
    icon="i-lucide-user-plus"
    :providers="providers"
    :fields="fields"
  />
</template>
