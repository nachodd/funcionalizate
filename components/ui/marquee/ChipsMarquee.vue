<template>
  <div class="center-content">
    <div class="wrapper">
      <div class="marquee-text rotate-left fadeout-horizontal">
        <div class="marquee-text-track">
          <p>Cuerpo</p>
          <p>Mente</p>
          <p>Alma</p>
          <p>Cuerpo</p>
          <p>Mente</p>
          <p>Alma</p>
          <p aria-hidden="true">Cuerpo</p>
          <p aria-hidden="true">Mente</p>
          <p aria-hidden="true">Alma</p>
          <p aria-hidden="true">Cuerpo</p>
          <p aria-hidden="true">Mente</p>
          <p aria-hidden="true">Alma</p>
        </div>
      </div>
      <div class="marquee-text rotate-right fadeout-horizontal">
        <div
          :style="{
            '--direction': 'reverse',
            '--speed': '20s',
          }"
          class="marquee-text-track"
        >
          <p>Cuerpo</p>
          <p>Mente</p>
          <p>Alma</p>
          <p>Cuerpo</p>
          <p>Mente</p>
          <p>Alma</p>
          <p aria-hidden="true">Cuerpo</p>
          <p aria-hidden="true">Mente</p>
          <p aria-hidden="true">Alma</p>
          <p aria-hidden="true">Cuerpo</p>
          <p aria-hidden="true">Mente</p>
          <p aria-hidden="true">Alma</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  /* background-color: #141414; */
  font-size: 62.5%;
  font-family: monospace;
}

.fadeout-horizontal {
  mask-image: linear-gradient(
    to right,
    transparent,
    black 5rem,
    black calc(100% - 5rem),
    transparent
  );
}

.center-content {
  display: flex;
  align-items: center;
}

.wrapper {
  padding-top: 3.8rem;
  width: 100%;
  color: white;
  font-size: 3rem;
}

.rotate-left {
  transform: rotate(-12deg);
}

.rotate-right {
  transform: rotate(12deg) translate(0, -100px);
}

.marquee-text {
  overflow: clip;
}

.marquee-text-track {
  display: flex;
  padding-left: 4.8rem;
  gap: 4.8rem;
  width: max-content;
  animation: marquee-move-text var(--speed, 10s) linear infinite
    var(--direction, forwards);
}

.marquee-text p {
  border: 1px solid white;
  background-color: #f8e7e7;
  border-radius: 999px;
  padding: 1rem 2.5rem;
}

@keyframes marquee-move-text {
  to {
    transform: translateX(-50%);
  }
}
</style>
