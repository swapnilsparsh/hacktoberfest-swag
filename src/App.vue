<script>
import { computed, ref } from "vue";
import data from "./data/yearly/data-2025.json";
import emojis from "./data/emoji.json";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  setup() {
    const checked = ref(false);
    const originalData = [...data];
    const sortedData = data.sort((a, b) => a.text.localeCompare(b.text));
    const links = computed(() => {
      return checked.value ? sortedData : originalData;
    });

    const getEmoji = (swag) => emojis[swag] || "⭐";

    return { links, checked, getEmoji };
  },
  components: { Header, Footer },
};
</script>

<template>
  <div class="bg-void text-spaceWhite">
    <section class="max-w-6xl p-4 mx-auto">
      <!-- header  -->
      <Header />
      <!-- toggle -->
      <div class="flex flex-col items-center justify-center mx-auto mb-6">
        <div class="flex items-center justify-center mx-auto mb-6">
          <h2 class="mr-3 text-phthaloGreen">Total: {{ links.length }}</h2>
          <button
            type="button"
            aria-pressed="false"
            aria-labelledby="toggleLabel"
            class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11"
            :class="checked ? 'bg-melrose' : 'bg-gray-300'"
            @click="checked = !checked"
          >
            <span class="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow ring-0"
              :class="checked ? 'translate-x-5' : 'translate-x-0'"
            ></span>
          </button>
          <span class="ml-3" id="toggleLabel">
            <span class="text-sm font-medium text-phthaloGreen"
              >Sort alphabetically</span
            >
          </span>
        </div>
      </div>
      <!-- list -->
      <ul class="gap-4 mx-auto mb-5">
        <li v-for="link in links" :key="link.href" class="w-full h-full p-3">
          <div class="flex flex-col h-full">
            <div class="flex items-center mb-3">
              <a
                class="p-2 text-3xl font-semibold rounded-2xl bg-gradient-to-b from-void/0 to-blueViolet/15 shadow-[inset_0_0_0_1px_theme(colors.eastBay)] text-spaceWhite"
                :href="link.org"
                target="_blank"
                rel="noopener"
              >
                {{ link.text }}</a
              >
            </div>
            <div class="flex flex-wrap justify-start">
              <h2 class="pr-2 font-medium">Requirement:</h2>
              <h3 class="font-medium text-phthaloGreen">
                {{ link.description }}
              </h3>
            </div>
            <div
              class="flex flex-col items-start justify-between md:flex-row md:items-center"
            >
              <div class="flex flex-wrap">
                <h2 class="py-1 pr-2 font-medium">Swags:</h2>
                <h3 class="font-semibold text-lavendar">
                  <span
                    v-for="swag in link.swags"
                    :key="swag"
                    class="inline-block px-3 py-1 mr-2 rounded-full text-alabaster bg-phthaloGreen"
                  >
                    {{ getEmoji(swag) }} {{ swag }}
                  </span>
                </h3>
              </div>

              <a
                class="relative inline-flex items-center justify-center px-4 py-3 mt-4 overflow-visible text-sm font-bold tracking-wider uppercase transition-all duration-300 ease-in-out border md:mt-0 text-spaceWhite bg-gradient-to-r from-blueViolet/15 to-melrose/15 border-spaceDust/25 hover:from-blueViolet hover:to-melrose"
                :href="link.href"
                target="_blank"
                rel="noopener"
              >
                <span class="relative z-10 tracking-wider">LEARN MORE</span>
                <span
                  class="corner-border absolute inset-0 -m-0.5 bg-current opacity-100 transition-all duration-300 ease-in-out"
                ></span>
              </a>
            </div>
            <div
              class="mt-4 mb-2 border-b-2 border-dotted border-eastBay"
            ></div>
          </div>
        </li>
      </ul>
      <Footer />
    </section>
  </div>
</template>

<style>
.corner-border {
  clip-path: polygon(
    0px 6px,
    1px 6px,
    1px 1px,
    6px 1px,
    6px 0px,
    0px 0px,
    0px 100%,
    100% 100%,
    100% 0px,
    calc(100% - 6px) 0px,
    calc(100% - 6px) 1px,
    calc(100% - 1px) 1px,
    calc(100% - 1px) 6px,
    100% 6px,
    100% calc(100% - 6px),
    calc(100% - 1px) calc(100% - 6px),
    calc(100% - 1px) calc(100% - 1px),
    calc(100% - 6px) calc(100% - 1px),
    calc(100% - 6px) 100%,
    6px 100%,
    6px calc(100% - 1px),
    1px calc(100% - 1px),
    1px calc(100% - 6px),
    0px calc(100% - 6px),
    0px 6px
  );
  transition: clip-path 300ms ease-in-out, opacity 300ms ease-in-out,
    transform 300ms ease-in-out;
}

/* Hide corner border on hover with collapsing animation */
a:hover .corner-border {
  opacity: 0;
  transform: scale(0.8);
}
</style>
