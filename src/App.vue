<script>
import { computed, ref } from "vue";
import data from "./data/yearly/data-2024.json";
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
  <div class="bg-limeGreen">
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
            :class="checked ? 'bg-pink' : 'bg-gray-300'"
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
                class="p-2 text-3xl font-semibold bg-black text-alabaster"
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
                <h3 class="text-phthaloGreen">
                  <span
                    v-for="swag in link.swags"
                    :key="swag"
                    class="inline-block px-3 py-1 my-1 mr-2 rounded-full text-alabaster bg-phthaloGreen"
                  >
                    {{ getEmoji(swag) }} {{ swag }}
                  </span>
                </h3>
              </div>

              <a
                class="inline-flex items-center px-6 py-3 mt-4 transition duration-300 ease-in-out bg-black rounded-full md:mt-0 text-alabaster hover:bg-phthaloGreen"
                :href="link.href"
                target="_blank"
                rel="noopener"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="mt-4 mb-2 border-b-2 border-black border-dashed"></div>
          </div>
        </li>
      </ul>
      <Footer />
    </section>
  </div>
</template>
