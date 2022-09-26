<script>
import { computed, ref } from "vue";
import data from "./data.json";
import Twitter from "./components/Twitter.vue";
import Github from "./components/Github.vue";

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
  components: { Twitter, Github },
};
</script>

<template>
  <div class="bg-void">
    <section>
      <h2>Test</h2>
    </section>
    <section class="max-w-6xl p-4 mx-auto">
      <h1
        class="mb-5 text-4xl md:text-5xl font-semibold text-center text-white"
      >
        Hacktoberfest 2022 Swag List
      </h1>
      <!-- toggle -->
      <div class="flex items-center justify-center mx-auto mb-6">
        <h2 class="text-white mr-5">Total: {{ links.length }}</h2>
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
          <span class="text-sm font-medium text-white"
            >Sort alphabetically</span
          >
        </span>
      </div>
      <!-- list -->
      <ul class="gap-4 mx-auto mb-5">
        <li v-for="link in links" :key="link.href" class="p-3 w-full h-full">
          <a
            class="text-3xl font-medium text-white"
            :href="link.org"
            target="_blank"
            rel="noopener"
            >{{ link.text }}</a
          >
          <div class="flex flex-wrap justify-start mb-2">
            <h2 class="pr-2 text-psybeam">Requirement:</h2>
            <h3 class="text-white">{{ link.description }}</h3>
          </div>
          <div class="flex flex-wrap justify-start mb-2">
            <h2 class="pr-2 text-psybeam">Swags:</h2>
            <h3 class="text-white">{{ link.swags }}</h3>
          </div>
          <button class="bg-psybeam px-2 py-1 rounded">
            <a
              class="text-sm font-medium text-black"
              :href="link.href"
              target="_blank"
              rel="noopener"
            >
              Learn More</a
            >
          </button>
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
              class="text-gray-400 hover:text-white"
            >
              <span class="sr-only">Twitter</span>
              <Twitter />
            </a>

            <a
              href="https://github.com/swapnilsparsh"
              class="text-gray-400 hover:text-white"
            >
              <span class="sr-only">GitHub</span>
              <Github />
            </a>
          </div>
          <div class="mt-8 md:mt-0 md:order-1">
            <p class="text-sm text-center text-gray-400">
              &copy; {{ new Date().getFullYear() }} Made with ❤️ by Swapnil
              Srivastava
            </p>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>
