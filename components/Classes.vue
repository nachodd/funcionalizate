
<template>
  <section id="classes" class="py-20 bg-gray-50">
    <div class="section-container">
      <div class="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
        <div class="inline-block px-3 py-1 rounded-full bg-func-mint/30 text-func-charcoal text-sm font-medium mb-4">
          Nuestras Clases
        </div>
        <h2 class="text-4xl font-bold mb-6">Descubre la <span class="highlight-text">clase perfecta</span> para ti</h2>
        <p class="text-lg text-gray-600 mb-8">
          Ofrecemos una variedad de clases para todos los niveles y objetivos. Ya sea que busques ganar fuerza, flexibilidad o paz mental, tenemos algo para ti.
        </p>
        
        <div class="inline-flex p-1 space-x-1 bg-white rounded-lg shadow-sm mb-8">
          <button
            v-for="filter in ['all', 'yoga', 'fitness', 'wellness']"
            :key="filter"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-md transition-all',
              activeFilter === filter
                ? 'bg-func-teal text-white shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
            ]"
            @click="activeFilter = filter"
          >
            {{ filter === 'all' ? 'Todas' : filter.charAt(0).toUpperCase() + filter.slice(1) }}
          </button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(classItem, index) in filteredClasses" 
          :key="classItem.id" 
          class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="classItem.image" 
              :alt="classItem.title" 
              class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div class="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-semibold text-func-charcoal">
              {{ classItem.duration }}
            </div>
          </div>
          <div class="p-5">
            <div class="flex justify-between items-center mb-3">
              <span :class="[
                'text-xs font-semibold px-2.5 py-0.5 rounded-full',
                classItem.category === 'yoga' ? 'bg-func-lavender/30 text-func-lavender' :
                classItem.category === 'fitness' ? 'bg-func-coral/30 text-func-coral' :
                'bg-func-mint/30 text-func-teal'
              ]">
                {{ classItem.category.charAt(0).toUpperCase() + classItem.category.slice(1) }}
              </span>
              <span class="text-xs font-medium text-gray-500">{{ classItem.level }}</span>
            </div>
            <h3 class="text-lg font-bold mb-2">{{ classItem.title }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ classItem.description }}</p>
            <button class="text-func-teal font-medium inline-flex items-center text-sm hover:underline">
              Ver detalles
              <ArrowRightIcon class="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div class="mt-12 text-center">
        <button class="button-primary">
          Ver Todas las Clases
          <ArrowRightIcon class="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowRight as ArrowRightIcon } from 'lucide-vue-next'

const activeFilter = ref('all')

const classes = [
  {
    id: 1,
    title: 'Yoga Vinyasa',
    description: 'Secuencias dinámicas que sincronizan respiración con movimiento para fortalecer y flexibilizar.',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=600&h=400',
    category: 'yoga',
    duration: '60 min',
    level: 'Intermedio',
  },
  {
    id: 2,
    title: 'HIIT Funcional',
    description: 'Entrenamiento de alta intensidad con intervalos para maximizar la quema de calorías.',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=600&h=400',
    category: 'fitness',
    duration: '45 min',
    level: 'Avanzado',
  },
  {
    id: 3,
    title: 'Meditación Guiada',
    description: 'Sesiones de mindfulness para reducir el estrés y mejorar la concentración.',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80&w=600&h=400',
    category: 'wellness',
    duration: '30 min',
    level: 'Principiante',
  },
  {
    id: 4,
    title: 'Yoga Restaurativo',
    description: 'Posturas suaves y sostenidas para una relajación profunda y recuperación.',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=600&h=400',
    category: 'yoga',
    duration: '75 min',
    level: 'Principiante',
  },
]

const filteredClasses = computed(() => {
  return activeFilter.value === 'all' 
    ? classes 
    : classes.filter(c => c.category === activeFilter.value)
})
</script>
