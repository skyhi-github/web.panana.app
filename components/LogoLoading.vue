<template>
  <div class="flex items-center justify-center min-h-screen bg-white">
    <div class="animate-spin-slow">
      <!-- Replace below SVG with your logo SVG if desired -->
      <svg
        class="h-20 w-20 text-blue-600"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="opacity-25"
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M44 24c0-11.046-8.954-20-20-20v4c8.837 0 16 7.163 16 16h4z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
// No script required, animation is CSS-based
</script>

<style scoped>
/* Optional: Smoother custom animation speed */
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 1.4s linear infinite;
}
</style>
