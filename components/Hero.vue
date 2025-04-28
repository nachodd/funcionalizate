
<template>
  <section id="home" class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 right-[10%] h-64 w-64 rounded-full bg-func-teal/20 animate-float blur-3xl"></div>
      <div class="absolute bottom-20 left-[10%] h-72 w-72 rounded-full bg-func-coral/20 animate-float delay-700 blur-3xl"></div>
      <div class="absolute top-1/3 left-1/4 h-48 w-48 rounded-full bg-func-lavender/20 animate-float delay-300 blur-3xl"></div>
    </div>

    <div class="section-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-8 animate-fade-in-left">
        <div class="inline-flex items-center rounded-full bg-func-teal/10 px-3 py-1 text-sm font-medium text-func-teal">
          <span class="relative flex h-2 w-2 mr-2">
            <span class="absolute inline-flex h-full w-full rounded-full bg-func-teal animate-ping opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-func-teal"></span>
          </span>
          Nuevo programa de bienestar
        </div>
        
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Transforma tu <span class="text-func-teal">cuerpo</span> y tu <span class="text-func-coral">mente</span>
        </h1>
        
        <p class="text-xl text-gray-600 max-w-xl">
          Clases personalizadas de yoga y fitness que se adaptan a tu ritmo,
          ayudándote a alcanzar tus objetivos de bienestar.
        </p>
        
        <div class="flex flex-wrap gap-4">
          <button class="button-primary">
            Empieza Ahora
            <ArrowRightIcon class="ml-2 h-5 w-5" />
          </button>
          <button class="button-outline">
            Conoce Nuestro Estudio
          </button>
        </div>
        
        <div class="flex items-center space-x-4 text-sm">
          <div class="flex -space-x-2">
            <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=100&h=100" alt="profile" />
            <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=100&h=100" alt="profile" />
            <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=100&h=100" alt="profile" />
          </div>
          <div class="text-gray-600">
            <span class="font-semibold text-gray-900">+150</span> personas han mejorado su bienestar
          </div>
        </div>
      </div>

      <div class="relative flex justify-center lg:justify-end">
        <div class="relative w-80 h-80 lg:w-96 lg:h-96 animate-fade-in-right">
          <div ref="circleRef" class="absolute inset-0 bg-gradient-teal-coral rounded-full opacity-20 blur-md"></div>
          <img 
            src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=400&h=400" 
            alt="Yoga practice" 
            class="absolute inset-0 w-full h-full object-cover rounded-full shadow-xl"
          />
          <div class="absolute -bottom-6 -right-6 glass-card p-4 animate-float shadow-lg">
            <div class="flex items-center">
              <div class="h-10 w-10 bg-func-teal rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium">Primera clase</p>
                <p class="text-lg font-bold">GRATIS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-10 left-0 right-0 flex justify-center">
      <a 
        href="#about" 
        class="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center animate-bounce"
      >
        <ArrowDownIcon class="h-5 w-5 text-func-teal" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ArrowRight as ArrowRightIcon, ArrowDown as ArrowDownIcon } from 'lucide-vue-next'

const circleRef = ref(null)

onMounted(() => {
  const handleMouseMove = (e) => {
    if (!circleRef.value) return
    
    const { clientX, clientY } = e
    const { left, top, width, height } = circleRef.value.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const moveX = (clientX - centerX) / 30
    const moveY = (clientY - centerY) / 30
    
    circleRef.value.style.transform = `translate(${moveX}px, ${moveY}px)`
  }
  
  window.addEventListener('mousemove', handleMouseMove)
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
  }
})
</script>
