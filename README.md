# SI-GRENOBLE

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/si-grenoble.svg)](https://badge.fury.io/js/si-grenoble)
[![downloads](https://img.shields.io/npm/dm/si-grenoble.svg)](https://img.shields.io/npm/dm/si-grenoble)

## INSTALL

```bash
npm install si-grenoble
```

## SETUP

SI-GRENOBLE は TailwindCSS のスタイルを利用していますが、スタイルを提供はしていません。  
利用する場合は TailwindCSS をインストールし、 `tailwind.config.js` に以下を追加してください。

```js
module.exports = {
  purge: {
    safelist: [
      "flex",
      "flex-row",
      "flex-col",
      "absolute",
      "grid",
      "grid-cols-5",
      "grid-cols-8",
      "grid-cols-10",
      "col-start-1",
      "row-start-1",
      "place-content-start",
      "gap-0",
      "justify-items-center",
      "align-center",
      "items-center",
      "w-6",
      "w-8",
      "w-10",
      "h-6",
      "h-8",
      "h-10",
      "h-64",
      "p-0.5",
      "p-1",
      "p-2",
      "pt-1",
      "mt-1",
      "mt-10",
      "mb-4",
      "py-1",
      "px-2",
      "rounded",
      "border",
      "overflow-x-auto",
      "overflow-y-hidden",
      "overflow-y-scroll",
      "bg-gray-200",
      "bg-gray-50",
      "bg-opacity-25"
    ]
  }
};
```

## USAGE

```vue
<script setup lang="ts">
import { SiEmojiPopover } from "si-grenoble";
</script>

<template>
  <div class="w-full h-full flex flex-row justify-center items-center">
    <SiEmojiPopover />
  </div>
</template>
```

## LICENSE

SI-GRENOBLE licensed under [MIT](./LICENSE).  
Twemoji graphics made by Twitter and licensed under CC-BY 4.0.
