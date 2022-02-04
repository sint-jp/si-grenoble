<script setup lang="ts">
import { smileys } from "../data/smiley";
import { symbols } from "../data/symbol";
import { foods } from "../data/food";
import { natures } from "../data/nature";
import { objects } from "../data/object";
import { animals } from "../data/animal";
import SiEmoji from "./SiEmoji.vue";

const emit = defineEmits<{ (e: "click", emoji: string): void }>();
const handleClick = (emoji: string) => emit("click", emoji);
</script>

<template>
  <div
    class="rounded-lg border border-gray-200 shadow-lg shadow-gray-200 h-64 bg-gray-50 px-0.5 py-1.5 flex flex-col"
  >
    <div class="w-full grow overflow-y-scroll">
      <div class="px-1 py-0.5 text-xs font-medium">Smileys</div>
      <div class="grid grid-cols-6 gap-px justify-center items-center px-0.5">
        <SiEmoji
          v-for="emoji in smileys"
          :key="emoji.code"
          :emoji="emoji.code"
          :title="emoji.words.join(', ')"
          size="25px"
          @click="handleClick(emoji.code)"
        />
      </div>

      <div class="px-1 py-0.5 text-xs font-medium">Symbols</div>
      <div class="grid grid-cols-6 gap-px justify-center items-center px-0.5">
        <SiEmoji
          v-for="emoji in symbols"
          :key="emoji.code"
          :emoji="emoji.code"
          :title="emoji.words.join(', ')"
          size="25px"
          @click="handleClick(emoji.code)"
        />
      </div>

      <div class="px-1 py-0.5 text-xs font-medium">Foods</div>
      <div class="grid grid-cols-6 gap-px justify-center items-center px-0.5">
        <SiEmoji
          v-for="emoji in foods"
          :key="emoji.code"
          :emoji="emoji.code"
          :title="emoji.words.join(', ')"
          size="25px"
          @click="handleClick(emoji.code)"
        />
      </div>

      <div class="px-1 py-0.5 text-xs font-medium">Nature</div>
      <div class="grid grid-cols-6 gap-px justify-center items-center px-0.5">
        <SiEmoji
          v-for="emoji in natures"
          :key="emoji.code"
          :emoji="emoji.code"
          :title="emoji.words.join(', ')"
          size="25px"
          @click="handleClick(emoji.code)"
        />
      </div>

      <div class="px-1 py-0.5 text-xs font-medium">Objects</div>
      <div class="grid grid-cols-6 gap-px justify-center items-center px-0.5">
        <SiEmoji
          v-for="emoji in objects"
          :key="emoji.code"
          :emoji="emoji.code"
          :title="emoji.words.join(', ')"
          size="25px"
          @click="handleClick(emoji.code)"
        />
      </div>

      <div class="px-1 py-0.5 text-xs font-medium">Animals</div>
      <div class="grid grid-cols-6 gap-px justify-center items-center px-0.5">
        <SiEmoji
          v-for="emoji in animals"
          :key="emoji.code"
          :emoji="emoji.code"
          :title="emoji.words.join(', ')"
          size="25px"
          @click="handleClick(emoji.code)"
        />
      </div>
    </div>
  </div>
</template>
