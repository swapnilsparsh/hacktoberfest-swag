<template>
  <section class="flex flex-wrap items-center justify-center gap-4 mb-4">
    <img src="/image/Logo.png" class="object-contain w-20 h-20" />
    <h1 class="text-4xl font-semibold text-center text-spaceWhite md:text-5xl">
      Hacktoberfest 2025 Swag List
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
</template>

<script>
import GitHubSVG from "./icons/GitHubSVG.vue";

export default {
  components: { GitHubSVG },
};
</script>

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
