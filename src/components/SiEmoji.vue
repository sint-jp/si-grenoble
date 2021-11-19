<script setup lang="ts">
type Props = {
  class: string;
  emoji: string;
};

import Twemoji from "twemoji";

withDefaults(defineProps<Props>(), {
  class: "w-8 h-8 p-0.5",
  emoji: "✨",
});

const getTwemoji = (emoji: string) =>
  Twemoji.parse(emoji, {
    folder: "svg",
    ext: ".svg",
  });
</script>

<template>
  <button class="rounded p-1 duration-500 hover:bg-gray-200">
    <div :class="class" v-html="getTwemoji(emoji)" />
  </button>
</template>
