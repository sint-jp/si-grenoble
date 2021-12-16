<script setup lang="ts">
type Emoji = {
  u: string;
  tags: string[];
};

type EmojiGroup = {
  group: number;
  el: Emoji[];
};

type Emits = {
  select: (_: string) => void;
};

import { ref } from "vue";
import json from "../emoji/all.json";
import SiEmoji from "./SiEmoji.vue";

defineEmits(["select"]);

const emojiGroupList: EmojiGroup[] = JSON.parse(JSON.stringify(json));
const group = ref(0);
</script>

<template>
  <div class="bg-gray-50 bg-opacity-25 rounded border py-1 px-2">
    <div>
      <div
        class="
          flex flex-row
          justify-center
          align-center
          p-0.5
          h-10
          overflow-x-auto overflow-y-hidden
        "
      >
        <div v-for="tab in emojiGroupList" :key="tab.group">
          <SiEmoji
            class="w-6 h-6 p-px"
            :emoji="tab.el[0].u"
            @tapped="group = tab.group"
          />
        </div>
      </div>

      <div
        v-for="(list, index) in emojiGroupList"
        v-show="index === group"
        :key="index"
        class="
          grid grid-cols-5
          md:grid-cols-8
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
        <div v-for="emoji in list.el" :key="emoji.u" class="w-10 h-10">
          <SiEmoji :emoji="emoji.u" @click="$emit('select', emoji.u)" />
        </div>
      </div>
    </div>
  </div>
</template>
