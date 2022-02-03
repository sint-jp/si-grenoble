import { computed, ref } from "vue";
import twemoji from "twemoji";

export const useTwemoji = (options: { emoji: string; }) => {
  const emoji = ref(options.emoji);
  const svg = computed(() =>
    twemoji.parse(emoji.value, { folder: "svg", ext: ".svg" })
  );

  return { emoji, svg };
};
