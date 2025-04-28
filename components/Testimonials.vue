
<template>
  <section id="testimonials" class="py-20 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute -left-40 bottom-20 w-80 h-80 rounded-full bg-func-lavender/10 animate-float delay-500 blur-3xl"></div>
    <div class="absolute -right-20 top-40 w-60 h-60 rounded-full bg-func-mint/10 animate-float delay-300 blur-3xl"></div>
    
    <div class="section-container">
      <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <div class="inline-block px-3 py-1 rounded-full bg-func-coral/20 text-func-charcoal text-sm font-medium mb-4">
          Testimonios
        </div>
        <h2 class="text-4xl font-bold mb-6">Lo que dicen nuestros <span class="highlight-text">miembros</span></h2>
        <p class="text-lg text-gray-600">
          El impacto real de Funcionalizate se ve reflejado en las experiencias de quienes forman parte de nuestra comunidad.
        </p>
      </div>
      
      <div class="relative max-w-4xl mx-auto px-4">
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
          >
            <div 
              v-for="testimonial in testimonials" 
              :key="testimonial.id" 
              class="w-full flex-shrink-0 px-4"
            >
              <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10 glass-card">
                <div class="flex mb-6">
                  <StarIcon 
                    v-for="i in 5" 
                    :key="i"
                    :class="[
                      'w-5 h-5 mr-1',
                      i <= testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    ]" 
                  />
                </div>
                
                <p class="text-lg md:text-xl text-gray-700 italic mb-8">
                  "{{ testimonial.content }}"
                </p>
                
                <div class="flex items-center">
                  <img 
                    :src="testimonial.avatar" 
                    :alt="testimonial.author" 
                    class="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p class="font-bold text-gray-900">{{ testimonial.author }}</p>
                    <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex justify-center mt-10 space-x-2">
          <button
            v-for="(_, index) in testimonials"
            :key="index"
            @click="handleDotClick(index)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              index === activeIndex ? 'bg-func-teal w-8' : 'bg-gray-300 hover:bg-gray-400'
            ]"
            :aria-label="`Go to testimonial ${index + 1}`"
          />
        </div>
        
        <button
          @click="handlePrev"
          class="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-func-teal"
          aria-label="Previous testimonial"
        >
          <ChevronLeftIcon class="w-5 h-5" />
        </button>
        
        <button
          @click="handleNext"
          class="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-func-teal"
          aria-label="Next testimonial"
        >
          <ChevronRightIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Star as StarIcon } from 'lucide-vue-next'

const testimonials = [
  {
    id: 1,
    content: "Funcionalizate transformó completamente mi rutina. Después de meses de sedentarismo, sus clases me devolvieron la energía y motivación. Los instructores son excepcionales.",
    author: "María González",
    role: "Miembro desde 2022",
    avatar: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 2,
    content: "Las clases de yoga son exactamente lo que necesitaba para combatir el estrés diario. El ambiente es acogedor y los profesores realmente se preocupan por tu progreso personal.",
    author: "Carlos Mendoza",
    role: "Miembro desde 2021",
    avatar: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5,
  },
  {
    id: 3,
    content: "Increíble comunidad y excelentes instalaciones. He probado muchos gimnasios, pero ninguno tiene el equilibrio perfecto entre fitness y bienestar que ofrece Funcionalizate.",
    author: "Ana Jiménez",
    role: "Miembro desde 2023",
    avatar: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 4,
  },
]

const activeIndex = ref(0)
const isAnimating = ref(false)

const handlePrev = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  activeIndex.value = activeIndex.value === 0 ? testimonials.length - 1 : activeIndex.value - 1
  setTimeout(() => { isAnimating.value = false }, 500)
}

const handleNext = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  activeIndex.value = activeIndex.value === testimonials.length - 1 ? 0 : activeIndex.value + 1
  setTimeout(() => { isAnimating.value = false }, 500)
}

const handleDotClick = (index) => {
  if (isAnimating.value) return
  isAnimating.value = true
  activeIndex.value = index
  setTimeout(() => { isAnimating.value = false }, 500)
}

let interval
onMounted(() => {
  interval = setInterval(() => {
    handleNext()
  }, 8000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>
