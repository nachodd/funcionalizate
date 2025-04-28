
<template>
  <section id="about" class="py-20 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
    <div class="absolute -left-20 top-40 w-40 h-40 rounded-full bg-func-teal/10 animate-rotate-slow blur-3xl"></div>
    <div class="absolute -right-20 bottom-40 w-60 h-60 rounded-full bg-func-coral/10 animate-rotate-slow blur-3xl"></div>
    
    <div class="section-container">
      <div class="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <div class="inline-block px-3 py-1 rounded-full bg-func-lavender/30 text-func-charcoal text-sm font-medium mb-4">
          Por qué elegirnos
        </div>
        <h2 class="text-4xl font-bold mb-6">Más que ejercicio, es un <span class="highlight-text">estilo de vida</span></h2>
        <p class="text-xl text-gray-600">
          Funcionalizate se trata de encontrar la armonía perfecta entre cuerpo y mente, creando un espacio donde todos pueden alcanzar su mejor versión.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          :icon="HeartPulseIcon"
          title="Bienestar Integral"
          description="Programas que unen yoga y fitness para mejorar tanto tu salud física como mental."
          delay="0ms"
        />
        <FeatureCard 
          :icon="DumbbellIcon"
          title="Equipamiento Moderno"
          description="Contamos con las mejores instalaciones y equipos para optimizar tus entrenamientos."
          delay="100ms"
        />
        <FeatureCard 
          :icon="FlowerIcon"
          title="Yoga Especializado"
          description="Diferentes estilos de yoga adaptados a todos los niveles, desde principiantes hasta avanzados."
          delay="200ms"
        />
        <FeatureCard 
          :icon="UsersIcon"
          title="Entrenadores Expertos"
          description="Nuestro equipo de profesionales está certificado y tiene años de experiencia."
          delay="300ms"
        />
        <FeatureCard 
          :icon="TargetIcon"
          title="Programas Personalizados"
          description="Rutinas diseñadas específicamente para cumplir tus objetivos personales."
          delay="400ms"
        />
        <FeatureCard 
          :icon="ClockIcon"
          title="Horarios Flexibles"
          description="Amplia disponibilidad de horarios para que puedas adaptarlos a tu rutina diaria."
          delay="500ms"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { HeartPulse as HeartPulseIcon, Dumbbell as DumbbellIcon, Flower as FlowerIcon, Users as UsersIcon, Target as TargetIcon, Clock as ClockIcon } from 'lucide-vue-next'
import FeatureCard from '~/components/FeatureCard.vue'
</script>
