<template>
  <section class="py-48">
    <div
      class="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8"
    >
      <div class="mx-auto">
        <div
          class="flex lg:flex-row items-center flex-col-reverse sm:text-center"
        >
          <ChipsMarquee
            class="marqueechips max-w-screen-xl w-[90%] mx-auto gap-x-12 md:flex"
          />
          <!-- Left Content -->
          <div
            class="lg:w-1/2 mb-12 lg:mb-0 flex flex-col items-center mt-5 lg:mt-0"
          >
            <FunctionlizateLogo class="w-1/2 h-auto fn-chip" />
            <h1
              class="text-6xl md:text-6xl font-bold leading-tight text-center"
            >
              <div>Un viaje hacia tu</div>
              <SparklesText
                text="mejor versión"
                :colors="{ first: '#9E7AFF', second: '#FE8BBB' }"
                :sparkles-count="10"
                class="mb-2"
              />
            </h1>
          </div>

          <!-- Right Content - Image Ovals -->
          <div class="lg:w-1/2 flex flex-row gap-6 items-center justify-center">
            <div
              class="w-32 h-80 md:w-[12rem] max-w-[12rem] min-w-[12rem] md:h-96 rounded-[100px] overflow-hidden"
            >
              <img
                src="@/assets/Ariana-0990.jpg"
                alt="Yoga at sunset"
                class="w-full h-full object-cover"
              >
            </div>
            <div
              class="w-32 h-80 md:w-[12rem] max-w-[12rem] min-w-[12rem] md:h-96 rounded-[100px] overflow-hidden"
            >
              <img
                src="@/assets/ArianaExt-1246.jpg"
                alt="Meditation with headphones"
                class="w-full h-full object-cover"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FunctionlizateLogo from "@/assets/funcionalizate.svg";
import ChipsMarquee from "@/components/ui/marquee/ChipsMarquee.vue";
import SparklesText from "@/components/ui/sparkles-text/SparklesText.vue";


</script>

<style scoped>

.bg-spot {
  background-image: url("@/assets/spot2.svg");
  background-repeat: no-repeat;
  background-size: contain;
}

.marqueechips {
  position: absolute;
  /* width: 70%; */
  z-index: -1;
}

.fn-chip {
  border: 1px solid var(--fucsia);
  background-color: white;
  border-radius: 999px;
  padding: 0.5rem 1.5rem;
}
</style>
