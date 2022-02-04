<script setup lang="ts">
import { ref } from "vue";
import SiEmojiCard from "./components/SiEmojiCard.vue";

const emoji = ref("✨");
</script>

<template>
  <div class="h-screen flex justify-center items-center">
    <SiEmojiCard v-model="emoji" />
  </div>
</template>
