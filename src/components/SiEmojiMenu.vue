<script setup lang="ts">
type Emoji = {
  unicode: string;
  tags: string[];
};

type EmojiGroup = {
  group: number;
  emojiList: Emoji[];
};

import { ref } from "@vue/reactivity";
import json from "../emoji/all.json";
import SiEmoji from "./SiEmoji.vue";

const emojiGroupList: EmojiGroup[] = JSON.parse(JSON.stringify(json));
const group = ref(0);
</script>

<template>
  <div class="bg-gray-50 bg-opacity-25 rounded border py-1 px-2">
    <div>
      <div class="grid grid-cols-10 h-8 p-2 mt-1 mb-4">
        <div v-for="tab in emojiGroupList" :key="tab.group">
          <SiEmoji
            class="w-6 h-6"
            :emoji="tab.emojiList[0].unicode"
            @click="group = tab.group"
          />
        </div>
      </div>

      <div
        class="
          grid grid-cols-8
          col-start-1
          row-start-1
          place-content-start
          gap-0
          justify-items-center
          items-center
          h-64
          p-1
          overflow-y-scroll
        "
      >
        <div
          v-for="emoji in emojiGroupList[group].emojiList"
          :key="emoji.unicode"
          class="w-10 h-10"
        >
          <SiEmoji
            :emoji="emoji.unicode"
            @click="$emit('select', emoji.unicode)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
