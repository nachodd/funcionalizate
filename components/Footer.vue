
<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="section-container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 class="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-teal-coral">
            Funcionalizate
          </h3>
          <p class="text-gray-400 mb-6">
            Tu espacio de transformación integral donde el cuerpo y la mente encuentran armonía.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-func-teal transition-colors">
              <FacebookIcon class="h-5 w-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-func-teal transition-colors">
              <InstagramIcon class="h-5 w-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-func-teal transition-colors">
              <TwitterIcon class="h-5 w-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-func-teal transition-colors">
              <YoutubeIcon class="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Enlaces rápidos</h4>
          <ul class="space-y-2">
            <li><a href="#home" class="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#about" class="text-gray-400 hover:text-white transition-colors">Nosotros</a></li>
            <li><a href="#classes" class="text-gray-400 hover:text-white transition-colors">Clases</a></li>
            <li><a href="#testimonials" class="text-gray-400 hover:text-white transition-colors">Testimonios</a></li>
            <li><a href="#contact" class="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Servicios</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Yoga</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Fitness Funcional</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Meditación</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Entrenamiento Personal</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Nutrición</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">Contacto</h4>
          <address class="text-gray-400 not-italic">
            <p class="mb-2">Av. Principal 123, Colonia Centro</p>
            <p class="mb-2">Ciudad de México, CP 12345</p>
            <p class="mb-2">Email: contacto@funcionalizate.com</p>
            <p>Teléfono: +52 (55) 1234 5678</p>
          </address>
        </div>
      </div>
      
      <div class="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Funcionalizate. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Facebook as FacebookIcon, Instagram as InstagramIcon, Twitter as TwitterIcon, Youtube as YoutubeIcon } from 'lucide-vue-next'
</script>
