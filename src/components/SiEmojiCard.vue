<script setup lang="ts">
import { ref } from "vue";
import SiEmoji from "./SiEmoji.vue";
import SiEmojiMenu from "./SiEmojiMenu.vue";
import { useVModel } from "@vueuse/core";

interface SiEmojiCardProps {
  modelValue: string;
  size: string;
}

const props = withDefaults(defineProps<SiEmojiCardProps>(), {
  emoji: "✨",
  size: "50px"
});

const emit = defineEmits<{ (e: "click", v: string): void }>();

const emoji = useVModel(props, "modelValue", emit);
const show = ref(false);

const handleClickSiEmoji = () => (show.value = !show.value);

const handleClickSiEmojiMenu = (value: string) => {
  show.value = !show.value;
  emoji.value = value;
};
</script>

<template>
  <div class="relative">
    <SiEmoji :emoji="emoji" :size="size" @click="handleClickSiEmoji" />

    <div v-show="show" class="absolute w-64 mt-1">
      <SiEmojiMenu @click="handleClickSiEmojiMenu" />
    </div>
  </div>
</template>
