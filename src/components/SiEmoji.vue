<script setup lang="ts">
import { computed, ref } from "vue";
import twemoji from "twemoji";

interface SiEmojiProps {
  emoji?: string;
  size?: string;
  title?: string;
}

const props = withDefaults(defineProps<SiEmojiProps>(), {
  emoji: "✨",
  size: "20px",
  title: ""
});

const width = computed(() => props.size);
const height = computed(() => props.size);
const options = { folder: "svg", ext: ".svg" };
const svg = computed(() => twemoji.parse(props.emoji, options));
</script>

<template>
  <button
    class="flex justify-center items-center rounded-lg p-1.5 transition ease-linear duration-300 hover:shadow active:shadow-inner hover:bg-stone-100"
    :title="title"
  >
    <div class="si-emoji" v-html="svg" />
  </button>
</template>

<style scoped>
.si-emoji {
  width: v-bind(width);
  height: v-bind(height);
}
</style>
