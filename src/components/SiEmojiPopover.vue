<script setup lang="ts">
type Props = {
  emoji: string;
};

import { ref } from "vue";
import SiEmoji from "./SiEmoji.vue";
import SiEmojiMenu from "./SiEmojiMenu.vue";

const props = withDefaults(defineProps(), {
  emoji: "✨",
});

const emoji = ref<string>(props.emoji);
const popover = ref(false);

const onTapped = () => {
  popover.value = !popover.value;
}

const onSelect = (val: string) => {
  emoji.value = val;
  popover.value = false;
};
</script>

<template>
  <div class="flex flex-col">
    <div>
      <SiEmoji :emoji="emoji" @tapped="onTapped" />
    </div>

    <div v-show="popover" class="absolute pt-1 mt-10">
      <SiEmojiMenu @select="onSelect" />
    </div>
  </div>
</template>
