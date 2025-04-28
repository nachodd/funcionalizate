
<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="section-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="animate-fade-in-left">
          <div class="inline-block px-3 py-1 rounded-full bg-func-mint/30 text-func-charcoal text-sm font-medium mb-4">
            Encuéntranos
          </div>
          <h2 class="text-4xl font-bold mb-6">Visítanos y <span class="highlight-text">comienza</span> tu transformación</h2>
          <p class="text-lg text-gray-600 mb-8">
            Estamos ubicados en un espacio diseñado para inspirar bienestar. Visítanos para conocer nuestras instalaciones o contáctanos para resolver tus dudas.
          </p>
          
          <div class="space-y-6 mb-10">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <MapPinIcon class="h-6 w-6 text-func-teal" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold">Dirección</h3>
                <p class="text-gray-600">Av. Principal 123, Colonia Centro</p>
                <p class="text-gray-600">Ciudad de México, CP 12345</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <PhoneIcon class="h-6 w-6 text-func-teal" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold">Teléfono</h3>
                <p class="text-gray-600">+52 (55) 1234 5678</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <MailIcon class="h-6 w-6 text-func-teal" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold">Email</h3>
                <p class="text-gray-600">contacto@funcionalizate.com</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <ClockIcon class="h-6 w-6 text-func-teal" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold">Horario</h3>
                <p class="text-gray-600">Lunes a Viernes: 7:00 AM - 9:00 PM</p>
                <p class="text-gray-600">Sábados: 8:00 AM - 6:00 PM</p>
                <p class="text-gray-600">Domingos: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
          
          <button class="button-primary">
            Agendar Visita
            <ArrowRightIcon class="ml-2 h-5 w-5" />
          </button>
        </div>
        
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-right">
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            
            <form class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-func-teal focus:ring-func-teal focus:ring-opacity-50 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
                  <input
                    type="text"
                    class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-func-teal focus:ring-func-teal focus:ring-opacity-50 focus:outline-none transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-func-teal focus:ring-func-teal focus:ring-opacity-50 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-func-teal focus:ring-func-teal focus:ring-opacity-50 focus:outline-none transition-colors"
                  placeholder="(55) 1234 5678"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea
                  rows="4"
                  class="block w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-func-teal focus:ring-func-teal focus:ring-opacity-50 focus:outline-none transition-colors"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              
              <div>
                <button type="submit" class="w-full button-primary">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin as MapPinIcon, Phone as PhoneIcon, Mail as MailIcon, Clock as ClockIcon, ArrowRight as ArrowRightIcon } from 'lucide-vue-next'
</script>
