<script>
import { computed, ref } from "vue";
import data from "./data/data-2024.json";
import Twitter from "./components/Twitter.vue";
import GitHub from "./components/GitHub.vue";
import GitHubSVG from "./components/GitHubSVG.vue";
import Tshirt from "./components/Tshirt.vue";
import Sticker from "./components/Sticker.vue";
import Bottle from "./components/Bottle.vue";
import Hoodie from "./components/Hoodie.vue";

export default {
  setup() {
    const checked = ref(false);
    const originalData = [...data];
    const sortedData = data.sort((a, b) => a.text.localeCompare(b.text));
    const links = computed(() => {
      return checked.value ? sortedData : originalData;
    });
    return { links, checked };
  },
  components: { Twitter, GitHub, GitHubSVG, Tshirt, Sticker, Bottle, Hoodie },
};
</script>

<template>
  <div class="bg-limeGreen">
    <section class="max-w-6xl p-4 mx-auto">
      <!-- header  -->
      <section class="flex flex-wrap items-center justify-center gap-4 mb-4">
        <img src="/image/Logo.png" class="object-cover w-20 h-20" />
        <h1
          class="text-4xl font-semibold text-center text-phthaloGreen md:text-5xl"
        >
          Hacktoberfest 2024 Swag List
        </h1>
      </section>
      <a
        class="github-corner"
        href="https://github.com/swapnilsparsh/hacktoberfest-swag"
        target="_blank"
        rel="noopener"
      >
        <GitHubSVG />
      </a>
      <!-- toggle -->
      <div class="flex flex-col items-center justify-center mx-auto mb-6">
        <div class="flex items-center justify-center mx-auto mb-6">
          <h2 class="mr-5 text-phthaloGreen">Total: {{ links.length }}</h2>
          <button
            type="button"
            aria-pressed="false"
            aria-labelledby="toggleLabel"
            class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            :class="checked ? 'bg-psybeam' : 'bg-gray-300'"
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
          <div
            class="flex flex-col h-full p-8 border-2 border-dashed rounded-2xl border-gold"
          >
            <div class="flex items-center mb-3">
              <a
                class="text-3xl font-semibold text-red"
                :href="link.org"
                target="_blank"
                rel="noopener"
              >
                [{{ link.text }}]</a
              >
            </div>
            <div class="flex flex-wrap justify-start">
              <h2 class="pr-2 text-blue">Requirement:</h2>
              <h3 class="text-phthaloGreen">{{ link.description }}</h3>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex flex-wrap justify-start">
                <h2 class="pr-2 text-blue">Swags:</h2>
                <h3 class="text-phthaloGreen">{{ link.swags }}</h3>
              </div>

              <a
                class="inline-flex items-center p-3 transition duration-300 ease-in-out border text-manga rounded-xl custom-hover"
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
          </div>
        </li>
      </ul>
      <!-- footer -->
      <footer>
        <div
          class="px-4 py-4 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
        >
          <div class="flex justify-center space-x-6 md:order-2">
            <a
              href="https://twitter.com/swapnilsparsh"
              class="text-gray-400 hover:text-phthaloGreen"
              target="_blank"
              rel="noopener"
            >
              <span class="sr-only">Twitter</span>
              <Twitter />
            </a>

            <a
              href="https://github.com/swapnilsparsh"
              class="text-gray-400 hover:text-phthaloGreen"
              target="_blank"
              rel="noopener"
            >
              <span class="sr-only">GitHub</span>
              <GitHub />
            </a>
          </div>
          <div class="mt-8 md:mt-0 md:order-1">
            <p class="text-sm text-center text-phthaloGreen">
              &copy; {{ new Date().getFullYear() }} Made with ❤️ by Swapnil
              Srivastava
            </p>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<style>
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }

  20%,
  60% {
    transform: rotate(-25deg);
  }

  40%,
  80% {
    transform: rotate(10deg);
  }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }

  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
</style>
