<script setup lang="ts">
import { peopleEmojiList } from "../data/peopleEmojiList";
import { animalAndNatureEmojiList } from "../data/animalAndNatureEmojiList";

import SiEmoji from "./SiEmoji.vue";
</script>

<template>
  <div
    class="rounded-lg border border-gray-200 shadow-lg shadow-gray-200 h-80 bg-gray-50 px-0.5 py-1.5 flex flex-col"
  >
    <label class="w-full grow-0 px-2 pt-0.5 pb-1.5">
      <input
        class="w-full border text-sm rounded-full px-2 py-0.5 bg-slate-50 focus:outline-none focus:ring transition duration-300 ease-linear font-semibold"
      />
    </label>

    <div class="w-full grow overflow-y-scroll">
      <div class="px-1 py-0.5 text-xs font-medium">Smileys & People</div>
      <div class="grid grid-cols-6 gap-px px-0.5">
        <SiEmoji
          v-for="emoji in peopleEmojiList"
          :key="emoji.code"
          :emoji="emoji.code"
          :title="emoji.words.join(', ')"
          size="25px"
        />
      </div>

      <div class="px-1 py-0.5 text-xs font-medium">Animals & Nature</div>
      <div class="grid grid-cols-6 gap-px px-0.5">
        <SiEmoji
          v-for="emoji in animalAndNatureEmojiList"
          :key="emoji.code"
          :emoji="emoji.code"
          :title="emoji.words.join(', ')"
          size="25px"
        />
      </div>
    </div>
  </div>
</template>
