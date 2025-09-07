<template>
  <footer>
    <div
      class="px-4 py-4 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          href="https://x.com/swapnilsparsh"
          class="text-lavendar hover:text-white"
          target="_blank"
          rel="noopener"
        >
          <span class="sr-only">Twitter</span>
          <Twitter />
        </a>

        <a
          href="https://github.com/swapnilsparsh"
          class="text-lavendar hover:text-white"
          target="_blank"
          rel="noopener"
        >
          <span class="sr-only">GitHub</span>
          <GitHub />
        </a>
      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-sm text-center text-lavendar">
          &copy; {{ currentYear }} Made with ❤️ by

          <a
            href="https://swapnilsparsh.github.io"
            class="underline"
            target="_blank"
            rel="noopener"
          >
            Swapnil Srivastava
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import Twitter from "./icons/Twitter.vue";
import GitHub from "./icons/GitHub.vue";

export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  components: { Twitter, GitHub },
};
</script>
