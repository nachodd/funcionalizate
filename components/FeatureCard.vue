
<template>
  <div
    :class="[
      'glass-card p-6 card-hover animate-fade-in',
      className
    ]"
    :style="{
      animationDelay: delay
    }"
  >
    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-func-teal to-func-mint flex items-center justify-center text-white mb-4">
      <component :is="icon" class="h-6 w-6" />
    </div>
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  delay: {
    type: String,
    default: '0ms'
  }
})
</script>
