
<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-teal-coral">
            Funcionalizate
          </span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" :class="['nav-link', activeSection === 'home' ? 'active' : '']">
            Inicio
          </a>
          <a href="#about" :class="['nav-link', activeSection === 'about' ? 'active' : '']">
            Nosotros
          </a>
          <a href="#classes" :class="['nav-link', activeSection === 'classes' ? 'active' : '']">
            Clases
          </a>
          <a href="#testimonials" :class="['nav-link', activeSection === 'testimonials' ? 'active' : '']">
            Testimonios
          </a>
          <a href="#contact" :class="['nav-link', activeSection === 'contact' ? 'active' : '']">
            Contacto
          </a>
          <button class="button-primary">
            Prueba Gratuita
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            class="p-2 rounded-md text-gray-700 focus:outline-none"
            @click="isOpen = !isOpen"
          >
            <component :is="!isOpen ? 'MenuIcon' : 'XIcon'" class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      :class="[
        'absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden bg-white shadow-lg md:hidden',
        isOpen ? 'max-h-96' : 'max-h-0'
      ]"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          href="#home"
          :class="['block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50', activeSection === 'home' ? 'text-func-teal' : '']"
          @click="isOpen = false"
        >
          Inicio
        </a>
        <a
          href="#about"
          :class="['block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50', activeSection === 'about' ? 'text-func-teal' : '']"
          @click="isOpen = false"
        >
          Nosotros
        </a>
        <a
          href="#classes"
          :class="['block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50', activeSection === 'classes' ? 'text-func-teal' : '']"
          @click="isOpen = false"
        >
          Clases
        </a>
        <a
          href="#testimonials"
          :class="['block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50', activeSection === 'testimonials' ? 'text-func-teal' : '']"
          @click="isOpen = false"
        >
          Testimonios
        </a>
        <a
          href="#contact"
          :class="['block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50', activeSection === 'contact' ? 'text-func-teal' : '']"
          @click="isOpen = false"
        >
          Contacto
        </a>
        <button class="w-full button-primary mt-3">
          Prueba Gratuita
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Menu as MenuIcon, X as XIcon } from 'lucide-vue-next'

defineOptions({
  components: {
    MenuIcon,
    XIcon,
  },
})


const isOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('home')

const handleScroll = () => {
  scrolled.value = window.scrollY > 10

  // Get all sections
  const sections = document.querySelectorAll('section[id]')

  // Find the section that is currently in view
  let current = 'home'
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100 // Offset for navbar height
    const sectionHeight = section.offsetHeight

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id')
    }
  })

  // Update the active section
  activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Initial check for the active section
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
