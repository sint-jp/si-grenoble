<script setup lang="ts">
import { computed, ref } from "vue";
import { useTwemoji } from "../composables/useTwemoji";

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
const { svg } = useTwemoji({ emoji: props.emoji });
</script>

<template>
  <button
    class="rounded-lg p-1.5 transition ease-linear duration-300 hover:shadow active:shadow-inner"
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
