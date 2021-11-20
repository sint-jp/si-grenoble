import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, Fragment, renderList, unref, createVNode, withDirectives, vShow } from "vue";
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
var twemoji = function() {
  var twemoji2 = { base: "https://twemoji.maxcdn.com/v/13.1.0/", ext: ".png", size: "72x72", className: "emoji", convert: { fromCodePoint, toCodePoint }, onerror: function onerror() {
    if (this.parentNode) {
      this.parentNode.replaceChild(createText(this.alt, false), this);
    }
  }, parse, replace, test }, escaper = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, re = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g, UFE0Fg = /\uFE0F/g, U200D = String.fromCharCode(8205), rescaper = /[&<>'"]/g, shouldntBeParsed = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/, fromCharCode = String.fromCharCode;
  return twemoji2;
  function createText(text, clean) {
    return document.createTextNode(clean ? text.replace(UFE0Fg, "") : text);
  }
  function escapeHTML(s) {
    return s.replace(rescaper, replacer);
  }
  function defaultImageSrcGenerator(icon, options) {
    return "".concat(options.base, options.size, "/", icon, options.ext);
  }
  function grabAllTextNodes(node, allText) {
    var childNodes = node.childNodes, length = childNodes.length, subnode, nodeType;
    while (length--) {
      subnode = childNodes[length];
      nodeType = subnode.nodeType;
      if (nodeType === 3) {
        allText.push(subnode);
      } else if (nodeType === 1 && !("ownerSVGElement" in subnode) && !shouldntBeParsed.test(subnode.nodeName.toLowerCase())) {
        grabAllTextNodes(subnode, allText);
      }
    }
    return allText;
  }
  function grabTheRightIcon(rawText) {
    return toCodePoint(rawText.indexOf(U200D) < 0 ? rawText.replace(UFE0Fg, "") : rawText);
  }
  function parseNode(node, options) {
    var allText = grabAllTextNodes(node, []), length = allText.length, attrib, attrname, modified, fragment, subnode, text, match, i, index, img, rawText, iconId, src;
    while (length--) {
      modified = false;
      fragment = document.createDocumentFragment();
      subnode = allText[length];
      text = subnode.nodeValue;
      i = 0;
      while (match = re.exec(text)) {
        index = match.index;
        if (index !== i) {
          fragment.appendChild(createText(text.slice(i, index), true));
        }
        rawText = match[0];
        iconId = grabTheRightIcon(rawText);
        i = index + rawText.length;
        src = options.callback(iconId, options);
        if (iconId && src) {
          img = new Image();
          img.onerror = options.onerror;
          img.setAttribute("draggable", "false");
          attrib = options.attributes(rawText, iconId);
          for (attrname in attrib) {
            if (attrib.hasOwnProperty(attrname) && attrname.indexOf("on") !== 0 && !img.hasAttribute(attrname)) {
              img.setAttribute(attrname, attrib[attrname]);
            }
          }
          img.className = options.className;
          img.alt = rawText;
          img.src = src;
          modified = true;
          fragment.appendChild(img);
        }
        if (!img)
          fragment.appendChild(createText(rawText, false));
        img = null;
      }
      if (modified) {
        if (i < text.length) {
          fragment.appendChild(createText(text.slice(i), true));
        }
        subnode.parentNode.replaceChild(fragment, subnode);
      }
    }
    return node;
  }
  function parseString(str, options) {
    return replace(str, function(rawText) {
      var ret = rawText, iconId = grabTheRightIcon(rawText), src = options.callback(iconId, options), attrib, attrname;
      if (iconId && src) {
        ret = "<img ".concat('class="', options.className, '" ', 'draggable="false" ', 'alt="', rawText, '"', ' src="', src, '"');
        attrib = options.attributes(rawText, iconId);
        for (attrname in attrib) {
          if (attrib.hasOwnProperty(attrname) && attrname.indexOf("on") !== 0 && ret.indexOf(" " + attrname + "=") === -1) {
            ret = ret.concat(" ", attrname, '="', escapeHTML(attrib[attrname]), '"');
          }
        }
        ret = ret.concat("/>");
      }
      return ret;
    });
  }
  function replacer(m) {
    return escaper[m];
  }
  function returnNull() {
    return null;
  }
  function toSizeSquaredAsset(value) {
    return typeof value === "number" ? value + "x" + value : value;
  }
  function fromCodePoint(codepoint) {
    var code = typeof codepoint === "string" ? parseInt(codepoint, 16) : codepoint;
    if (code < 65536) {
      return fromCharCode(code);
    }
    code -= 65536;
    return fromCharCode(55296 + (code >> 10), 56320 + (code & 1023));
  }
  function parse(what, how) {
    if (!how || typeof how === "function") {
      how = { callback: how };
    }
    return (typeof what === "string" ? parseString : parseNode)(what, { callback: how.callback || defaultImageSrcGenerator, attributes: typeof how.attributes === "function" ? how.attributes : returnNull, base: typeof how.base === "string" ? how.base : twemoji2.base, ext: how.ext || twemoji2.ext, size: how.folder || toSizeSquaredAsset(how.size || twemoji2.size), className: how.className || twemoji2.className, onerror: how.onerror || twemoji2.onerror });
  }
  function replace(text, callback) {
    return String(text).replace(re, callback);
  }
  function test(text) {
    re.lastIndex = 0;
    var result = re.test(text);
    re.lastIndex = 0;
    return result;
  }
  function toCodePoint(unicodeSurrogates, sep) {
    var r = [], c = 0, p = 0, i = 0;
    while (i < unicodeSurrogates.length) {
      c = unicodeSurrogates.charCodeAt(i++);
      if (p) {
        r.push((65536 + (p - 55296 << 10) + (c - 56320)).toString(16));
        p = 0;
      } else if (55296 <= c && c <= 56319) {
        p = c;
      } else {
        r.push(c.toString(16));
      }
    }
    return r.join(sep || "-");
  }
}();
const _hoisted_1$2 = { class: "rounded p-1 duration-500 hover:bg-gray-200" };
const _hoisted_2$2 = ["innerHTML"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    class: { default: "w-8 h-8 p-0.5" },
    emoji: { default: "\u2728" }
  },
  setup(__props) {
    const getTwemoji = (emoji) => twemoji.parse(emoji, {
      folder: "svg",
      ext: ".svg"
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", _hoisted_1$2, [
        createElementVNode("div", {
          class: normalizeClass(__props.class),
          innerHTML: getTwemoji(__props.emoji)
        }, null, 10, _hoisted_2$2)
      ]);
    };
  }
});
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const createDep = (effects) => {
  const dep = new Set(effects);
  dep.w = 0;
  dep.n = 0;
  return dep;
};
const wasTracked = (dep) => (dep.w & trackOpBit) > 0;
const newTracked = (dep) => (dep.n & trackOpBit) > 0;
const targetMap = new WeakMap();
let trackOpBit = 1;
let activeEffect;
const ITERATE_KEY = Symbol("");
const MAP_KEY_ITERATE_KEY = Symbol("");
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (!isTracking()) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = createDep());
  }
  trackEffects(dep);
}
function isTracking() {
  return shouldTrack && activeEffect !== void 0;
}
function trackEffects(dep, debuggerEventExtraInfo) {
  let shouldTrack2 = false;
  {
    if (!newTracked(dep)) {
      dep.n |= trackOpBit;
      shouldTrack2 = !wasTracked(dep);
    }
  }
  if (shouldTrack2) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  if (deps.length === 1) {
    if (deps[0]) {
      {
        triggerEffects(deps[0]);
      }
    }
  } else {
    const effects = [];
    for (const dep of deps) {
      if (dep) {
        effects.push(...dep);
      }
    }
    {
      triggerEffects(createDep(effects));
    }
  }
}
function triggerEffects(dep, debuggerEventExtraInfo) {
  for (const effect of isArray(dep) ? dep : [...dep]) {
    if (effect !== activeEffect || effect.allowRecurse) {
      if (effect.scheduler) {
        effect.scheduler();
      } else {
        effect.run();
      }
    }
  }
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
const get = /* @__PURE__ */ createGetter();
const readonlyGet = /* @__PURE__ */ createGetter(true);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
  return function get2(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject(res)) {
      return isReadonly ? readonly(res) : reactive(res);
    }
    return res;
  };
}
const set = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
  return function set2(target, key, value, receiver) {
    let oldValue = target[key];
    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
const mutableHandlers = {
  get,
  set,
  deleteProperty,
  has,
  ownKeys
};
const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    return true;
  },
  deleteProperty(target, key) {
    return true;
  }
};
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get", key);
  }
  !isReadonly && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has", key);
  }
  !isReadonly && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
  target = target["__v_raw"];
  !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  }
  get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0);
  }
  return result;
}
function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly, isShallow) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
  const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const reactiveMap = new WeakMap();
const shallowReactiveMap = new WeakMap();
const readonlyMap = new WeakMap();
const shallowReadonlyMap = new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (target && target["__v_isReadonly"]) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    return target;
  }
  if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
const toReactive = (value) => isObject(value) ? reactive(value) : value;
const toReadonly = (value) => isObject(value) ? readonly(value) : value;
function trackRefValue(ref2) {
  if (isTracking()) {
    ref2 = toRaw(ref2);
    if (!ref2.dep) {
      ref2.dep = createDep();
    }
    {
      trackEffects(ref2.dep);
    }
  }
}
function triggerRefValue(ref2, newVal) {
  ref2 = toRaw(ref2);
  if (ref2.dep) {
    {
      triggerEffects(ref2.dep);
    }
  }
}
function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, _shallow) {
    this._shallow = _shallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = _shallow ? value : toRaw(value);
    this._value = _shallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    newVal = this._shallow ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = this._shallow ? newVal : toReactive(newVal);
      triggerRefValue(this);
    }
  }
}
Promise.resolve();
var json = [
  {
    group: 0,
    emojiList: [
      {
        unicode: "\u{1F600}",
        tags: [
          "\u306B\u3063\u3053\u308A",
          "\u30B9\u30DE\u30A4\u30EB",
          "\u7B11\u3046",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F603}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F604}",
        tags: [
          "\u308F\u30FC\u3044",
          "\u30B9\u30DE\u30A4\u30EB",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F601}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u7B11\u3046",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F606}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u5B09\u3057\u3044",
          "\u6E80\u8DB3",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F605}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u51B7\u3084\u6C57",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F923}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u7B11\u3046",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F602}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u6D99",
          "\u7B11\u3046",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F642}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u5FAE\u7B11\u307F",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F643}",
        tags: [
          "\u3055\u304B\u3055\u307E",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F609}",
        tags: [
          "\u30A6\u30A3\u30F3\u30AF",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F60A}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u5FAE\u7B11\u307F",
          "\u76EE\u3092\u7D30\u3081\u308B",
          "\u982C\u3092\u8D64\u3089\u3081\u308B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F607}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u5929\u4F7F\u306E\u8F2A",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F970}",
        tags: [
          "\u30E1\u30ED\u30E1\u30ED",
          "\u30E9\u30D6",
          "\u5922\u4E2D",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F60D}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u30CF\u30FC\u30C8",
          "\u30E9\u30D6",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F929}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u661F",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F618}",
        tags: [
          "\u3061\u3085\u3063",
          "\u30AD\u30B9",
          "\u30CF\u30FC\u30C8",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F617}",
        tags: [
          "\u3061\u3085\u3063",
          "\u9854"
        ]
      },
      {
        unicode: "\u263A\uFE0F",
        tags: [
          "\u307B\u3063",
          "\u30B9\u30DE\u30A4\u30EB",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F61A}",
        tags: [
          "\u30AD\u30B9",
          "\u76EE\u3092\u9589\u3058\u308B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F619}",
        tags: [
          "\u3061\u3085\u3063",
          "\u30AD\u30B9",
          "\u30B9\u30DE\u30A4\u30EB",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F972}",
        tags: [
          "\u3058\u30FC\u3093",
          "\u611F\u52D5",
          "\u6CE3\u304F",
          "\u6D99",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F60B}",
        tags: [
          "\u3046\u307E\u3044",
          "\u304A\u3044\u3057\u3044",
          "\u30B9\u30DE\u30A4\u30EB",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F61B}",
        tags: [
          "\u3079\u308D",
          "\u3079\u30FC",
          "\u820C",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F61C}",
        tags: [
          "\u3079\u30FC",
          "\u30B8\u30E7\u30FC\u30AF",
          "\u5197\u8AC7",
          "\u820C",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F92A}",
        tags: [
          "\u304A\u304B\u3057\u3044",
          "\u3075\u3056\u3051",
          "\u30B8\u30E7\u30FC\u30AF",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F61D}",
        tags: [
          "\u3079\u308D",
          "\u3079\u30FC",
          "\u308F\u30FC\u3044",
          "\u820C",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F911}",
        tags: [
          "\u3079\u308D",
          "\u3079\u30FC",
          "\u820C",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F917}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F92D}",
        tags: [
          "\u30AF\u30B9\u30AF\u30B9",
          "\u30B9\u30DE\u30A4\u30EB",
          "\u5185\u7DD2",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F92B}",
        tags: [
          "\u3057\u3063",
          "\u3057\u30FC",
          "\u9759\u304B\u306B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F914}",
        tags: [
          "\u3046\u30FC\u3093",
          "\u8003\u3048\u308B",
          "\u8003\u3048\u4E2D",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F910}",
        tags: [
          "\u30C1\u30E3\u30C3\u30AF",
          "\u53E3",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F928}",
        tags: [
          "\u7591\u3044",
          "\u9854",
          "\u9A5A\u304D"
        ]
      },
      {
        unicode: "\u{1F610}\uFE0F",
        tags: [
          "\u7121\u8868\u60C5",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F611}",
        tags: [
          "\u7121\u611F\u60C5",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F636}",
        tags: [
          "\u3060\u3093\u307E\u308A",
          "\u53E3\u306A\u3057",
          "\u6C88\u9ED9",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F60F}",
        tags: [
          "\u306B\u3084\u308A",
          "\u3075\u3063",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F612}",
        tags: [
          "\u3057\u3089\u3051",
          "\u3057\u3089\u3051\u308B",
          "\u30B8\u30C8\u76EE",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F644}",
        tags: [
          "\u4E0A\u76EE",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F62C}",
        tags: [
          "\u3044\u30FC",
          "\u3057\u304B\u3081\u3063\u9762",
          "\u3057\u304B\u3081\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F925}",
        tags: [
          "\u30D4\u30CE\u30AD\u30AA\u306E\u9854",
          "\u5618\u3064\u304D",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F60C}",
        tags: [
          "\u307B\u3063",
          "\u5B89\u5FC3",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F614}",
        tags: [
          "\u3057\u3087\u3093\u307C\u308A",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F62A}",
        tags: [
          "\u5BDD\u308B",
          "\u7720\u308B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F924}",
        tags: [
          "\u3088\u3060\u308C",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F634}",
        tags: [
          "zzz",
          "\u7720\u3044",
          "\u7720\u308B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F637}",
        tags: [
          "\u75C5\u6C17",
          "\u82B1\u7C89\u75C7",
          "\u9854",
          "\u98A8\u90AA"
        ]
      },
      {
        unicode: "\u{1F912}",
        tags: [
          "\u4F53\u6E29\u8A08",
          "\u71B1\u3092\u6E2C\u308B",
          "\u75C5\u6C17",
          "\u9854",
          "\u98A8\u90AA"
        ]
      },
      {
        unicode: "\u{1F915}",
        tags: [
          "\u30B1\u30AC",
          "\u30B1\u30AC\u3057\u3066\u308B\u9854",
          "\u5305\u5E2F",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F922}",
        tags: [
          "\u5177\u5408\u306E\u60AA\u3044\u9854",
          "\u6C17\u6301\u3061\u60AA\u3044",
          "\u75C5\u6C17",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F92E}",
        tags: [
          "\u3052\u308D",
          "\u6C17\u6301\u3061\u60AA\u3044",
          "\u75C5\u6C17",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F927}",
        tags: [
          "\u304F\u3057\u3083\u307F",
          "\u82B1\u7C89\u75C7",
          "\u9854",
          "\u98A8\u90AA"
        ]
      },
      {
        unicode: "\u{1F975}",
        tags: [
          "\u6691\u3055",
          "\u6C57",
          "\u71B1\u4E2D\u75C7",
          "\u767A\u71B1",
          "\u8D64\u3044\u9854"
        ]
      },
      {
        unicode: "\u{1F976}",
        tags: [
          "\u3057\u3082\u3084\u3051",
          "\u3064\u3089\u3089",
          "\u51CD\u3048",
          "\u5BD2\u3055",
          "\u9752\u3044\u9854"
        ]
      },
      {
        unicode: "\u{1F974}",
        tags: [
          "\u3046\u3064\u308D\u306A\u76EE",
          "\u3079\u308D\u3093\u3079\u308D\u3093",
          "\u307B\u308D\u9154\u3044",
          "\u3081\u307E\u3044",
          "\u4E2D\u6BD2"
        ]
      },
      {
        unicode: "\u{1F635}",
        tags: [
          "\u3075\u3089\u3075\u3089",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F92F}",
        tags: [
          "\u307C\u3093\u3063",
          "\u30B7\u30E7\u30C3\u30AF",
          "\u7206\u767A",
          "\u9854",
          "\u9A5A\u304D"
        ]
      },
      {
        unicode: "\u{1F920}",
        tags: [
          "\u30AB\u30A6\u30AC\u30FC\u30EB",
          "\u30AB\u30A6\u30DC\u30FC\u30A4",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F973}",
        tags: [
          "\u304A\u795D\u3044",
          "\u30D1\u30FC\u30C6\u30A3\u30FC",
          "\u5E3D\u5B50",
          "\u7B1B"
        ]
      },
      {
        unicode: "\u{1F978}",
        tags: [
          "\u3072\u3052",
          "\u30E1\u30AC\u30CD",
          "\u4EEE\u88C5",
          "\u5909\u88C5",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F60E}",
        tags: [
          "\u30AF\u30FC\u30EB",
          "\u30B9\u30DE\u30A4\u30EB",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F913}",
        tags: [
          "\u30DE\u30CB\u30A2",
          "\u30E1\u30AC\u30CD",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F9D0}",
        tags: [
          "\u30E1\u30AC\u30CD",
          "\u7247\u773C\u93E1",
          "\u8003\u3048\u308B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F615}",
        tags: [
          "\u56F0\u60D1",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F61F}",
        tags: [
          "\u5FC3\u914D",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F641}",
        tags: [
          "\u3057\u304B\u3081\u9762",
          "\u56F0\u3063\u305F",
          "\u5C11\u3057\u56F0\u3063\u305F",
          "\u9854"
        ]
      },
      {
        unicode: "\u2639\uFE0F",
        tags: [
          "\u3057\u304B\u3081\u9762",
          "\u56F0\u3063\u305F",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F62E}",
        tags: [
          "\u3078\u30FC",
          "\u5171\u611F",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F62F}",
        tags: [
          "\u3073\u3063\u304F\u308A",
          "\u3073\u3063\u304F\u308A\u9854",
          "\u9854",
          "\u9A5A\u304D"
        ]
      },
      {
        unicode: "\u{1F632}",
        tags: [
          "\u3073\u3063\u304F\u308A\u3057\u305F\u9854",
          "\u9854",
          "\u9A5A\u304D",
          "\u9A5A\u6115"
        ]
      },
      {
        unicode: "\u{1F633}",
        tags: [
          "\u8D64\u304F\u306A\u308B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F97A}",
        tags: [
          "\u5B50\u72AC\u306E\u76EE",
          "\u60C5\u3051",
          "\u61C7\u9858",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F626}",
        tags: [
          "\u3057\u304B\u3081\u9762",
          "\u3057\u304B\u3081\u9854",
          "\u4E0D\u672C\u610F",
          "\u4E0D\u6E80",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F627}",
        tags: [
          "\u82E6\u60B6",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F628}",
        tags: [
          "\u304C\u30FC\u3093",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F630}",
        tags: [
          "\u51B7\u3084\u6C57",
          "\u9752\u3056\u3081",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F625}",
        tags: [
          "\u56F0\u3063\u305F",
          "\u6C57",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F622}",
        tags: [
          "\u60B2\u3057\u3044",
          "\u6CE3\u304F",
          "\u6D99",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F62D}",
        tags: [
          "\u53F7\u6CE3",
          "\u60B2\u3057\u3044",
          "\u6CE3\u304F",
          "\u6D99",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F631}",
        tags: [
          "\u304C\u30FC\u3093",
          "\u30B7\u30E7\u30C3\u30AF",
          "\u53EB\u3073",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F616}",
        tags: [
          "\u56F0\u60D1",
          "\u6DF7\u4E71",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F623}",
        tags: [
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F61E}",
        tags: [
          "\u304C\u3063\u304B\u308A",
          "\u304C\u3063\u304F\u308A",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F613}",
        tags: [
          "\u809D\u3092\u51B7\u3084\u3057\u305F",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F629}",
        tags: [
          "\u75B2\u308C",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F62B}",
        tags: [
          "\u75B2\u308C",
          "\u9650\u754C",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F971}",
        tags: [
          "\u3075\u3042\uFF5E",
          "\u75B2\u308C",
          "\u7720\u3044",
          "\u9000\u5C48",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F624}",
        tags: [
          "\u3075\u3093\u3063",
          "\u5F97\u610F\u6C17",
          "\u9854",
          "\u9F3B\u606F"
        ]
      },
      {
        unicode: "\u{1F621}",
        tags: [
          "\u304B\u3093\u304B\u3093",
          "\u6012\u308A",
          "\u6FC0\u6012",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F620}",
        tags: [
          "\u6012\u308A",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F92C}",
        tags: [
          "\u306E\u306E\u3057\u308A",
          "\u6012\u308A",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F608}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u30C7\u30D3\u30EB",
          "\u60AA\u9B54",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F47F}",
        tags: [
          "\u304B\u3093\u304B\u3093",
          "\u30C7\u30D3\u30EB",
          "\u60AA\u9B54",
          "\u6FC0\u6012",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F480}",
        tags: [
          "\u30B9\u30AB\u30EB",
          "\u6B7B",
          "\u9854",
          "\u9AB8\u9AA8"
        ]
      },
      {
        unicode: "\u2620\uFE0F",
        tags: [
          "\u30B9\u30AB\u30EB",
          "\u30C9\u30AF\u30ED",
          "\u9854",
          "\u9AB8\u9AA8"
        ]
      },
      {
        unicode: "\u{1F4A9}",
        tags: [
          "\u3046\u3093\u3053",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F921}",
        tags: [
          "\u30D4\u30A8\u30ED",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F479}",
        tags: [
          "\u304A\u9762",
          "\u306A\u307E\u306F\u3052",
          "\u5316\u3051\u7269"
        ]
      },
      {
        unicode: "\u{1F47A}",
        tags: [
          "\u304A\u9762"
        ]
      },
      {
        unicode: "\u{1F47B}",
        tags: [
          "\u30B4\u30FC\u30B9\u30C8",
          "\u30E6\u30FC\u30EC\u30A4",
          "\u5E7D\u970A"
        ]
      },
      {
        unicode: "\u{1F47D}\uFE0F",
        tags: [
          "ufo",
          "\u30E6\u30FC\u30D5\u30A9\u30FC",
          "\u5B87\u5B99\u4EBA",
          "\u7570\u661F\u4EBA",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F47E}",
        tags: [
          "\u30A8\u30A4\u30EA\u30A2\u30F3",
          "\u30E2\u30F3\u30B9\u30BF\u30FC",
          "\u5B87\u5B99\u4EBA",
          "\u7570\u661F\u4EBA"
        ]
      },
      {
        unicode: "\u{1F916}",
        tags: [
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F63A}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u732B",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F638}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u732B",
          "\u7B11\u3046",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F639}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u6D99",
          "\u732B",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F63B}",
        tags: [
          "\u30B9\u30DE\u30A4\u30EB",
          "\u30CF\u30FC\u30C8",
          "\u732B",
          "\u7B11\u9854",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F63C}",
        tags: [
          "\u306B\u3084\u308A",
          "\u3075\u3063",
          "\u732B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F63D}",
        tags: [
          "\u3061\u3085\u3063",
          "\u30AD\u30B9",
          "\u732B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F640}",
        tags: [
          "\u304C\u30FC\u3093",
          "\u3073\u3063\u304F\u308A",
          "\u30B7\u30E7\u30C3\u30AF",
          "\u732B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F63F}",
        tags: [
          "\u60B2\u3057\u3044",
          "\u6D99",
          "\u732B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F63E}",
        tags: [
          "\u3077\u3093\u3077\u3093",
          "\u4E0D\u6A5F\u5ACC",
          "\u732B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F648}",
        tags: [
          "\u4E09\u733F",
          "\u733F"
        ]
      },
      {
        unicode: "\u{1F649}",
        tags: [
          "\u4E09\u733F",
          "\u733F"
        ]
      },
      {
        unicode: "\u{1F64A}",
        tags: [
          "\u4E09\u733F",
          "\u733F"
        ]
      },
      {
        unicode: "\u{1F48B}",
        tags: [
          "\u3061\u3085\u3063",
          "\u30AD\u30B9",
          "\u5507"
        ]
      },
      {
        unicode: "\u{1F48C}",
        tags: [
          "\u30CF\u30FC\u30C8",
          "\u5C01\u7B52",
          "\u604B\u6587",
          "\u624B\u7D19"
        ]
      },
      {
        unicode: "\u{1F498}",
        tags: [
          "\u30AD\u30E5\u30FC\u30D4\u30C3\u30C9",
          "\u30CF\u30FC\u30C8",
          "\u77E2"
        ]
      },
      {
        unicode: "\u{1F49D}",
        tags: [
          "\u30CF\u30FC\u30C8",
          "\u30D0\u30EC\u30F3\u30BF\u30A4\u30F3\u30C7\u30FC",
          "\u30EA\u30DC\u30F3"
        ]
      },
      {
        unicode: "\u{1F496}",
        tags: [
          "\u304D\u3089\u304D\u3089",
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F497}",
        tags: [
          "\u3068\u304D\u3081\u304D",
          "\u30C9\u30AD\u30C9\u30AD",
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F493}",
        tags: [
          "\u30C9\u30AD\u30C9\u30AD",
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F49E}",
        tags: [
          "\u304B\u308F\u3044\u3044",
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F495}",
        tags: [
          "\u30CF\u30FC\u30C8",
          "\u30E9\u30D6"
        ]
      },
      {
        unicode: "\u{1F49F}",
        tags: [
          "\u30CF\u30FC\u30C8",
          "\u30CF\u30FC\u30C8\u30C7\u30B3\u30EC\u30FC\u30B7\u30E7\u30F3"
        ]
      },
      {
        unicode: "\u2763\uFE0F",
        tags: [
          "\u3073\u3063\u304F\u308A\u30DE\u30FC\u30AF",
          "\u30A8\u30AF\u30B9\u30AF\u30E9\u30E1\u30FC\u30B7\u30E7\u30F3\u30DE\u30FC\u30AF",
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F494}",
        tags: [
          "\u30CF\u30FC\u30C8",
          "\u5225\u308C\u305F",
          "\u5931\u604B"
        ]
      },
      {
        unicode: "\u2764\uFE0F",
        tags: [
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F9E1}",
        tags: [
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F49B}",
        tags: [
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F49A}",
        tags: [
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F499}",
        tags: [
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F49C}",
        tags: [
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F90E}",
        tags: [
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F5A4}",
        tags: [
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F90D}",
        tags: [
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F4AF}",
        tags: [
          "100",
          "100\u70B9",
          "\u5168\u554F\u6B63\u89E3",
          "\u6E80\u70B9"
        ]
      },
      {
        unicode: "\u{1F4A2}",
        tags: [
          "\u6012\u308A",
          "\uFF03"
        ]
      },
      {
        unicode: "\u{1F4A5}",
        tags: [
          "\u3069\u3093\u3063",
          "\u885D\u6483"
        ]
      },
      {
        unicode: "\u{1F4AB}",
        tags: [
          "\u661F",
          "\u76EE\u304C\u56DE\u308B"
        ]
      },
      {
        unicode: "\u{1F4A6}",
        tags: [
          "\u6C57"
        ]
      },
      {
        unicode: "\u{1F4A8}",
        tags: [
          "\u6025\u3050",
          "\u6025\u3052",
          "\u8D70\u308B"
        ]
      },
      {
        unicode: "\u{1F573}\uFE0F",
        tags: [
          "\u7A74"
        ]
      },
      {
        unicode: "\u{1F4A3}\uFE0F",
        tags: [
          "\u7206\u5F3E"
        ]
      },
      {
        unicode: "\u{1F4AC}",
        tags: [
          "\u30BB\u30EA\u30D5",
          "\u4F1A\u8A71",
          "\u5439\u304D\u51FA\u3057"
        ]
      },
      {
        unicode: "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F",
        tags: [
          "\u5439\u304D\u51FA\u3057",
          "\u76EE",
          "\u76EE\u6483"
        ]
      },
      {
        unicode: "\u{1F5E8}\uFE0F",
        tags: [
          "\u30BB\u30EA\u30D5",
          "\u4F1A\u8A71",
          "\u5439\u304D\u51FA\u3057"
        ]
      },
      {
        unicode: "\u{1F5EF}\uFE0F",
        tags: [
          "\u5439\u304D\u51FA\u3057"
        ]
      },
      {
        unicode: "\u{1F4AD}",
        tags: [
          "\u3082\u304F\u3082\u304F",
          "\u5439\u304D\u51FA\u3057",
          "\u8003\u3048\u4E8B"
        ]
      },
      {
        unicode: "\u{1F4A4}",
        tags: [
          "zzz",
          "\u3044\u3073\u304D",
          "\u5BDD\u308B"
        ]
      }
    ]
  },
  {
    group: 1,
    emojiList: [
      {
        unicode: "\u{1F44B}",
        tags: [
          "\u30D0\u30A4\u30D0\u30A4",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F44B}\u{1F3FB}"
          },
          {
            unicode: "\u{1F44B}\u{1F3FC}"
          },
          {
            unicode: "\u{1F44B}\u{1F3FD}"
          },
          {
            unicode: "\u{1F44B}\u{1F3FE}"
          },
          {
            unicode: "\u{1F44B}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F91A}",
        tags: [
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F91A}\u{1F3FB}"
          },
          {
            unicode: "\u{1F91A}\u{1F3FC}"
          },
          {
            unicode: "\u{1F91A}\u{1F3FD}"
          },
          {
            unicode: "\u{1F91A}\u{1F3FE}"
          },
          {
            unicode: "\u{1F91A}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F590}\uFE0F",
        tags: [
          "\u30D1\u30FC",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F590}\u{1F3FB}"
          },
          {
            unicode: "\u{1F590}\u{1F3FC}"
          },
          {
            unicode: "\u{1F590}\u{1F3FD}"
          },
          {
            unicode: "\u{1F590}\u{1F3FE}"
          },
          {
            unicode: "\u{1F590}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u270B",
        tags: [
          "\u30D1\u30FC",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u270B\u{1F3FB}"
          },
          {
            unicode: "\u270B\u{1F3FC}"
          },
          {
            unicode: "\u270B\u{1F3FD}"
          },
          {
            unicode: "\u270B\u{1F3FE}"
          },
          {
            unicode: "\u270B\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F596}",
        tags: [
          "\u30B9\u30DD\u30C3\u30AF",
          "\u30D0\u30EB\u30AB\u30F3\u4EBA",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F596}\u{1F3FB}"
          },
          {
            unicode: "\u{1F596}\u{1F3FC}"
          },
          {
            unicode: "\u{1F596}\u{1F3FD}"
          },
          {
            unicode: "\u{1F596}\u{1F3FE}"
          },
          {
            unicode: "\u{1F596}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F44C}",
        tags: [
          "ok",
          "ok\u306E\u624B",
          "\u30AA\u30C3\u30B1\u30FC",
          "\u30AA\u30FC\u30B1\u30FC",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F44C}\u{1F3FB}"
          },
          {
            unicode: "\u{1F44C}\u{1F3FC}"
          },
          {
            unicode: "\u{1F44C}\u{1F3FD}"
          },
          {
            unicode: "\u{1F44C}\u{1F3FE}"
          },
          {
            unicode: "\u{1F44C}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F90C}",
        tags: [
          "\u3059\u307C\u3081\u308B",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u624B",
          "\u6307"
        ],
        skins: [
          {
            unicode: "\u{1F90C}\u{1F3FB}"
          },
          {
            unicode: "\u{1F90C}\u{1F3FC}"
          },
          {
            unicode: "\u{1F90C}\u{1F3FD}"
          },
          {
            unicode: "\u{1F90C}\u{1F3FE}"
          },
          {
            unicode: "\u{1F90C}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F90F}",
        tags: [
          "\u3061\u3087\u3063\u3068",
          "\u5C11\u3057\u3060\u3051",
          "\u624B",
          "\u6307"
        ],
        skins: [
          {
            unicode: "\u{1F90F}\u{1F3FB}"
          },
          {
            unicode: "\u{1F90F}\u{1F3FC}"
          },
          {
            unicode: "\u{1F90F}\u{1F3FD}"
          },
          {
            unicode: "\u{1F90F}\u{1F3FE}"
          },
          {
            unicode: "\u{1F90F}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u270C\uFE0F",
        tags: [
          "v\u30B5\u30A4\u30F3",
          "\u30C1\u30E7\u30AD",
          "\u30D4\u30FC\u30B9",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u270C\u{1F3FB}"
          },
          {
            unicode: "\u270C\u{1F3FC}"
          },
          {
            unicode: "\u270C\u{1F3FD}"
          },
          {
            unicode: "\u270C\u{1F3FE}"
          },
          {
            unicode: "\u270C\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F91E}",
        tags: [
          "\u624B",
          "\u6307"
        ],
        skins: [
          {
            unicode: "\u{1F91E}\u{1F3FB}"
          },
          {
            unicode: "\u{1F91E}\u{1F3FC}"
          },
          {
            unicode: "\u{1F91E}\u{1F3FD}"
          },
          {
            unicode: "\u{1F91E}\u{1F3FE}"
          },
          {
            unicode: "\u{1F91E}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F91F}",
        tags: [
          "\u611B\u3057\u3066\u308B",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F91F}\u{1F3FB}"
          },
          {
            unicode: "\u{1F91F}\u{1F3FC}"
          },
          {
            unicode: "\u{1F91F}\u{1F3FD}"
          },
          {
            unicode: "\u{1F91F}\u{1F3FE}"
          },
          {
            unicode: "\u{1F91F}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F918}",
        tags: [
          "\u30AD\u30C4\u30CD",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F918}\u{1F3FB}"
          },
          {
            unicode: "\u{1F918}\u{1F3FC}"
          },
          {
            unicode: "\u{1F918}\u{1F3FD}"
          },
          {
            unicode: "\u{1F918}\u{1F3FE}"
          },
          {
            unicode: "\u{1F918}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F919}",
        tags: [
          "\u624B",
          "\u96FB\u8A71",
          "\u96FB\u8A71\u306E\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC"
        ],
        skins: [
          {
            unicode: "\u{1F919}\u{1F3FB}"
          },
          {
            unicode: "\u{1F919}\u{1F3FC}"
          },
          {
            unicode: "\u{1F919}\u{1F3FD}"
          },
          {
            unicode: "\u{1F919}\u{1F3FE}"
          },
          {
            unicode: "\u{1F919}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F448}\uFE0F",
        tags: [
          "\u5DE6",
          "\u624B",
          "\u6307\u5DEE\u3057"
        ],
        skins: [
          {
            unicode: "\u{1F448}\u{1F3FB}"
          },
          {
            unicode: "\u{1F448}\u{1F3FC}"
          },
          {
            unicode: "\u{1F448}\u{1F3FD}"
          },
          {
            unicode: "\u{1F448}\u{1F3FE}"
          },
          {
            unicode: "\u{1F448}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F449}\uFE0F",
        tags: [
          "\u53F3",
          "\u624B",
          "\u6307\u5DEE\u3057"
        ],
        skins: [
          {
            unicode: "\u{1F449}\u{1F3FB}"
          },
          {
            unicode: "\u{1F449}\u{1F3FC}"
          },
          {
            unicode: "\u{1F449}\u{1F3FD}"
          },
          {
            unicode: "\u{1F449}\u{1F3FE}"
          },
          {
            unicode: "\u{1F449}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F446}\uFE0F",
        tags: [
          "\u4E0A",
          "\u624B",
          "\u6307\u5DEE\u3057"
        ],
        skins: [
          {
            unicode: "\u{1F446}\u{1F3FB}"
          },
          {
            unicode: "\u{1F446}\u{1F3FC}"
          },
          {
            unicode: "\u{1F446}\u{1F3FD}"
          },
          {
            unicode: "\u{1F446}\u{1F3FE}"
          },
          {
            unicode: "\u{1F446}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F595}",
        tags: [
          "\u4E0A",
          "\u4E2D\u6307",
          "\u624B",
          "\u6307\u5DEE\u3057"
        ],
        skins: [
          {
            unicode: "\u{1F595}\u{1F3FB}"
          },
          {
            unicode: "\u{1F595}\u{1F3FC}"
          },
          {
            unicode: "\u{1F595}\u{1F3FD}"
          },
          {
            unicode: "\u{1F595}\u{1F3FE}"
          },
          {
            unicode: "\u{1F595}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F447}\uFE0F",
        tags: [
          "\u4E0B",
          "\u624B",
          "\u6307\u5DEE\u3057"
        ],
        skins: [
          {
            unicode: "\u{1F447}\u{1F3FB}"
          },
          {
            unicode: "\u{1F447}\u{1F3FC}"
          },
          {
            unicode: "\u{1F447}\u{1F3FD}"
          },
          {
            unicode: "\u{1F447}\u{1F3FE}"
          },
          {
            unicode: "\u{1F447}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u261D\uFE0F",
        tags: [
          "\u4E0A",
          "\u624B",
          "\u6307\u5DEE\u3057"
        ],
        skins: [
          {
            unicode: "\u261D\u{1F3FB}"
          },
          {
            unicode: "\u261D\u{1F3FC}"
          },
          {
            unicode: "\u261D\u{1F3FD}"
          },
          {
            unicode: "\u261D\u{1F3FE}"
          },
          {
            unicode: "\u261D\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F44D}\uFE0F",
        tags: [
          "ok",
          "\u30AA\u30C3\u30B1\u30FC",
          "\u30AA\u30FC\u30B1\u30FC",
          "\u30B0\u30C3\u30C9",
          "\u4E0A",
          "\u624B",
          "\u89AA\u6307"
        ],
        skins: [
          {
            unicode: "\u{1F44D}\u{1F3FB}"
          },
          {
            unicode: "\u{1F44D}\u{1F3FC}"
          },
          {
            unicode: "\u{1F44D}\u{1F3FD}"
          },
          {
            unicode: "\u{1F44D}\u{1F3FE}"
          },
          {
            unicode: "\u{1F44D}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F44E}\uFE0F",
        tags: [
          "ng",
          "\u3060\u3081",
          "\u30D6\u30FC\u30A4\u30F3\u30B0",
          "\u30DC\u30C4",
          "\u4E0B",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F44E}\u{1F3FB}"
          },
          {
            unicode: "\u{1F44E}\u{1F3FC}"
          },
          {
            unicode: "\u{1F44E}\u{1F3FD}"
          },
          {
            unicode: "\u{1F44E}\u{1F3FE}"
          },
          {
            unicode: "\u{1F44E}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u270A",
        tags: [
          "\u30B0\u30FC",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u270A\u{1F3FB}"
          },
          {
            unicode: "\u270A\u{1F3FC}"
          },
          {
            unicode: "\u270A\u{1F3FD}"
          },
          {
            unicode: "\u270A\u{1F3FE}"
          },
          {
            unicode: "\u270A\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F44A}",
        tags: [
          "\u3052\u3093\u3053\u3064",
          "\u30D1\u30F3\u30C1",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F44A}\u{1F3FB}"
          },
          {
            unicode: "\u{1F44A}\u{1F3FC}"
          },
          {
            unicode: "\u{1F44A}\u{1F3FD}"
          },
          {
            unicode: "\u{1F44A}\u{1F3FE}"
          },
          {
            unicode: "\u{1F44A}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F91B}",
        tags: [
          "\u3053\u3076\u3057",
          "\u30D1\u30F3\u30C1",
          "\u5DE6",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F91B}\u{1F3FB}"
          },
          {
            unicode: "\u{1F91B}\u{1F3FC}"
          },
          {
            unicode: "\u{1F91B}\u{1F3FD}"
          },
          {
            unicode: "\u{1F91B}\u{1F3FE}"
          },
          {
            unicode: "\u{1F91B}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F91C}",
        tags: [
          "\u3053\u3076\u3057",
          "\u30D1\u30F3\u30C1",
          "\u53F3",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F91C}\u{1F3FB}"
          },
          {
            unicode: "\u{1F91C}\u{1F3FC}"
          },
          {
            unicode: "\u{1F91C}\u{1F3FD}"
          },
          {
            unicode: "\u{1F91C}\u{1F3FE}"
          },
          {
            unicode: "\u{1F91C}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F44F}",
        tags: [
          "\u30D1\u30C1\u30D1\u30C1",
          "\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F44F}\u{1F3FB}"
          },
          {
            unicode: "\u{1F44F}\u{1F3FC}"
          },
          {
            unicode: "\u{1F44F}\u{1F3FD}"
          },
          {
            unicode: "\u{1F44F}\u{1F3FE}"
          },
          {
            unicode: "\u{1F44F}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F64C}",
        tags: [
          "\u4E21\u624B",
          "\u624B",
          "\u624B\u3092\u4E0A\u3052\u308B"
        ],
        skins: [
          {
            unicode: "\u{1F64C}\u{1F3FB}"
          },
          {
            unicode: "\u{1F64C}\u{1F3FC}"
          },
          {
            unicode: "\u{1F64C}\u{1F3FD}"
          },
          {
            unicode: "\u{1F64C}\u{1F3FE}"
          },
          {
            unicode: "\u{1F64C}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F450}",
        tags: [
          "\u304A\u3063\u306F\u30FC",
          "\u624B",
          "\u624B\u306E\u3072\u3089"
        ],
        skins: [
          {
            unicode: "\u{1F450}\u{1F3FB}"
          },
          {
            unicode: "\u{1F450}\u{1F3FC}"
          },
          {
            unicode: "\u{1F450}\u{1F3FD}"
          },
          {
            unicode: "\u{1F450}\u{1F3FE}"
          },
          {
            unicode: "\u{1F450}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F932}",
        tags: [
          "\u4E21\u624B",
          "\u624B",
          "\u7948\u308A"
        ],
        skins: [
          {
            unicode: "\u{1F932}\u{1F3FB}"
          },
          {
            unicode: "\u{1F932}\u{1F3FC}"
          },
          {
            unicode: "\u{1F932}\u{1F3FD}"
          },
          {
            unicode: "\u{1F932}\u{1F3FE}"
          },
          {
            unicode: "\u{1F932}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F91D}",
        tags: [
          "\u3088\u308D\u3057\u304F",
          "\u5408\u610F",
          "\u624B"
        ]
      },
      {
        unicode: "\u{1F64F}",
        tags: [
          "\u304A\u9858\u3044",
          "\u3054\u3081\u3093\u306A\u3055\u3044",
          "\u5408\u638C"
        ],
        skins: [
          {
            unicode: "\u{1F64F}\u{1F3FB}"
          },
          {
            unicode: "\u{1F64F}\u{1F3FC}"
          },
          {
            unicode: "\u{1F64F}\u{1F3FD}"
          },
          {
            unicode: "\u{1F64F}\u{1F3FE}"
          },
          {
            unicode: "\u{1F64F}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u270D\uFE0F",
        tags: [
          "\u624B",
          "\u624B\u3067\u66F8\u304F",
          "\u624B\u66F8\u304D"
        ],
        skins: [
          {
            unicode: "\u270D\u{1F3FB}"
          },
          {
            unicode: "\u270D\u{1F3FC}"
          },
          {
            unicode: "\u270D\u{1F3FD}"
          },
          {
            unicode: "\u270D\u{1F3FE}"
          },
          {
            unicode: "\u270D\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F485}",
        tags: [
          "\u30CD\u30A4\u30EB",
          "\u30DE\u30CB\u30AD\u30E5\u30A2",
          "\u722A"
        ],
        skins: [
          {
            unicode: "\u{1F485}\u{1F3FB}"
          },
          {
            unicode: "\u{1F485}\u{1F3FC}"
          },
          {
            unicode: "\u{1F485}\u{1F3FD}"
          },
          {
            unicode: "\u{1F485}\u{1F3FE}"
          },
          {
            unicode: "\u{1F485}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F933}",
        tags: [
          "\u30B9\u30DE\u30DB",
          "\u81EA\u5206\u64AE\u308A",
          "\u81EA\u64AE\u308A"
        ],
        skins: [
          {
            unicode: "\u{1F933}\u{1F3FB}"
          },
          {
            unicode: "\u{1F933}\u{1F3FC}"
          },
          {
            unicode: "\u{1F933}\u{1F3FD}"
          },
          {
            unicode: "\u{1F933}\u{1F3FE}"
          },
          {
            unicode: "\u{1F933}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F4AA}",
        tags: [
          "\u30E0\u30AD\u30E0\u30AD",
          "\u7B4B\u30C8\u30EC",
          "\u7B4B\u8089"
        ],
        skins: [
          {
            unicode: "\u{1F4AA}\u{1F3FB}"
          },
          {
            unicode: "\u{1F4AA}\u{1F3FC}"
          },
          {
            unicode: "\u{1F4AA}\u{1F3FD}"
          },
          {
            unicode: "\u{1F4AA}\u{1F3FE}"
          },
          {
            unicode: "\u{1F4AA}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9BE}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u4EBA\u5DE5\u88C5\u5177",
          "\u624B",
          "\u8155"
        ]
      },
      {
        unicode: "\u{1F9BF}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u4EBA\u5DE5\u88C5\u5177",
          "\u811A",
          "\u8DB3"
        ]
      },
      {
        unicode: "\u{1F9B5}",
        tags: [
          "\u30AD\u30C3\u30AF",
          "\u8DB3"
        ],
        skins: [
          {
            unicode: "\u{1F9B5}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9B5}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9B5}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9B5}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9B5}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9B6}",
        tags: [
          "\u30AD\u30C3\u30AF",
          "\u30C0\u30F3\u30B9",
          "\u8E0F\u307F\u3064\u3051\u308B"
        ],
        skins: [
          {
            unicode: "\u{1F9B6}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9B6}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9B6}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9B6}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9B6}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F442}\uFE0F",
        tags: [
          "\u304B\u3089\u3060"
        ],
        skins: [
          {
            unicode: "\u{1F442}\u{1F3FB}"
          },
          {
            unicode: "\u{1F442}\u{1F3FC}"
          },
          {
            unicode: "\u{1F442}\u{1F3FD}"
          },
          {
            unicode: "\u{1F442}\u{1F3FE}"
          },
          {
            unicode: "\u{1F442}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9BB}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u8033",
          "\u8074\u899A"
        ],
        skins: [
          {
            unicode: "\u{1F9BB}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9BB}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9BB}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9BB}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9BB}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F443}",
        tags: [
          "\u304B\u3089\u3060"
        ],
        skins: [
          {
            unicode: "\u{1F443}\u{1F3FB}"
          },
          {
            unicode: "\u{1F443}\u{1F3FC}"
          },
          {
            unicode: "\u{1F443}\u{1F3FD}"
          },
          {
            unicode: "\u{1F443}\u{1F3FE}"
          },
          {
            unicode: "\u{1F443}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9E0}",
        tags: [
          "\u77E5\u8B58",
          "\u8133\u307F\u305D",
          "\u982D"
        ]
      },
      {
        unicode: "\u{1FAC0}",
        tags: [
          "\u5FC3\u62CD",
          "\u8108",
          "\u81D3\u5668",
          "\u9F13\u52D5"
        ]
      },
      {
        unicode: "\u{1FAC1}",
        tags: [
          "\u547C\u5438",
          "\u81D3\u5668"
        ]
      },
      {
        unicode: "\u{1F9B7}",
        tags: [
          "\u6B6F\u533B\u8005"
        ]
      },
      {
        unicode: "\u{1F9B4}",
        tags: [
          "\u9AA8\u683C"
        ]
      },
      {
        unicode: "\u{1F440}",
        tags: [
          "\u304B\u3089\u3060",
          "\u4E21\u76EE"
        ]
      },
      {
        unicode: "\u{1F441}\uFE0F",
        tags: [
          "\u4E00\u3064\u76EE",
          "\u76EE"
        ]
      },
      {
        unicode: "\u{1F445}",
        tags: [
          "\u3079\u308D",
          "\u3079\u30FC"
        ]
      },
      {
        unicode: "\u{1F444}",
        tags: [
          "\u30AD\u30B9",
          "\u5507"
        ]
      },
      {
        unicode: "\u{1F476}",
        tags: [
          "\u30D9\u30D3\u30FC",
          "\u8D64\u3061\u3083\u3093",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F476}\u{1F3FB}"
          },
          {
            unicode: "\u{1F476}\u{1F3FC}"
          },
          {
            unicode: "\u{1F476}\u{1F3FD}"
          },
          {
            unicode: "\u{1F476}\u{1F3FE}"
          },
          {
            unicode: "\u{1F476}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9D2}",
        tags: [
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F9D2}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D2}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D2}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D2}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D2}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F466}",
        tags: [
          "\u5B50\u4F9B",
          "\u5C11\u5E74",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F466}\u{1F3FB}"
          },
          {
            unicode: "\u{1F466}\u{1F3FC}"
          },
          {
            unicode: "\u{1F466}\u{1F3FD}"
          },
          {
            unicode: "\u{1F466}\u{1F3FE}"
          },
          {
            unicode: "\u{1F466}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F467}",
        tags: [
          "\u5973",
          "\u5B50\u4F9B",
          "\u5C11\u5973",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F467}\u{1F3FB}"
          },
          {
            unicode: "\u{1F467}\u{1F3FC}"
          },
          {
            unicode: "\u{1F467}\u{1F3FD}"
          },
          {
            unicode: "\u{1F467}\u{1F3FE}"
          },
          {
            unicode: "\u{1F467}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}",
        tags: [
          "\u6210\u4EBA",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F471}",
        tags: [
          "\u30D6\u30ED\u30F3\u30C9",
          "\u4EBA",
          "\u91D1\u9AEA",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F471}\u{1F3FB}"
          },
          {
            unicode: "\u{1F471}\u{1F3FC}"
          },
          {
            unicode: "\u{1F471}\u{1F3FD}"
          },
          {
            unicode: "\u{1F471}\u{1F3FE}"
          },
          {
            unicode: "\u{1F471}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F468}",
        tags: [
          "\u5927\u4EBA",
          "\u7537",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9D4}",
        tags: [
          "\u3042\u3054\u3072\u3052",
          "\u3072\u3052",
          "\u7537",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F9D4}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D4}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D4}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D4}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D4}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F9B0}",
        tags: [
          "\u5927\u4EBA",
          "\u7537",
          "\u7537\u6027",
          "\u8D64\u6BDB",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F9B0}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F9B0}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F9B0}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F9B0}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F9B0}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F9B1}",
        tags: [
          "\u5927\u4EBA",
          "\u5DFB\u304D\u6BDB",
          "\u7537",
          "\u7537\u6027",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F9B1}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F9B1}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F9B1}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F9B1}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F9B1}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F9B3}",
        tags: [
          "\u5927\u4EBA",
          "\u7537",
          "\u7537\u6027",
          "\u767D\u9AEA",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F9B3}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F9B3}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F9B3}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F9B3}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F9B3}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F9B2}",
        tags: [
          "\u306F\u3052\u982D",
          "\u5927\u4EBA",
          "\u7537",
          "\u7537\u6027",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F9B2}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F9B2}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F9B2}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F9B2}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F9B2}"
          }
        ]
      },
      {
        unicode: "\u{1F469}",
        tags: [
          "\u5927\u4EBA",
          "\u5973",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F9B0}",
        tags: [
          "\u5927\u4EBA",
          "\u5973",
          "\u5973\u6027",
          "\u8D64\u6BDB",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F9B0}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F9B0}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F9B0}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F9B0}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F9B0}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F9B0}",
        tags: [
          "\u5927\u4EBA",
          "\u6210\u4EBA",
          "\u8D64\u6BDB",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9B0}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B0}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9B0}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9B0}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9B0}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F9B1}",
        tags: [
          "\u5927\u4EBA",
          "\u5973",
          "\u5973\u6027",
          "\u5DFB\u304D\u6BDB",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F9B1}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F9B1}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F9B1}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F9B1}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F9B1}",
        tags: [
          "\u5927\u4EBA",
          "\u5DFB\u304D\u6BDB",
          "\u6210\u4EBA",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9B1}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B1}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9B1}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9B1}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9B1}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F9B3}",
        tags: [
          "\u5927\u4EBA",
          "\u5973",
          "\u5973\u6027",
          "\u767D\u9AEA",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F9B3}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F9B3}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F9B3}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F9B3}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F9B3}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F9B3}",
        tags: [
          "\u5927\u4EBA",
          "\u6210\u4EBA",
          "\u767D\u9AEA",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9B3}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B3}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9B3}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9B3}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9B3}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F9B2}",
        tags: [
          "\u306F\u3052\u982D",
          "\u5927\u4EBA",
          "\u5973",
          "\u5973\u6027",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F9B2}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F9B2}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F9B2}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F9B2}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F9B2}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F9B2}",
        tags: [
          "\u306F\u3052\u982D",
          "\u5927\u4EBA",
          "\u6210\u4EBA",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9B2}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9B2}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9B2}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9B2}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9B2}"
          }
        ]
      },
      {
        unicode: "\u{1F471}\u200D\u2640\uFE0F",
        tags: [
          "\u30D6\u30ED\u30F3\u30C9",
          "\u5973",
          "\u5973\u6027",
          "\u91D1\u9AEA"
        ],
        skins: [
          {
            unicode: "\u{1F471}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F471}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F471}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F471}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F471}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F471}\u200D\u2642\uFE0F",
        tags: [
          "\u30D6\u30ED\u30F3\u30C9",
          "\u7537",
          "\u7537\u6027",
          "\u91D1\u9AEA"
        ],
        skins: [
          {
            unicode: "\u{1F471}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F471}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F471}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F471}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F471}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D3}",
        tags: [
          "\u8001\u4EBA",
          "\u9854",
          "\u9AD8\u9F62\u8005"
        ],
        skins: [
          {
            unicode: "\u{1F9D3}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D3}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D3}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D3}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D3}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F474}",
        tags: [
          "\u304A\u5E74\u5BC4\u308A",
          "\u7537\u6027",
          "\u8001\u4EBA",
          "\u9854",
          "\u9AD8\u9F62\u8005"
        ],
        skins: [
          {
            unicode: "\u{1F474}\u{1F3FB}"
          },
          {
            unicode: "\u{1F474}\u{1F3FC}"
          },
          {
            unicode: "\u{1F474}\u{1F3FD}"
          },
          {
            unicode: "\u{1F474}\u{1F3FE}"
          },
          {
            unicode: "\u{1F474}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F475}",
        tags: [
          "\u304A\u5E74\u5BC4\u308A",
          "\u5973\u6027",
          "\u8001\u4EBA",
          "\u9854",
          "\u9AD8\u9F62\u8005"
        ],
        skins: [
          {
            unicode: "\u{1F475}\u{1F3FB}"
          },
          {
            unicode: "\u{1F475}\u{1F3FC}"
          },
          {
            unicode: "\u{1F475}\u{1F3FD}"
          },
          {
            unicode: "\u{1F475}\u{1F3FE}"
          },
          {
            unicode: "\u{1F475}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F64D}",
        tags: [
          "\u3057\u304B\u3081\u3063\u9762",
          "\u3057\u304B\u3081\u9762",
          "\u3057\u304B\u3081\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F64D}\u{1F3FB}"
          },
          {
            unicode: "\u{1F64D}\u{1F3FC}"
          },
          {
            unicode: "\u{1F64D}\u{1F3FD}"
          },
          {
            unicode: "\u{1F64D}\u{1F3FE}"
          },
          {
            unicode: "\u{1F64D}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F64D}\u200D\u2642\uFE0F",
        tags: [
          "\u3057\u304B\u3081\u3063\u9762",
          "\u3057\u304B\u3081\u9854",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F64D}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F64D}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F64D}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F64D}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F64D}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F64D}\u200D\u2640\uFE0F",
        tags: [
          "\u3057\u304B\u3081\u3063\u9762",
          "\u3057\u304B\u3081\u9854",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F64D}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F64D}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F64D}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F64D}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F64D}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F64E}",
        tags: [
          "\u3077\u3093\u3077\u3093",
          "\u4E0D\u6A5F\u5ACC",
          "\u4EBA"
        ],
        skins: [
          {
            unicode: "\u{1F64E}\u{1F3FB}"
          },
          {
            unicode: "\u{1F64E}\u{1F3FC}"
          },
          {
            unicode: "\u{1F64E}\u{1F3FD}"
          },
          {
            unicode: "\u{1F64E}\u{1F3FE}"
          },
          {
            unicode: "\u{1F64E}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F64E}\u200D\u2642\uFE0F",
        tags: [
          "\u3077\u3093\u3077\u3093",
          "\u4E0D\u6A5F\u5ACC",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F64E}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F64E}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F64E}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F64E}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F64E}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F64E}\u200D\u2640\uFE0F",
        tags: [
          "\u3077\u3093\u3077\u3093",
          "\u4E0D\u6A5F\u5ACC",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F64E}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F64E}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F64E}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F64E}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F64E}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F645}",
        tags: [
          "ng",
          "\u3060\u3081",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u30D0\u30C4",
          "\u4EBA"
        ],
        skins: [
          {
            unicode: "\u{1F645}\u{1F3FB}"
          },
          {
            unicode: "\u{1F645}\u{1F3FC}"
          },
          {
            unicode: "\u{1F645}\u{1F3FD}"
          },
          {
            unicode: "\u{1F645}\u{1F3FE}"
          },
          {
            unicode: "\u{1F645}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F645}\u200D\u2642\uFE0F",
        tags: [
          "ng",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u30D0\u30C4",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F645}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F645}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F645}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F645}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F645}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F645}\u200D\u2640\uFE0F",
        tags: [
          "ng",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u30D0\u30C4",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F645}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F645}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F645}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F645}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F645}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F646}",
        tags: [
          "ok",
          "ok\u306E\u30DD\u30FC\u30BA\u3092\u3059\u308B\u4EBA",
          "\u30AA\u30FC\u30B1\u30FC",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u4E38",
          "\u4EBA"
        ],
        skins: [
          {
            unicode: "\u{1F646}\u{1F3FB}"
          },
          {
            unicode: "\u{1F646}\u{1F3FC}"
          },
          {
            unicode: "\u{1F646}\u{1F3FD}"
          },
          {
            unicode: "\u{1F646}\u{1F3FE}"
          },
          {
            unicode: "\u{1F646}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F646}\u200D\u2642\uFE0F",
        tags: [
          "ok\u306E\u30DD\u30FC\u30BA\u3092\u3059\u308B\u7537",
          "\u30AA\u30C3\u30B1\u30FC",
          "\u30AA\u30FC\u30B1\u30FC",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u4E38",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F646}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F646}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F646}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F646}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F646}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F646}\u200D\u2640\uFE0F",
        tags: [
          "ok\u306E\u30DD\u30FC\u30BA\u3092\u3059\u308B\u5973",
          "\u30AA\u30C3\u30B1\u30FC",
          "\u30AA\u30FC\u30B1\u30FC",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u4E38",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F646}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F646}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F646}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F646}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F646}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F481}",
        tags: [
          "\u53D7\u4ED8",
          "\u53D7\u4ED8\u5B22",
          "\u6848\u5185",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F481}\u{1F3FB}"
          },
          {
            unicode: "\u{1F481}\u{1F3FC}"
          },
          {
            unicode: "\u{1F481}\u{1F3FD}"
          },
          {
            unicode: "\u{1F481}\u{1F3FE}"
          },
          {
            unicode: "\u{1F481}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F481}\u200D\u2642\uFE0F",
        tags: [
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u6848\u5185",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F481}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F481}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F481}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F481}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F481}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F481}\u200D\u2640\uFE0F",
        tags: [
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u5973",
          "\u5973\u6027",
          "\u6848\u5185"
        ],
        skins: [
          {
            unicode: "\u{1F481}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F481}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F481}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F481}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F481}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F64B}",
        tags: [
          "\u4EBA",
          "\u624B\u3092\u6319\u3052\u308B",
          "\u6319\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F64B}\u{1F3FB}"
          },
          {
            unicode: "\u{1F64B}\u{1F3FC}"
          },
          {
            unicode: "\u{1F64B}\u{1F3FD}"
          },
          {
            unicode: "\u{1F64B}\u{1F3FE}"
          },
          {
            unicode: "\u{1F64B}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F64B}\u200D\u2642\uFE0F",
        tags: [
          "\u624B\u3092\u6319\u3052\u308B",
          "\u6319\u624B",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F64B}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F64B}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F64B}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F64B}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F64B}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F64B}\u200D\u2640\uFE0F",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u624B\u3092\u6319\u3052\u308B",
          "\u6319\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F64B}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F64B}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F64B}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F64B}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F64B}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9CF}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u4EBA",
          "\u805E\u3053\u3048\u306A\u3044",
          "\u8074\u899A",
          "\u969C\u304C\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F9CF}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9CF}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9CF}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9CF}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9CF}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9CF}\u200D\u2642\uFE0F",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u7537\u6027",
          "\u8074\u899A",
          "\u969C\u304C\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F9CF}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9CF}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9CF}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9CF}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9CF}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9CF}\u200D\u2640\uFE0F",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u5973\u6027",
          "\u8074\u899A",
          "\u969C\u304C\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F9CF}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9CF}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9CF}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9CF}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9CF}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F647}",
        tags: [
          "\u304A\u3058\u304E",
          "\u3054\u3081\u3093\u306A\u3055\u3044",
          "\u571F\u4E0B\u5EA7"
        ],
        skins: [
          {
            unicode: "\u{1F647}\u{1F3FB}"
          },
          {
            unicode: "\u{1F647}\u{1F3FC}"
          },
          {
            unicode: "\u{1F647}\u{1F3FD}"
          },
          {
            unicode: "\u{1F647}\u{1F3FE}"
          },
          {
            unicode: "\u{1F647}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F647}\u200D\u2642\uFE0F",
        tags: [
          "\u304A\u3058\u304E",
          "\u3054\u3081\u3093\u306A\u3055\u3044",
          "\u571F\u4E0B\u5EA7",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F647}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F647}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F647}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F647}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F647}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F647}\u200D\u2640\uFE0F",
        tags: [
          "\u304A\u3058\u304E",
          "\u3054\u3081\u3093\u306A\u3055\u3044",
          "\u571F\u4E0B\u5EA7",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F647}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F647}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F647}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F647}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F647}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F926}",
        tags: [
          "\u3042\u3061\u3083\u30FC",
          "\u3072\u305F\u3044\u306B\u624B",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC"
        ],
        skins: [
          {
            unicode: "\u{1F926}\u{1F3FB}"
          },
          {
            unicode: "\u{1F926}\u{1F3FC}"
          },
          {
            unicode: "\u{1F926}\u{1F3FD}"
          },
          {
            unicode: "\u{1F926}\u{1F3FE}"
          },
          {
            unicode: "\u{1F926}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F926}\u200D\u2642\uFE0F",
        tags: [
          "\u3042\u3061\u3083\u30FC",
          "\u3072\u305F\u3044\u306B\u624B",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F926}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F926}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F926}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F926}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F926}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F926}\u200D\u2640\uFE0F",
        tags: [
          "\u3042\u3061\u3083\u30FC",
          "\u3072\u305F\u3044\u306B\u624B",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F926}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F926}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F926}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F926}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F926}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F937}",
        tags: [
          "\u304A\u624B\u4E0A\u3052",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC"
        ],
        skins: [
          {
            unicode: "\u{1F937}\u{1F3FB}"
          },
          {
            unicode: "\u{1F937}\u{1F3FC}"
          },
          {
            unicode: "\u{1F937}\u{1F3FD}"
          },
          {
            unicode: "\u{1F937}\u{1F3FE}"
          },
          {
            unicode: "\u{1F937}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F937}\u200D\u2642\uFE0F",
        tags: [
          "\u304A\u624B\u4E0A\u3052",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F937}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F937}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F937}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F937}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F937}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F937}\u200D\u2640\uFE0F",
        tags: [
          "\u304A\u624B\u4E0A\u3052",
          "\u30B8\u30A7\u30B9\u30C1\u30E3\u30FC",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F937}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F937}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F937}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F937}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F937}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u2695\uFE0F",
        tags: [
          "\u30BB\u30E9\u30D4\u30B9\u30C8",
          "\u533B\u5E2B"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u2695\uFE0F"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u2695\uFE0F"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u2695\uFE0F"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u2695\uFE0F"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u2695\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u2695\uFE0F",
        tags: [
          "\u533B\u5E2B",
          "\u533B\u8005",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u2695\uFE0F"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u2695\uFE0F"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u2695\uFE0F"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u2695\uFE0F"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u2695\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u2695\uFE0F",
        tags: [
          "\u533B\u5E2B",
          "\u533B\u8005",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u2695\uFE0F"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u2695\uFE0F"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u2695\uFE0F"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u2695\uFE0F"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u2695\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F393}",
        tags: [
          "\u5352\u696D",
          "\u89D2\u5E3D"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F393}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F393}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F393}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F393}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F393}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F393}",
        tags: [
          "\u5352\u696D",
          "\u5B66\u751F",
          "\u7537",
          "\u7537\u6027",
          "\u89D2\u5E3D"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F393}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F393}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F393}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F393}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F393}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F393}",
        tags: [
          "\u5352\u696D",
          "\u5973",
          "\u5973\u6027",
          "\u5B66\u751F",
          "\u89D2\u5E3D"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F393}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F393}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F393}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F393}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F393}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F3EB}",
        tags: [
          "\u5148\u751F",
          "\u62C5\u4EFB",
          "\u6559\u6388",
          "\u8B1B\u5E2B"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F3EB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F3EB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F3EB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F3EB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F3EB}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F3EB}",
        tags: [
          "\u5148\u751F",
          "\u6559\u5E2B",
          "\u6559\u6388",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F3EB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F3EB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F3EB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F3EB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F3EB}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F3EB}",
        tags: [
          "\u5148\u751F",
          "\u5973",
          "\u5973\u6027",
          "\u6559\u5E2B",
          "\u6559\u6388"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F3EB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F3EB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F3EB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F3EB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F3EB}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u2696\uFE0F",
        tags: [
          "\u88C1\u5224"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u2696\uFE0F"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u2696\uFE0F"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u2696\uFE0F"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u2696\uFE0F"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u2696\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u2696\uFE0F",
        tags: [
          "\u7537",
          "\u7537\u6027",
          "\u88C1\u5224",
          "\u88C1\u5224\u5B98"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u2696\uFE0F"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u2696\uFE0F"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u2696\uFE0F"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u2696\uFE0F"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u2696\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u2696\uFE0F",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u88C1\u5224",
          "\u88C1\u5224\u5B98"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u2696\uFE0F"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u2696\uFE0F"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u2696\uFE0F"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u2696\uFE0F"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u2696\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F33E}",
        tags: [
          "\u30AC\u30FC\u30C7\u30CA\u30FC",
          "\u8FB2\u5834\u4E3B",
          "\u8FB2\u696D"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F33E}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F33E}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F33E}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F33E}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F33E}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F33E}",
        tags: [
          "\u7537",
          "\u7537\u6027",
          "\u8FB2\u592B",
          "\u8FB2\u5BB6"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F33E}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F33E}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F33E}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F33E}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F33E}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F33E}",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u8FB2\u5BB6"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F33E}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F33E}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F33E}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F33E}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F33E}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F373}",
        tags: [
          "\u30B7\u30A7\u30D5",
          "\u6599\u7406"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F373}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F373}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F373}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F373}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F373}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F373}",
        tags: [
          "\u30B3\u30C3\u30AF",
          "\u30B7\u30A7\u30D5",
          "\u6599\u7406",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F373}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F373}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F373}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F373}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F373}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F373}",
        tags: [
          "\u30B3\u30C3\u30AF",
          "\u30B7\u30A7\u30D5",
          "\u5973",
          "\u5973\u6027",
          "\u6599\u7406"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F373}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F373}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F373}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F373}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F373}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F527}",
        tags: [
          "\u30B9\u30D1\u30CA",
          "\u30E1\u30AB\u30CB\u30C3\u30AF",
          "\u4F5C\u696D\u54E1",
          "\u5DE5\u4F5C"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F527}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F527}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F527}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F527}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F527}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F527}",
        tags: [
          "\u30B9\u30D1\u30CA",
          "\u30E1\u30AB\u30CB\u30C3\u30AF",
          "\u5DE5\u4F5C",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F527}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F527}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F527}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F527}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F527}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F527}",
        tags: [
          "\u30B9\u30D1\u30CA",
          "\u30E1\u30AB\u30CB\u30C3\u30AF",
          "\u5973",
          "\u5973\u6027",
          "\u5DE5\u4F5C"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F527}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F527}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F527}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F527}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F527}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F3ED}",
        tags: [
          "\u30E2\u30CE\u3065\u304F\u308A",
          "\u5DE5\u54E1",
          "\u5DE5\u5834"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F3ED}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F3ED}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F3ED}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F3ED}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F3ED}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F3ED}",
        tags: [
          "\u6EB6\u63A5",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F3ED}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F3ED}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F3ED}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F3ED}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F3ED}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F3ED}",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u6EB6\u63A5"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F3ED}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F3ED}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F3ED}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F3ED}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F3ED}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F4BC}",
        tags: [
          "\u30B5\u30E9\u30EA\u30FC\u30DE\u30F3",
          "\u30D3\u30B8\u30CD\u30B9\u30D1\u30FC\u30BD\u30F3"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F4BC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F4BC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F4BC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F4BC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F4BC}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F4BC}",
        tags: [
          "\u30B5\u30E9\u30EA\u30FC\u30DE\u30F3",
          "\u30D3\u30B8\u30CD\u30B9\u30D1\u30FC\u30BD\u30F3",
          "\u30D3\u30B8\u30CD\u30B9\u30DE\u30F3",
          "\u4F1A\u793E\u54E1",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F4BC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F4BC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F4BC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F4BC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F4BC}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F4BC}",
        tags: [
          "ol",
          "\u30B5\u30E9\u30EA\u30FC\u30DE\u30F3",
          "\u30D3\u30B8\u30CD\u30B9\u30D1\u30FC\u30BD\u30F3",
          "\u4F1A\u793E\u54E1",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F4BC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F4BC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F4BC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F4BC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F4BC}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F52C}",
        tags: [
          "\u5316\u5B66\u8005",
          "\u7269\u7406\u5B66\u8005",
          "\u751F\u7269\u5B66\u8005"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F52C}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F52C}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F52C}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F52C}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F52C}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F52C}",
        tags: [
          "\u7537",
          "\u7537\u6027",
          "\u79D1\u5B66\u8005"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F52C}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F52C}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F52C}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F52C}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F52C}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F52C}",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u79D1\u5B66\u8005"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F52C}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F52C}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F52C}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F52C}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F52C}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F4BB}",
        tags: [
          "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF",
          "\u30C7\u30D9\u30ED\u30C3\u30D1",
          "\u30D1\u30BD\u30B3\u30F3",
          "\u30D7\u30ED\u30B0\u30E9\u30DE"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F4BB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F4BB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F4BB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F4BB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F4BB}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F4BB}",
        tags: [
          "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF",
          "\u30C7\u30D9\u30ED\u30C3\u30D1",
          "\u30D1\u30BD\u30B3\u30F3",
          "\u30D7\u30ED\u30B0\u30E9\u30DE",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F4BB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F4BB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F4BB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F4BB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F4BB}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F4BB}",
        tags: [
          "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF",
          "\u30C7\u30D9\u30ED\u30C3\u30D1",
          "\u30D1\u30BD\u30B3\u30F3",
          "\u30D7\u30ED\u30B0\u30E9\u30DE",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F4BB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F4BB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F4BB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F4BB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F4BB}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F3A4}",
        tags: [
          "\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8",
          "\u30B7\u30F3\u30AC\u30FC",
          "\u30B9\u30BF\u30FC",
          "\u30ED\u30C3\u30AB\u30FC"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F3A4}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F3A4}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F3A4}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F3A4}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F3A4}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F3A4}",
        tags: [
          "\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8",
          "\u30B7\u30F3\u30AC\u30FC",
          "\u6B4C\u624B",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F3A4}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F3A4}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F3A4}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F3A4}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F3A4}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F3A4}",
        tags: [
          "\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8",
          "\u30B7\u30F3\u30AC\u30FC",
          "\u5973",
          "\u5973\u6027",
          "\u6B4C\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F3A4}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F3A4}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F3A4}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F3A4}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F3A4}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F3A8}",
        tags: [
          "\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8",
          "\u753B\u5BB6",
          "\u7D75\u63CF\u304D"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F3A8}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F3A8}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F3A8}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F3A8}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F3A8}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F3A8}",
        tags: [
          "\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8",
          "\u7537",
          "\u7537\u6027",
          "\u753B\u5BB6",
          "\u82B8\u8853\u5BB6"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F3A8}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F3A8}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F3A8}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F3A8}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F3A8}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F3A8}",
        tags: [
          "\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8",
          "\u5973",
          "\u5973\u6027",
          "\u753B\u5BB6",
          "\u82B8\u8853\u5BB6"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F3A8}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F3A8}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F3A8}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F3A8}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F3A8}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u2708\uFE0F",
        tags: [
          "\u64CD\u7E26\u58EB",
          "\u6A5F\u9577"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u2708\uFE0F"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u2708\uFE0F"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u2708\uFE0F"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u2708\uFE0F"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u2708\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u2708\uFE0F",
        tags: [
          "\u64CD\u7E26\u58EB",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u2708\uFE0F"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u2708\uFE0F"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u2708\uFE0F"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u2708\uFE0F"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u2708\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u2708\uFE0F",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u64CD\u7E26\u58EB"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u2708\uFE0F"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u2708\uFE0F"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u2708\uFE0F"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u2708\uFE0F"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u2708\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F680}",
        tags: [
          "\u30ED\u30B1\u30C3\u30C8"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F680}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F680}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F680}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F680}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F680}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F680}",
        tags: [
          "\u5B87\u5B99\u98DB\u884C\u58EB",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F680}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F680}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F680}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F680}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F680}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F680}",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u5B87\u5B99\u98DB\u884C\u58EB"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F680}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F680}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F680}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F680}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F680}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F692}",
        tags: [
          "\u30EC\u30B9\u30AD\u30E5\u30FC",
          "\u6551\u52A9\u968A"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F692}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F692}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F692}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F692}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F692}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F692}",
        tags: [
          "\u6D88\u9632\u58EB",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F692}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F692}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F692}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F692}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F692}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F692}",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u6D88\u9632\u58EB"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F692}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F692}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F692}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F692}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F692}"
          }
        ]
      },
      {
        unicode: "\u{1F46E}",
        tags: [
          "\u304A\u5DE1\u308A\u3055\u3093",
          "\u8B66\u5B98",
          "\u8B66\u5BDF",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F46E}\u{1F3FB}"
          },
          {
            unicode: "\u{1F46E}\u{1F3FC}"
          },
          {
            unicode: "\u{1F46E}\u{1F3FD}"
          },
          {
            unicode: "\u{1F46E}\u{1F3FE}"
          },
          {
            unicode: "\u{1F46E}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F46E}\u200D\u2642\uFE0F",
        tags: [
          "\u304A\u5DE1\u308A\u3055\u3093",
          "\u7537\u6027",
          "\u8B66\u5B98",
          "\u8B66\u5BDF",
          "\u8B66\u5BDF\u5B98"
        ],
        skins: [
          {
            unicode: "\u{1F46E}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F46E}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F46E}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F46E}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F46E}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F46E}\u200D\u2640\uFE0F",
        tags: [
          "\u304A\u5DE1\u308A\u3055\u3093",
          "\u5973\u6027",
          "\u8B66\u5B98",
          "\u8B66\u5BDF",
          "\u8B66\u5BDF\u5B98"
        ],
        skins: [
          {
            unicode: "\u{1F46E}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F46E}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F46E}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F46E}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F46E}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F575}\uFE0F",
        tags: [
          "\u30B9\u30D1\u30A4",
          "\u866B\u3081\u304C\u306D"
        ],
        skins: [
          {
            unicode: "\u{1F575}\u{1F3FB}"
          },
          {
            unicode: "\u{1F575}\u{1F3FC}"
          },
          {
            unicode: "\u{1F575}\u{1F3FD}"
          },
          {
            unicode: "\u{1F575}\u{1F3FE}"
          },
          {
            unicode: "\u{1F575}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F575}\uFE0F\u200D\u2642\uFE0F",
        tags: [
          "\u63A2\u5075",
          "\u7537",
          "\u7537\u6027",
          "\u866B\u3081\u304C\u306D"
        ],
        skins: [
          {
            unicode: "\u{1F575}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F575}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F575}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F575}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F575}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F575}\uFE0F\u200D\u2640\uFE0F",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u63A2\u5075",
          "\u866B\u3081\u304C\u306D"
        ],
        skins: [
          {
            unicode: "\u{1F575}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F575}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F575}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F575}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F575}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F482}",
        tags: [
          "\u5B88\u885B",
          "\u8B66\u5099",
          "\u9580\u756A"
        ],
        skins: [
          {
            unicode: "\u{1F482}\u{1F3FB}"
          },
          {
            unicode: "\u{1F482}\u{1F3FC}"
          },
          {
            unicode: "\u{1F482}\u{1F3FD}"
          },
          {
            unicode: "\u{1F482}\u{1F3FE}"
          },
          {
            unicode: "\u{1F482}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F482}\u200D\u2642\uFE0F",
        tags: [
          "\u5B88\u885B",
          "\u7537\u6027",
          "\u885B\u5175",
          "\u8B66\u5099",
          "\u9580\u756A"
        ],
        skins: [
          {
            unicode: "\u{1F482}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F482}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F482}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F482}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F482}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F482}\u200D\u2640\uFE0F",
        tags: [
          "\u5973\u6027",
          "\u5B88\u885B",
          "\u885B\u5175",
          "\u8B66\u5099",
          "\u9580\u756A"
        ],
        skins: [
          {
            unicode: "\u{1F482}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F482}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F482}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F482}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F482}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F977}",
        tags: [
          "\u30B9\u30D1\u30A4",
          "\u5FCD\u3073",
          "\u5FCD\u8853",
          "\u8349\u306E\u8005",
          "\u96A0\u5BC6"
        ],
        skins: [
          {
            unicode: "\u{1F977}\u{1F3FB}"
          },
          {
            unicode: "\u{1F977}\u{1F3FC}"
          },
          {
            unicode: "\u{1F977}\u{1F3FD}"
          },
          {
            unicode: "\u{1F977}\u{1F3FE}"
          },
          {
            unicode: "\u{1F977}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F477}",
        tags: [
          "\u304B\u306A\u3065\u3061",
          "\u30CF\u30F3\u30DE\u30FC",
          "\u30D8\u30EB\u30E1\u30C3\u30C8",
          "\u5DE5\u4E8B"
        ],
        skins: [
          {
            unicode: "\u{1F477}\u{1F3FB}"
          },
          {
            unicode: "\u{1F477}\u{1F3FC}"
          },
          {
            unicode: "\u{1F477}\u{1F3FD}"
          },
          {
            unicode: "\u{1F477}\u{1F3FE}"
          },
          {
            unicode: "\u{1F477}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F477}\u200D\u2642\uFE0F",
        tags: [
          "\u30CF\u30F3\u30DE\u30FC",
          "\u30D8\u30EB\u30E1\u30C3\u30C8",
          "\u5DE5\u4E8B",
          "\u5EFA\u8A2D\u4F5C\u696D\u54E1",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F477}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F477}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F477}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F477}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F477}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F477}\u200D\u2640\uFE0F",
        tags: [
          "\u30CF\u30F3\u30DE\u30FC",
          "\u30D8\u30EB\u30E1\u30C3\u30C8",
          "\u5973\u6027",
          "\u5DE5\u4E8B",
          "\u5EFA\u8A2D\u4F5C\u696D\u54E1"
        ],
        skins: [
          {
            unicode: "\u{1F477}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F477}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F477}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F477}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F477}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F934}",
        tags: [
          "\u738B\u5B50",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F934}\u{1F3FB}"
          },
          {
            unicode: "\u{1F934}\u{1F3FC}"
          },
          {
            unicode: "\u{1F934}\u{1F3FD}"
          },
          {
            unicode: "\u{1F934}\u{1F3FE}"
          },
          {
            unicode: "\u{1F934}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F478}",
        tags: [
          "\u304A\u59EB\u3055\u307E",
          "\u5973",
          "\u5973\u6027",
          "\u738B\u5973"
        ],
        skins: [
          {
            unicode: "\u{1F478}\u{1F3FB}"
          },
          {
            unicode: "\u{1F478}\u{1F3FC}"
          },
          {
            unicode: "\u{1F478}\u{1F3FD}"
          },
          {
            unicode: "\u{1F478}\u{1F3FE}"
          },
          {
            unicode: "\u{1F478}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F473}",
        tags: [
          "\u30BF\u30FC\u30D0\u30F3"
        ],
        skins: [
          {
            unicode: "\u{1F473}\u{1F3FB}"
          },
          {
            unicode: "\u{1F473}\u{1F3FC}"
          },
          {
            unicode: "\u{1F473}\u{1F3FD}"
          },
          {
            unicode: "\u{1F473}\u{1F3FE}"
          },
          {
            unicode: "\u{1F473}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F473}\u200D\u2642\uFE0F",
        tags: [
          "\u30BF\u30FC\u30D0\u30F3",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F473}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F473}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F473}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F473}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F473}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F473}\u200D\u2640\uFE0F",
        tags: [
          "\u30BF\u30FC\u30D0\u30F3",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F473}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F473}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F473}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F473}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F473}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F472}",
        tags: [
          "\u304A\u308F\u3093\u5E3D",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F472}\u{1F3FB}"
          },
          {
            unicode: "\u{1F472}\u{1F3FC}"
          },
          {
            unicode: "\u{1F472}\u{1F3FD}"
          },
          {
            unicode: "\u{1F472}\u{1F3FE}"
          },
          {
            unicode: "\u{1F472}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9D5}",
        tags: [
          "\u30B9\u30AB\u30FC\u30D5",
          "\u30D2\u30B8\u30E3\u30D6",
          "\u30D9\u30FC\u30EB",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F9D5}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D5}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D5}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D5}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D5}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F935}",
        tags: [
          "\u30BF\u30AD\u30B7\u30FC\u30C9",
          "\u7537",
          "\u7537\u6027",
          "\u7D50\u5A5A",
          "\u82B1\u5A7F"
        ],
        skins: [
          {
            unicode: "\u{1F935}\u{1F3FB}"
          },
          {
            unicode: "\u{1F935}\u{1F3FC}"
          },
          {
            unicode: "\u{1F935}\u{1F3FD}"
          },
          {
            unicode: "\u{1F935}\u{1F3FE}"
          },
          {
            unicode: "\u{1F935}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F935}\u200D\u2642\uFE0F",
        tags: [
          "\u30BF\u30AD\u30B7\u30FC\u30C9",
          "\u30BF\u30AD\u30B7\u30FC\u30C9\u306E\u7537",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F935}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F935}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F935}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F935}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F935}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F935}\u200D\u2640\uFE0F",
        tags: [
          "\u30BF\u30AD\u30B7\u30FC\u30C9",
          "\u30BF\u30AD\u30B7\u30FC\u30C9\u306E\u5973",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F935}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F935}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F935}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F935}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F935}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F470}",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u7D50\u5A5A",
          "\u82B1\u5AC1",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F470}\u{1F3FB}"
          },
          {
            unicode: "\u{1F470}\u{1F3FC}"
          },
          {
            unicode: "\u{1F470}\u{1F3FD}"
          },
          {
            unicode: "\u{1F470}\u{1F3FE}"
          },
          {
            unicode: "\u{1F470}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F470}\u200D\u2642\uFE0F",
        tags: [
          "\u30D9\u30FC\u30EB",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F470}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F470}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F470}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F470}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F470}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F470}\u200D\u2640\uFE0F",
        tags: [
          "\u30D9\u30FC\u30EB",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F470}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F470}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F470}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F470}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F470}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F930}",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u598A\u5A20"
        ],
        skins: [
          {
            unicode: "\u{1F930}\u{1F3FB}"
          },
          {
            unicode: "\u{1F930}\u{1F3FC}"
          },
          {
            unicode: "\u{1F930}\u{1F3FD}"
          },
          {
            unicode: "\u{1F930}\u{1F3FE}"
          },
          {
            unicode: "\u{1F930}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F931}",
        tags: [
          "\u30DF\u30EB\u30AF",
          "\u5973",
          "\u5973\u6027",
          "\u8D64\u3061\u3083\u3093"
        ],
        skins: [
          {
            unicode: "\u{1F931}\u{1F3FB}"
          },
          {
            unicode: "\u{1F931}\u{1F3FC}"
          },
          {
            unicode: "\u{1F931}\u{1F3FD}"
          },
          {
            unicode: "\u{1F931}\u{1F3FE}"
          },
          {
            unicode: "\u{1F931}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F37C}",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u6388\u4E73",
          "\u8D64\u3061\u3083\u3093"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F37C}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F37C}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F37C}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F37C}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F37C}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F37C}",
        tags: [
          "\u6388\u4E73",
          "\u7537",
          "\u7537\u6027",
          "\u8D64\u3061\u3083\u3093"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F37C}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F37C}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F37C}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F37C}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F37C}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F37C}",
        tags: [
          "\u4EBA",
          "\u6388\u4E73",
          "\u8D64\u3061\u3083\u3093"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F37C}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F37C}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F37C}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F37C}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F37C}"
          }
        ]
      },
      {
        unicode: "\u{1F47C}",
        tags: [
          "\u30A8\u30F3\u30B8\u30A7\u30EB",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F47C}\u{1F3FB}"
          },
          {
            unicode: "\u{1F47C}\u{1F3FC}"
          },
          {
            unicode: "\u{1F47C}\u{1F3FD}"
          },
          {
            unicode: "\u{1F47C}\u{1F3FE}"
          },
          {
            unicode: "\u{1F47C}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F385}",
        tags: [
          "\u30AF\u30EA\u30B9\u30DE\u30B9",
          "\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9",
          "\u9854"
        ],
        skins: [
          {
            unicode: "\u{1F385}\u{1F3FB}"
          },
          {
            unicode: "\u{1F385}\u{1F3FC}"
          },
          {
            unicode: "\u{1F385}\u{1F3FD}"
          },
          {
            unicode: "\u{1F385}\u{1F3FE}"
          },
          {
            unicode: "\u{1F385}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F936}",
        tags: [
          "\u30AF\u30EA\u30B9\u30DE\u30B9",
          "\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F936}\u{1F3FB}"
          },
          {
            unicode: "\u{1F936}\u{1F3FC}"
          },
          {
            unicode: "\u{1F936}\u{1F3FD}"
          },
          {
            unicode: "\u{1F936}\u{1F3FE}"
          },
          {
            unicode: "\u{1F936}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F384}",
        tags: [
          "\u30AF\u30EA\u30B9\u30DE\u30B9",
          "\u30B5\u30F3\u30BF\u30AF\u30ED\u30FC\u30B9"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F384}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F384}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F384}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F384}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F384}"
          }
        ]
      },
      {
        unicode: "\u{1F9B8}",
        tags: [
          "\u30D2\u30ED\u30A4\u30F3",
          "\u30D2\u30FC\u30ED\u30FC",
          "\u5584",
          "\u8D85\u4EBA"
        ],
        skins: [
          {
            unicode: "\u{1F9B8}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9B8}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9B8}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9B8}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9B8}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9B8}\u200D\u2642\uFE0F",
        tags: [
          "\u30D2\u30FC\u30ED\u30FC",
          "\u5584",
          "\u7537\u6027",
          "\u8D85\u4EBA"
        ],
        skins: [
          {
            unicode: "\u{1F9B8}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9B8}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9B8}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9B8}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9B8}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9B8}\u200D\u2640\uFE0F",
        tags: [
          "\u30D2\u30ED\u30A4\u30F3",
          "\u30D2\u30FC\u30ED\u30FC",
          "\u5584",
          "\u5973\u6027",
          "\u8D85\u4EBA"
        ],
        skins: [
          {
            unicode: "\u{1F9B8}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9B8}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9B8}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9B8}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9B8}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9B9}",
        tags: [
          "\u30F4\u30A3\u30E9\u30F3",
          "\u60AA",
          "\u72AF\u4EBA",
          "\u8D85\u4EBA"
        ],
        skins: [
          {
            unicode: "\u{1F9B9}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9B9}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9B9}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9B9}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9B9}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9B9}\u200D\u2642\uFE0F",
        tags: [
          "\u30F4\u30A3\u30E9\u30F3",
          "\u60AA",
          "\u72AF\u4EBA",
          "\u7537\u6027",
          "\u8D85\u4EBA"
        ],
        skins: [
          {
            unicode: "\u{1F9B9}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9B9}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9B9}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9B9}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9B9}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9B9}\u200D\u2640\uFE0F",
        tags: [
          "\u30F4\u30A3\u30E9\u30F3",
          "\u5973\u6027",
          "\u60AA",
          "\u72AF\u4EBA",
          "\u8D85\u4EBA"
        ],
        skins: [
          {
            unicode: "\u{1F9B9}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9B9}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9B9}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9B9}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9B9}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D9}",
        tags: [
          "\u9B54\u5973",
          "\u9B54\u6CD5"
        ],
        skins: [
          {
            unicode: "\u{1F9D9}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D9}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D9}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D9}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D9}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9D9}\u200D\u2642\uFE0F",
        tags: [
          "\u7537",
          "\u7537\u6027",
          "\u9B54\u6CD5\u4F7F\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F9D9}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D9}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D9}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D9}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D9}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D9}\u200D\u2640\uFE0F",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u9B54\u5973",
          "\u9B54\u6CD5\u4F7F\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F9D9}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D9}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D9}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D9}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D9}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9DA}",
        tags: [
          "\u30AA\u30D9\u30ED\u30F3",
          "\u30D1\u30C3\u30AF",
          "\u4F1D\u8AAC",
          "\u9B54\u6CD5"
        ],
        skins: [
          {
            unicode: "\u{1F9DA}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9DA}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9DA}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9DA}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9DA}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9DA}\u200D\u2642\uFE0F",
        tags: [
          "\u5996\u7CBE",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F9DA}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DA}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DA}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DA}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DA}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9DA}\u200D\u2640\uFE0F",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u5996\u7CBE"
        ],
        skins: [
          {
            unicode: "\u{1F9DA}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DA}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DA}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DA}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DA}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9DB}",
        tags: [
          "\u30C9\u30E9\u30AD\u30E5\u30E9",
          "\u30D0\u30F3\u30D1\u30A4\u30A2"
        ],
        skins: [
          {
            unicode: "\u{1F9DB}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9DB}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9DB}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9DB}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9DB}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9DB}\u200D\u2642\uFE0F",
        tags: [
          "\u30C9\u30E9\u30AD\u30E5\u30E9",
          "\u30D0\u30F3\u30D1\u30A4\u30A2",
          "\u5438\u8840\u9B3C",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F9DB}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DB}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DB}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DB}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DB}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9DB}\u200D\u2640\uFE0F",
        tags: [
          "\u30C9\u30E9\u30AD\u30E5\u30E9",
          "\u30D0\u30F3\u30D1\u30A4\u30A2",
          "\u5438\u8840\u9B3C",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F9DB}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DB}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DB}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DB}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DB}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9DC}",
        tags: [
          "\u30DE\u30FC\u30DE\u30F3",
          "\u30DE\u30FC\u30E1\u30A4\u30C9"
        ],
        skins: [
          {
            unicode: "\u{1F9DC}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9DC}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9DC}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9DC}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9DC}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9DC}\u200D\u2642\uFE0F",
        tags: [
          "\u4EBA\u9B5A",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F9DC}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DC}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DC}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DC}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DC}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9DC}\u200D\u2640\uFE0F",
        tags: [
          "\u4EBA\u9B5A",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F9DC}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DC}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DC}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DC}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DC}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9DD}",
        tags: [
          "\u5996\u7CBE",
          "\u5C0F\u5996\u7CBE"
        ],
        skins: [
          {
            unicode: "\u{1F9DD}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9DD}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9DD}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9DD}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9DD}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9DD}\u200D\u2642\uFE0F",
        tags: [
          "\u30A8\u30EB\u30D5",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F9DD}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DD}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DD}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DD}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9DD}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9DD}\u200D\u2640\uFE0F",
        tags: [
          "\u30A8\u30EB\u30D5",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F9DD}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DD}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DD}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DD}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9DD}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9DE}",
        tags: [
          "\u9B54\u795E"
        ]
      },
      {
        unicode: "\u{1F9DE}\u200D\u2642\uFE0F",
        tags: [
          "\u7537",
          "\u7537\u6027",
          "\u7CBE\u970A",
          "\u9B54\u795E"
        ]
      },
      {
        unicode: "\u{1F9DE}\u200D\u2640\uFE0F",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u7CBE\u970A",
          "\u9B54\u795E"
        ]
      },
      {
        unicode: "\u{1F9DF}",
        tags: [
          "\u30DB\u30E9\u30FC"
        ]
      },
      {
        unicode: "\u{1F9DF}\u200D\u2642\uFE0F",
        tags: [
          "\u30BE\u30F3\u30D3",
          "\u30DB\u30E9\u30FC",
          "\u7537",
          "\u7537\u6027"
        ]
      },
      {
        unicode: "\u{1F9DF}\u200D\u2640\uFE0F",
        tags: [
          "\u30BE\u30F3\u30D3",
          "\u30DB\u30E9\u30FC",
          "\u5973",
          "\u5973\u6027"
        ]
      },
      {
        unicode: "\u{1F486}",
        tags: [
          "\u30A8\u30B9\u30C6",
          "\u30D5\u30A7\u30A4\u30B9\u30DE\u30C3\u30B5\u30FC\u30B8",
          "\u30DE\u30C3\u30B5\u30FC\u30B8"
        ],
        skins: [
          {
            unicode: "\u{1F486}\u{1F3FB}"
          },
          {
            unicode: "\u{1F486}\u{1F3FC}"
          },
          {
            unicode: "\u{1F486}\u{1F3FD}"
          },
          {
            unicode: "\u{1F486}\u{1F3FE}"
          },
          {
            unicode: "\u{1F486}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F486}\u200D\u2642\uFE0F",
        tags: [
          "\u30A8\u30B9\u30C6",
          "\u30D5\u30A7\u30A4\u30B9\u30DE\u30C3\u30B5\u30FC\u30B8",
          "\u30DE\u30C3\u30B5\u30FC\u30B8",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F486}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F486}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F486}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F486}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F486}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F486}\u200D\u2640\uFE0F",
        tags: [
          "\u30A8\u30B9\u30C6",
          "\u30D5\u30A7\u30A4\u30B9\u30DE\u30C3\u30B5\u30FC\u30B8",
          "\u30DE\u30C3\u30B5\u30FC\u30B8",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F486}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F486}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F486}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F486}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F486}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F487}",
        tags: [
          "\u30D8\u30A2\u30AB\u30C3\u30C8",
          "\u5E8A\u5C4B",
          "\u7F8E\u5BB9\u5BA4",
          "\u7F8E\u5BB9\u9662"
        ],
        skins: [
          {
            unicode: "\u{1F487}\u{1F3FB}"
          },
          {
            unicode: "\u{1F487}\u{1F3FC}"
          },
          {
            unicode: "\u{1F487}\u{1F3FD}"
          },
          {
            unicode: "\u{1F487}\u{1F3FE}"
          },
          {
            unicode: "\u{1F487}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F487}\u200D\u2642\uFE0F",
        tags: [
          "\u30D8\u30A2\u30AB\u30C3\u30C8",
          "\u5E8A\u5C4B",
          "\u7537\u6027",
          "\u7F8E\u5BB9\u5BA4",
          "\u7F8E\u5BB9\u9662"
        ],
        skins: [
          {
            unicode: "\u{1F487}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F487}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F487}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F487}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F487}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F487}\u200D\u2640\uFE0F",
        tags: [
          "\u30D8\u30A2\u30AB\u30C3\u30C8",
          "\u5973\u6027",
          "\u5E8A\u5C4B",
          "\u7F8E\u5BB9\u5BA4",
          "\u7F8E\u5BB9\u9662"
        ],
        skins: [
          {
            unicode: "\u{1F487}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F487}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F487}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F487}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F487}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F6B6}",
        tags: [
          "\u30A6\u30A9\u30FC\u30AD\u30F3\u30B0",
          "\u6B69\u884C",
          "\u6B69\u884C\u8005"
        ],
        skins: [
          {
            unicode: "\u{1F6B6}\u{1F3FB}"
          },
          {
            unicode: "\u{1F6B6}\u{1F3FC}"
          },
          {
            unicode: "\u{1F6B6}\u{1F3FD}"
          },
          {
            unicode: "\u{1F6B6}\u{1F3FE}"
          },
          {
            unicode: "\u{1F6B6}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F6B6}\u200D\u2642\uFE0F",
        tags: [
          "\u30A6\u30A9\u30FC\u30AD\u30F3\u30B0",
          "\u6B69\u884C",
          "\u6B69\u884C\u8005",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F6B6}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6B6}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6B6}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6B6}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6B6}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F6B6}\u200D\u2640\uFE0F",
        tags: [
          "\u30A6\u30A9\u30FC\u30AD\u30F3\u30B0",
          "\u5973\u6027",
          "\u6B69\u884C",
          "\u6B69\u884C\u8005"
        ],
        skins: [
          {
            unicode: "\u{1F6B6}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6B6}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6B6}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6B6}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6B6}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9CD}",
        tags: [
          "\u4EBA",
          "\u7ACB\u3063\u3066\u3044\u308B",
          "\u8D77\u7ACB"
        ],
        skins: [
          {
            unicode: "\u{1F9CD}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9CD}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9CD}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9CD}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9CD}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9CD}\u200D\u2642\uFE0F",
        tags: [
          "\u7537\u6027",
          "\u8D77\u7ACB"
        ],
        skins: [
          {
            unicode: "\u{1F9CD}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9CD}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9CD}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9CD}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9CD}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9CD}\u200D\u2640\uFE0F",
        tags: [
          "\u5973\u6027",
          "\u8D77\u7ACB"
        ],
        skins: [
          {
            unicode: "\u{1F9CD}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9CD}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9CD}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9CD}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9CD}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9CE}",
        tags: [
          "\u3072\u3056\u307E\u305A\u304F",
          "\u4EBA",
          "\u5EA7\u308B"
        ],
        skins: [
          {
            unicode: "\u{1F9CE}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9CE}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9CE}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9CE}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9CE}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9CE}\u200D\u2642\uFE0F",
        tags: [
          "\u3072\u3056\u307E\u305A\u304F",
          "\u5EA7\u308B",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F9CE}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9CE}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9CE}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9CE}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9CE}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9CE}\u200D\u2640\uFE0F",
        tags: [
          "\u3072\u3056\u307E\u305A\u304F",
          "\u5973\u6027",
          "\u5EA7\u308B"
        ],
        skins: [
          {
            unicode: "\u{1F9CE}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9CE}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9CE}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9CE}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9CE}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F9AF}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u76EE",
          "\u8996\u899A",
          "\u969C\u304C\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9AF}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9AF}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9AF}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9AF}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9AF}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F9AF}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u7537\u6027",
          "\u76EE",
          "\u8996\u899A",
          "\u969C\u304C\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F9AF}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F9AF}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F9AF}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F9AF}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F9AF}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F9AF}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u5973\u6027",
          "\u76EE",
          "\u8996\u899A",
          "\u969C\u304C\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F9AF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F9AF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F9AF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F9AF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F9AF}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F9BC}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u8ECA\u3044\u3059",
          "\u969C\u304C\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9BC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9BC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9BC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9BC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9BC}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F9BC}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u7537\u6027",
          "\u8ECA\u3044\u3059",
          "\u969C\u304C\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F9BC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F9BC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F9BC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F9BC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F9BC}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F9BC}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u5973\u6027",
          "\u8ECA\u3044\u3059",
          "\u969C\u304C\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F9BC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F9BC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F9BC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F9BC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F9BC}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F9BD}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u8ECA\u3044\u3059",
          "\u969C\u304C\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F9BD}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F9BD}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F9BD}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F9BD}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F9BD}"
          }
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F9BD}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u7537\u6027",
          "\u8ECA\u3044\u3059",
          "\u969C\u304C\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F9BD}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F9BD}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F9BD}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F9BD}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F9BD}"
          }
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F9BD}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u5973\u6027",
          "\u8ECA\u3044\u3059",
          "\u969C\u304C\u3044"
        ],
        skins: [
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F9BD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F9BD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F9BD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F9BD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F9BD}"
          }
        ]
      },
      {
        unicode: "\u{1F3C3}",
        tags: [
          "\u30B8\u30E7\u30AE\u30F3\u30B0",
          "\u30DE\u30E9\u30BD\u30F3",
          "\u30E9\u30F3\u30CA\u30FC",
          "\u30E9\u30F3\u30CB\u30F3\u30B0"
        ],
        skins: [
          {
            unicode: "\u{1F3C3}\u{1F3FB}"
          },
          {
            unicode: "\u{1F3C3}\u{1F3FC}"
          },
          {
            unicode: "\u{1F3C3}\u{1F3FD}"
          },
          {
            unicode: "\u{1F3C3}\u{1F3FE}"
          },
          {
            unicode: "\u{1F3C3}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F3C3}\u200D\u2642\uFE0F",
        tags: [
          "\u30B8\u30E7\u30AE\u30F3\u30B0",
          "\u30DE\u30E9\u30BD\u30F3",
          "\u30E9\u30F3\u30CA\u30FC",
          "\u30E9\u30F3\u30CB\u30F3\u30B0",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F3C3}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3C3}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3C3}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3C3}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3C3}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F3C3}\u200D\u2640\uFE0F",
        tags: [
          "\u30B8\u30E7\u30AE\u30F3\u30B0",
          "\u30DE\u30E9\u30BD\u30F3",
          "\u30E9\u30F3\u30CA\u30FC",
          "\u30E9\u30F3\u30CB\u30F3\u30B0",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F3C3}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3C3}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3C3}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3C3}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3C3}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F483}",
        tags: [
          "\u30C0\u30F3\u30B5\u30FC",
          "\u30C0\u30F3\u30B9",
          "\u30D5\u30E9\u30E1\u30F3\u30B3",
          "\u5973\u6027",
          "\u8E0A\u308A\u5B50"
        ],
        skins: [
          {
            unicode: "\u{1F483}\u{1F3FB}"
          },
          {
            unicode: "\u{1F483}\u{1F3FC}"
          },
          {
            unicode: "\u{1F483}\u{1F3FD}"
          },
          {
            unicode: "\u{1F483}\u{1F3FE}"
          },
          {
            unicode: "\u{1F483}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F57A}",
        tags: [
          "\u30C0\u30F3\u30B5\u30FC",
          "\u30C0\u30F3\u30B9",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F57A}\u{1F3FB}"
          },
          {
            unicode: "\u{1F57A}\u{1F3FC}"
          },
          {
            unicode: "\u{1F57A}\u{1F3FD}"
          },
          {
            unicode: "\u{1F57A}\u{1F3FE}"
          },
          {
            unicode: "\u{1F57A}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F574}\uFE0F",
        tags: [
          "\u30B9\u30FC\u30C4",
          "\u30D3\u30B8\u30CD\u30B9\u30DE\u30F3",
          "\u7537",
          "\u7537\u6027",
          "\u7A7A\u4E2D\u6D6E\u904A"
        ],
        skins: [
          {
            unicode: "\u{1F574}\u{1F3FB}"
          },
          {
            unicode: "\u{1F574}\u{1F3FC}"
          },
          {
            unicode: "\u{1F574}\u{1F3FD}"
          },
          {
            unicode: "\u{1F574}\u{1F3FE}"
          },
          {
            unicode: "\u{1F574}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F46F}",
        tags: [
          "\u3046\u3055\u8033",
          "\u30C0\u30F3\u30B5\u30FC",
          "\u30D0\u30CB\u30FC\u30AC\u30FC\u30EB",
          "\u30D0\u30CB\u30FC\u30DC\u30FC\u30A4",
          "\u30D1\u30FC\u30C6\u30A3\u30FC"
        ]
      },
      {
        unicode: "\u{1F46F}\u200D\u2642\uFE0F",
        tags: [
          "\u3046\u3055\u8033",
          "\u30C0\u30F3\u30B5\u30FC",
          "\u30D1\u30FC\u30C6\u30A3\u30FC",
          "\u7537",
          "\u7537\u6027"
        ]
      },
      {
        unicode: "\u{1F46F}\u200D\u2640\uFE0F",
        tags: [
          "\u3046\u3055\u8033",
          "\u30C0\u30F3\u30B5\u30FC",
          "\u30D1\u30FC\u30C6\u30A3\u30FC",
          "\u5973",
          "\u5973\u6027"
        ]
      },
      {
        unicode: "\u{1F9D6}",
        tags: [
          "\u30B5\u30A6\u30CA"
        ],
        skins: [
          {
            unicode: "\u{1F9D6}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D6}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D6}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D6}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D6}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9D6}\u200D\u2642\uFE0F",
        tags: [
          "\u30B5\u30A6\u30CA",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F9D6}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D6}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D6}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D6}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D6}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D6}\u200D\u2640\uFE0F",
        tags: [
          "\u30B5\u30A6\u30CA",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F9D6}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D6}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D6}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D6}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D6}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D7}",
        tags: [
          "\u5C71\u767B\u308A",
          "\u767B\u5C71"
        ],
        skins: [
          {
            unicode: "\u{1F9D7}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D7}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D7}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D7}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D7}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9D7}\u200D\u2642\uFE0F",
        tags: [
          "\u5C71\u767B\u308A",
          "\u7537",
          "\u7537\u6027",
          "\u767B\u5C71"
        ],
        skins: [
          {
            unicode: "\u{1F9D7}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D7}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D7}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D7}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D7}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D7}\u200D\u2640\uFE0F",
        tags: [
          "\u5973",
          "\u5973\u6027",
          "\u5C71\u767B\u308A",
          "\u767B\u5C71"
        ],
        skins: [
          {
            unicode: "\u{1F9D7}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D7}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D7}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D7}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D7}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F93A}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D5\u30A7\u30F3\u30B7\u30F3\u30B0"
        ]
      },
      {
        unicode: "\u{1F3C7}",
        tags: [
          "\u30B8\u30E7\u30C3\u30AD\u30FC",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u4E57\u99AC",
          "\u9A0E\u624B"
        ],
        skins: [
          {
            unicode: "\u{1F3C7}\u{1F3FB}"
          },
          {
            unicode: "\u{1F3C7}\u{1F3FC}"
          },
          {
            unicode: "\u{1F3C7}\u{1F3FD}"
          },
          {
            unicode: "\u{1F3C7}\u{1F3FE}"
          },
          {
            unicode: "\u{1F3C7}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u26F7\uFE0F",
        tags: [
          "\u30B9\u30AD\u30FC",
          "\u30B9\u30C8\u30C3\u30AF",
          "\u30B9\u30DD\u30FC\u30C4"
        ]
      },
      {
        unicode: "\u{1F3C2}\uFE0F",
        tags: [
          "\u30B9\u30CE\u30DC",
          "\u30B9\u30CE\u30FC\u30DC\u30FC\u30C9",
          "\u30B9\u30DD\u30FC\u30C4"
        ],
        skins: [
          {
            unicode: "\u{1F3C2}\u{1F3FB}"
          },
          {
            unicode: "\u{1F3C2}\u{1F3FC}"
          },
          {
            unicode: "\u{1F3C2}\u{1F3FD}"
          },
          {
            unicode: "\u{1F3C2}\u{1F3FE}"
          },
          {
            unicode: "\u{1F3C2}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F3CC}\uFE0F",
        tags: [
          "\u30B4\u30EB\u30D5",
          "\u30B4\u30EB\u30D5\u30A1\u30FC",
          "\u30B9\u30DD\u30FC\u30C4"
        ],
        skins: [
          {
            unicode: "\u{1F3CC}\u{1F3FB}"
          },
          {
            unicode: "\u{1F3CC}\u{1F3FC}"
          },
          {
            unicode: "\u{1F3CC}\u{1F3FD}"
          },
          {
            unicode: "\u{1F3CC}\u{1F3FE}"
          },
          {
            unicode: "\u{1F3CC}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F",
        tags: [
          "\u30B4\u30EB\u30D5",
          "\u30B4\u30EB\u30D5\u30A1\u30FC",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F3CC}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3CC}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3CC}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3CC}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3CC}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F",
        tags: [
          "\u30B4\u30EB\u30D5",
          "\u30B4\u30EB\u30D5\u30A1\u30FC",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F3CC}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3CC}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3CC}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3CC}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3CC}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F3C4}\uFE0F",
        tags: [
          "\u30B5\u30FC\u30D5\u30A1\u30FC",
          "\u30B5\u30FC\u30D5\u30A3\u30F3",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u6CE2\u4E57\u308A"
        ],
        skins: [
          {
            unicode: "\u{1F3C4}\u{1F3FB}"
          },
          {
            unicode: "\u{1F3C4}\u{1F3FC}"
          },
          {
            unicode: "\u{1F3C4}\u{1F3FD}"
          },
          {
            unicode: "\u{1F3C4}\u{1F3FE}"
          },
          {
            unicode: "\u{1F3C4}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F3C4}\u200D\u2642\uFE0F",
        tags: [
          "\u30B5\u30FC\u30D5\u30A1\u30FC",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u6CE2\u4E57\u308A",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F3C4}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3C4}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3C4}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3C4}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3C4}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F3C4}\u200D\u2640\uFE0F",
        tags: [
          "\u30B5\u30FC\u30D5\u30A1\u30FC",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u5973",
          "\u5973\u6027",
          "\u6CE2\u4E57\u308A"
        ],
        skins: [
          {
            unicode: "\u{1F3C4}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3C4}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3C4}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3C4}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3C4}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F6A3}",
        tags: [
          "\u30AB\u30CC\u30FC",
          "\u30AB\u30E4\u30C3\u30AF",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u4E57\u308A\u7269",
          "\u8239"
        ],
        skins: [
          {
            unicode: "\u{1F6A3}\u{1F3FB}"
          },
          {
            unicode: "\u{1F6A3}\u{1F3FC}"
          },
          {
            unicode: "\u{1F6A3}\u{1F3FD}"
          },
          {
            unicode: "\u{1F6A3}\u{1F3FE}"
          },
          {
            unicode: "\u{1F6A3}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F6A3}\u200D\u2642\uFE0F",
        tags: [
          "\u30AB\u30CC\u30FC",
          "\u30AB\u30E4\u30C3\u30AF",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u7537\u6027",
          "\u8239"
        ],
        skins: [
          {
            unicode: "\u{1F6A3}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6A3}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6A3}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6A3}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6A3}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F6A3}\u200D\u2640\uFE0F",
        tags: [
          "\u30AB\u30CC\u30FC",
          "\u30AB\u30E4\u30C3\u30AF",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u5973\u6027",
          "\u8239"
        ],
        skins: [
          {
            unicode: "\u{1F6A3}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6A3}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6A3}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6A3}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6A3}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F3CA}\uFE0F",
        tags: [
          "\u30B9\u30A4\u30DE\u30FC",
          "\u30B9\u30A4\u30DF\u30F3\u30B0",
          "\u30B9\u30A4\u30E0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u6C34\u6CF3"
        ],
        skins: [
          {
            unicode: "\u{1F3CA}\u{1F3FB}"
          },
          {
            unicode: "\u{1F3CA}\u{1F3FC}"
          },
          {
            unicode: "\u{1F3CA}\u{1F3FD}"
          },
          {
            unicode: "\u{1F3CA}\u{1F3FE}"
          },
          {
            unicode: "\u{1F3CA}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F3CA}\u200D\u2642\uFE0F",
        tags: [
          "\u30B9\u30A4\u30DE\u30FC",
          "\u30B9\u30A4\u30DF\u30F3\u30B0",
          "\u30B9\u30A4\u30E0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u6C34\u6CF3",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F3CA}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3CA}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3CA}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3CA}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3CA}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F3CA}\u200D\u2640\uFE0F",
        tags: [
          "\u30B9\u30A4\u30DE\u30FC",
          "\u30B9\u30A4\u30DF\u30F3\u30B0",
          "\u30B9\u30A4\u30E0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u5973\u6027",
          "\u6C34\u6CF3"
        ],
        skins: [
          {
            unicode: "\u{1F3CA}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3CA}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3CA}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3CA}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3CA}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u26F9\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D0\u30B9\u30B1",
          "\u30D0\u30B9\u30B1\u30C3\u30C8\u30DC\u30FC\u30EB",
          "\u7403\u6280"
        ],
        skins: [
          {
            unicode: "\u26F9\u{1F3FB}"
          },
          {
            unicode: "\u26F9\u{1F3FC}"
          },
          {
            unicode: "\u26F9\u{1F3FD}"
          },
          {
            unicode: "\u26F9\u{1F3FE}"
          },
          {
            unicode: "\u26F9\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u26F9\uFE0F\u200D\u2642\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D0\u30B9\u30B1",
          "\u30D0\u30B9\u30B1\u30C3\u30C8\u30DC\u30FC\u30EB",
          "\u7403\u6280",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u26F9\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u26F9\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u26F9\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u26F9\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u26F9\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u26F9\uFE0F\u200D\u2640\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D0\u30B9\u30B1",
          "\u30D0\u30B9\u30B1\u30C3\u30C8\u30DC\u30FC\u30EB",
          "\u5973\u6027",
          "\u7403\u6280"
        ],
        skins: [
          {
            unicode: "\u26F9\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u26F9\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u26F9\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u26F9\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u26F9\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F3CB}\uFE0F",
        tags: [
          "\u30A6\u30A7\u30A4\u30C8\u30EA\u30D5\u30C6\u30A3\u30F3\u30B0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u91CD\u91CF\u6319\u3052"
        ],
        skins: [
          {
            unicode: "\u{1F3CB}\u{1F3FB}"
          },
          {
            unicode: "\u{1F3CB}\u{1F3FC}"
          },
          {
            unicode: "\u{1F3CB}\u{1F3FD}"
          },
          {
            unicode: "\u{1F3CB}\u{1F3FE}"
          },
          {
            unicode: "\u{1F3CB}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F",
        tags: [
          "\u30A6\u30A7\u30A4\u30C8\u30EA\u30D5\u30C6\u30A3\u30F3\u30B0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F3CB}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3CB}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3CB}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3CB}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F3CB}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F",
        tags: [
          "\u30A6\u30A7\u30A4\u30C8\u30EA\u30D5\u30C6\u30A3\u30F3\u30B0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F3CB}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3CB}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3CB}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3CB}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F3CB}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F6B4}",
        tags: [
          "\u30B5\u30A4\u30AF\u30EA\u30F3\u30B0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30ED\u30FC\u30C9\u30D0\u30A4\u30AF",
          "\u30ED\u30FC\u30C9\u30EC\u30FC\u30B9",
          "\u7AF6\u8F2A"
        ],
        skins: [
          {
            unicode: "\u{1F6B4}\u{1F3FB}"
          },
          {
            unicode: "\u{1F6B4}\u{1F3FC}"
          },
          {
            unicode: "\u{1F6B4}\u{1F3FD}"
          },
          {
            unicode: "\u{1F6B4}\u{1F3FE}"
          },
          {
            unicode: "\u{1F6B4}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F6B4}\u200D\u2642\uFE0F",
        tags: [
          "\u30B5\u30A4\u30AF\u30EA\u30F3\u30B0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30ED\u30FC\u30C9\u30EC\u30FC\u30B9",
          "\u7537\u6027",
          "\u7AF6\u8F2A"
        ],
        skins: [
          {
            unicode: "\u{1F6B4}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6B4}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6B4}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6B4}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6B4}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F6B4}\u200D\u2640\uFE0F",
        tags: [
          "\u30B5\u30A4\u30AF\u30EA\u30F3\u30B0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30ED\u30FC\u30C9\u30EC\u30FC\u30B9",
          "\u5973\u6027",
          "\u7AF6\u8F2A"
        ],
        skins: [
          {
            unicode: "\u{1F6B4}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6B4}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6B4}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6B4}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6B4}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F6B5}",
        tags: [
          "\u30B5\u30A4\u30AF\u30EA\u30F3\u30B0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30DE\u30A6\u30F3\u30C6\u30F3\u30D0\u30A4\u30AF",
          "\u81EA\u8EE2\u8ECA"
        ],
        skins: [
          {
            unicode: "\u{1F6B5}\u{1F3FB}"
          },
          {
            unicode: "\u{1F6B5}\u{1F3FC}"
          },
          {
            unicode: "\u{1F6B5}\u{1F3FD}"
          },
          {
            unicode: "\u{1F6B5}\u{1F3FE}"
          },
          {
            unicode: "\u{1F6B5}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F6B5}\u200D\u2642\uFE0F",
        tags: [
          "\u30B5\u30A4\u30AF\u30EA\u30F3\u30B0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u7537",
          "\u7537\u6027",
          "\u81EA\u8EE2\u8ECA"
        ],
        skins: [
          {
            unicode: "\u{1F6B5}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6B5}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6B5}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6B5}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F6B5}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F6B5}\u200D\u2640\uFE0F",
        tags: [
          "\u30B5\u30A4\u30AF\u30EA\u30F3\u30B0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u5973",
          "\u5973\u6027",
          "\u81EA\u8EE2\u8ECA"
        ],
        skins: [
          {
            unicode: "\u{1F6B5}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6B5}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6B5}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6B5}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F6B5}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F938}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u4F53\u64CD",
          "\u5074\u8EE2"
        ],
        skins: [
          {
            unicode: "\u{1F938}\u{1F3FB}"
          },
          {
            unicode: "\u{1F938}\u{1F3FC}"
          },
          {
            unicode: "\u{1F938}\u{1F3FD}"
          },
          {
            unicode: "\u{1F938}\u{1F3FE}"
          },
          {
            unicode: "\u{1F938}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F938}\u200D\u2642\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u4F53\u64CD",
          "\u5074\u8EE2",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F938}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F938}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F938}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F938}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F938}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F938}\u200D\u2640\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u4F53\u64CD",
          "\u5074\u8EE2",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F938}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F938}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F938}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F938}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F938}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F93C}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30EC\u30B9\u30E9\u30FC",
          "\u30EC\u30B9\u30EA\u30F3\u30B0"
        ]
      },
      {
        unicode: "\u{1F93C}\u200D\u2642\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30EC\u30B9\u30EA\u30F3\u30B0",
          "\u30EC\u30B9\u30EA\u30F3\u30B0\u3092\u3059\u308B\u7537",
          "\u7537",
          "\u7537\u6027"
        ]
      },
      {
        unicode: "\u{1F93C}\u200D\u2640\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30EC\u30B9\u30EA\u30F3\u30B0",
          "\u30EC\u30B9\u30EA\u30F3\u30B0\u3092\u3059\u308B\u5973",
          "\u5973",
          "\u5973\u6027"
        ]
      },
      {
        unicode: "\u{1F93D}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u6C34\u7403",
          "\u7403\u6280"
        ],
        skins: [
          {
            unicode: "\u{1F93D}\u{1F3FB}"
          },
          {
            unicode: "\u{1F93D}\u{1F3FC}"
          },
          {
            unicode: "\u{1F93D}\u{1F3FD}"
          },
          {
            unicode: "\u{1F93D}\u{1F3FE}"
          },
          {
            unicode: "\u{1F93D}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F93D}\u200D\u2642\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u6C34\u7403",
          "\u7403\u6280",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F93D}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F93D}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F93D}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F93D}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F93D}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F93D}\u200D\u2640\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u5973",
          "\u5973\u6027",
          "\u6C34\u7403",
          "\u7403\u6280"
        ],
        skins: [
          {
            unicode: "\u{1F93D}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F93D}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F93D}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F93D}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F93D}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F93E}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30CF\u30F3\u30C9\u30DC\u30FC\u30EB",
          "\u7403\u6280"
        ],
        skins: [
          {
            unicode: "\u{1F93E}\u{1F3FB}"
          },
          {
            unicode: "\u{1F93E}\u{1F3FC}"
          },
          {
            unicode: "\u{1F93E}\u{1F3FD}"
          },
          {
            unicode: "\u{1F93E}\u{1F3FE}"
          },
          {
            unicode: "\u{1F93E}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F93E}\u200D\u2642\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30CF\u30F3\u30C9\u30DC\u30FC\u30EB",
          "\u7403\u6280",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F93E}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F93E}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F93E}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F93E}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F93E}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F93E}\u200D\u2640\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30CF\u30F3\u30C9\u30DC\u30FC\u30EB",
          "\u5973",
          "\u5973\u6027",
          "\u7403\u6280"
        ],
        skins: [
          {
            unicode: "\u{1F93E}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F93E}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F93E}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F93E}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F93E}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F939}",
        tags: [
          "\u30B8\u30E3\u30B0\u30E9\u30FC",
          "\u30B8\u30E3\u30B0\u30EA\u30F3\u30B0",
          "\u5927\u9053\u82B8"
        ],
        skins: [
          {
            unicode: "\u{1F939}\u{1F3FB}"
          },
          {
            unicode: "\u{1F939}\u{1F3FC}"
          },
          {
            unicode: "\u{1F939}\u{1F3FD}"
          },
          {
            unicode: "\u{1F939}\u{1F3FE}"
          },
          {
            unicode: "\u{1F939}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F939}\u200D\u2642\uFE0F",
        tags: [
          "\u30B8\u30E3\u30B0\u30E9\u30FC",
          "\u30B8\u30E3\u30B0\u30EA\u30F3\u30B0",
          "\u5927\u9053\u82B8",
          "\u7537",
          "\u7537\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F939}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F939}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F939}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F939}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F939}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F939}\u200D\u2640\uFE0F",
        tags: [
          "\u30B8\u30E3\u30B0\u30E9\u30FC",
          "\u30B8\u30E3\u30B0\u30EA\u30F3\u30B0",
          "\u5927\u9053\u82B8",
          "\u5973",
          "\u5973\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F939}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F939}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F939}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F939}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F939}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D8}",
        tags: [
          "\u30E8\u30AC",
          "\u7791\u60F3"
        ],
        skins: [
          {
            unicode: "\u{1F9D8}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D8}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D8}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D8}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D8}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9D8}\u200D\u2642\uFE0F",
        tags: [
          "\u30E8\u30AC",
          "\u7537",
          "\u7537\u6027",
          "\u7791\u60F3"
        ],
        skins: [
          {
            unicode: "\u{1F9D8}\u{1F3FB}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D8}\u{1F3FC}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D8}\u{1F3FD}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D8}\u{1F3FE}\u200D\u2642\uFE0F"
          },
          {
            unicode: "\u{1F9D8}\u{1F3FF}\u200D\u2642\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F9D8}\u200D\u2640\uFE0F",
        tags: [
          "\u30E8\u30AC",
          "\u5973",
          "\u5973\u6027",
          "\u7791\u60F3"
        ],
        skins: [
          {
            unicode: "\u{1F9D8}\u{1F3FB}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D8}\u{1F3FC}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D8}\u{1F3FD}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D8}\u{1F3FE}\u200D\u2640\uFE0F"
          },
          {
            unicode: "\u{1F9D8}\u{1F3FF}\u200D\u2640\uFE0F"
          }
        ]
      },
      {
        unicode: "\u{1F6C0}",
        tags: [
          "\u30D0\u30B9\u30BF\u30D6",
          "\u6D74\u69FD",
          "\u98A8\u5442"
        ],
        skins: [
          {
            unicode: "\u{1F6C0}\u{1F3FB}"
          },
          {
            unicode: "\u{1F6C0}\u{1F3FC}"
          },
          {
            unicode: "\u{1F6C0}\u{1F3FD}"
          },
          {
            unicode: "\u{1F6C0}\u{1F3FE}"
          },
          {
            unicode: "\u{1F6C0}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F6CC}",
        tags: [
          "\u30D9\u30C3\u30C9",
          "\u30DB\u30C6\u30EB",
          "\u5BDD\u308B"
        ],
        skins: [
          {
            unicode: "\u{1F6CC}\u{1F3FB}"
          },
          {
            unicode: "\u{1F6CC}\u{1F3FC}"
          },
          {
            unicode: "\u{1F6CC}\u{1F3FD}"
          },
          {
            unicode: "\u{1F6CC}\u{1F3FE}"
          },
          {
            unicode: "\u{1F6CC}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}",
        tags: [
          "\u3064\u306A\u3050",
          "\u30AB\u30C3\u30D7\u30EB",
          "\u4EBA",
          "\u53CB\u9054",
          "\u604B\u4EBA",
          "\u624B",
          "\u624B\u3092\u3064\u306A\u3050"
        ],
        skins: [
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FB}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FC}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FD}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FE}"
          },
          {
            unicode: "\u{1F9D1}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F9D1}\u{1F3FF}"
          }
        ]
      },
      {
        unicode: "\u{1F46D}",
        tags: [
          "\u30AB\u30C3\u30D7\u30EB",
          "\u53CB\u9054",
          "\u540C\u6027",
          "\u5973",
          "\u604B\u4EBA"
        ],
        skins: [
          {
            unicode: "\u{1F46D}\u{1F3FB}"
          },
          {
            unicode: "\u{1F46D}\u{1F3FC}"
          },
          {
            unicode: "\u{1F46D}\u{1F3FD}"
          },
          {
            unicode: "\u{1F46D}\u{1F3FE}"
          },
          {
            unicode: "\u{1F46D}\u{1F3FF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}"
          },
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F469}\u{1F3FE}"
          }
        ]
      },
      {
        unicode: "\u{1F46B}",
        tags: [
          "\u30AB\u30C3\u30D7\u30EB",
          "\u53CB\u9054",
          "\u604B\u4EBA",
          "\u7537\u5973",
          "\u7570\u6027"
        ],
        skins: [
          {
            unicode: "\u{1F46B}\u{1F3FB}"
          },
          {
            unicode: "\u{1F46B}\u{1F3FC}"
          },
          {
            unicode: "\u{1F46B}\u{1F3FD}"
          },
          {
            unicode: "\u{1F46B}\u{1F3FE}"
          },
          {
            unicode: "\u{1F46B}\u{1F3FF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"
          },
          {
            unicode: "\u{1F469}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"
          },
          {
            unicode: "\u{1F469}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"
          },
          {
            unicode: "\u{1F469}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"
          },
          {
            unicode: "\u{1F469}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"
          }
        ]
      },
      {
        unicode: "\u{1F46C}",
        tags: [
          "\u30AB\u30C3\u30D7\u30EB",
          "\u53CB\u9054",
          "\u540C\u6027",
          "\u604B\u4EBA",
          "\u7537"
        ],
        skins: [
          {
            unicode: "\u{1F46C}\u{1F3FB}"
          },
          {
            unicode: "\u{1F46C}\u{1F3FC}"
          },
          {
            unicode: "\u{1F46C}\u{1F3FD}"
          },
          {
            unicode: "\u{1F46C}\u{1F3FE}"
          },
          {
            unicode: "\u{1F46C}\u{1F3FF}"
          },
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"
          },
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"
          },
          {
            unicode: "\u{1F468}\u{1F3FB}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"
          },
          {
            unicode: "\u{1F468}\u{1F3FC}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"
          },
          {
            unicode: "\u{1F468}\u{1F3FD}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"
          },
          {
            unicode: "\u{1F468}\u{1F3FE}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FF}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FB}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FC}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FD}"
          },
          {
            unicode: "\u{1F468}\u{1F3FF}\u200D\u{1F91D}\u200D\u{1F468}\u{1F3FE}"
          }
        ]
      },
      {
        unicode: "\u{1F48F}",
        tags: [
          "\u3061\u3085\u3063",
          "\u30AB\u30C3\u30D7\u30EB",
          "\u30AD\u30B9",
          "\u30CF\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
        tags: [
          "2\u4EBA\u3067\u30AD\u30B9",
          "\u3061\u3085\u3063",
          "\u30AB\u30C3\u30D7\u30EB",
          "\u30AD\u30B9",
          "\u30CF\u30FC\u30C8",
          "\u5973\u6027",
          "\u7537\u6027"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
        tags: [
          "2\u4EBA\u3067\u30AD\u30B9",
          "\u3061\u3085\u3063",
          "\u30AB\u30C3\u30D7\u30EB",
          "\u30AD\u30B9",
          "\u30CF\u30FC\u30C8",
          "\u7537\u6027"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}",
        tags: [
          "2\u4EBA\u3067\u30AD\u30B9",
          "\u3061\u3085\u3063",
          "\u30AB\u30C3\u30D7\u30EB",
          "\u30AD\u30B9",
          "\u30CF\u30FC\u30C8",
          "\u5973\u6027"
        ]
      },
      {
        unicode: "\u{1F491}",
        tags: [
          "\u30AB\u30C3\u30D7\u30EB",
          "\u30CF\u30FC\u30C8",
          "\u604B\u4EBA",
          "\u71B1\u3005"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}",
        tags: [
          "\u30AB\u30C3\u30D7\u30EB",
          "\u30AB\u30C3\u30D7\u30EB\u3068\u30CF\u30FC\u30C8",
          "\u30CF\u30FC\u30C8",
          "\u5973\u6027",
          "\u604B\u4EBA",
          "\u71B1\u3005",
          "\u7537\u6027"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}",
        tags: [
          "\u30AB\u30C3\u30D7\u30EB",
          "\u30AB\u30C3\u30D7\u30EB\u3068\u30CF\u30FC\u30C8",
          "\u30CF\u30FC\u30C8",
          "\u604B\u4EBA",
          "\u71B1\u3005",
          "\u7537\u6027"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}",
        tags: [
          "\u30AB\u30C3\u30D7\u30EB",
          "\u30AB\u30C3\u30D7\u30EB\u3068\u30CF\u30FC\u30C8",
          "\u30CF\u30FC\u30C8",
          "\u5973\u6027",
          "\u604B\u4EBA",
          "\u71B1\u3005"
        ]
      },
      {
        unicode: "\u{1F46A}\uFE0F",
        tags: [
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}",
        tags: [
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
        tags: [
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}",
        tags: [
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5BB6\u65CF",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
        tags: [
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5BB6\u65CF",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}",
        tags: [
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
        tags: [
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F466}",
        tags: [
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
        tags: [
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F467}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5BB6\u65CF",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5BB6\u65CF",
          "\u7537\u6027",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F466}",
        tags: [
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
        tags: [
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F467}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u7537\u306E\u5B50",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
        tags: [
          "\u5973\u306E\u5B50",
          "\u5973\u6027",
          "\u5BB6\u65CF",
          "\u89AA\u5B50"
        ]
      },
      {
        unicode: "\u{1F5E3}\uFE0F",
        tags: [
          "\u30B7\u30EB\u30A8\u30C3\u30C8",
          "\u8A71\u3059",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F464}",
        tags: [
          "1\u4EBA",
          "\u30B7\u30EB\u30A8\u30C3\u30C8",
          "\u4E0A\u534A\u8EAB"
        ]
      },
      {
        unicode: "\u{1F465}",
        tags: [
          "2\u4EBA",
          "\u30B7\u30EB\u30A8\u30C3\u30C8",
          "\u4E0A\u534A\u8EAB"
        ]
      },
      {
        unicode: "\u{1FAC2}",
        tags: [
          "\u3042\u308A\u304C\u3068\u3046",
          "\u304A\u5225\u308C",
          "\u3053\u3093\u306B\u3061\u306F",
          "\u3055\u3088\u3046\u306A\u3089",
          "\u6328\u62F6"
        ]
      },
      {
        unicode: "\u{1F463}",
        tags: [
          "\u8DB3"
        ]
      }
    ]
  },
  {
    group: 2,
    emojiList: [
      {
        unicode: "\u{1F3FB}",
        tags: [
          "\u808C\u306E\u8272",
          "\u808C\u82721\u20132"
        ]
      },
      {
        unicode: "\u{1F3FC}",
        tags: [
          "\u808C\u306E\u8272",
          "\u808C\u82723",
          "\u8584\u3044\uFF5E\u4E2D\u9593\u306E\u808C\u8272"
        ]
      },
      {
        unicode: "\u{1F3FD}",
        tags: [
          "\u808C\u306E\u8272",
          "\u808C\u82724"
        ]
      },
      {
        unicode: "\u{1F3FE}",
        tags: [
          "\u4E2D\u9593\uFF5E\u6FC3\u3044\u808C\u8272",
          "\u808C\u306E\u8272",
          "\u808C\u82725"
        ]
      },
      {
        unicode: "\u{1F3FF}",
        tags: [
          "\u808C\u306E\u8272",
          "\u808C\u82726"
        ]
      },
      {
        unicode: "\u{1F9B0}",
        tags: [
          "\u8D64\u6BDB\u306E\u4EBA",
          "\u8D64\u8336"
        ]
      },
      {
        unicode: "\u{1F9B1}",
        tags: [
          "\u304F\u305B\u6BDB",
          "\u30A2\u30D5\u30ED",
          "\u30AB\u30FC\u30EB",
          "\u30D1\u30F3\u30C1\u30D1\u30FC\u30DE"
        ]
      },
      {
        unicode: "\u{1F9B3}",
        tags: [
          "\u30B0\u30EC\u30FC",
          "\u5E74\u914D",
          "\u8001\u4EBA",
          "\u9AD8\u9F62\u8005"
        ]
      },
      {
        unicode: "\u{1F9B2}",
        tags: [
          "\u3066\u3044\u982D",
          "\u5316\u5B66\u7642\u6CD5",
          "\u574A\u4E3B",
          "\u6BDB\u304C\u306A\u3044"
        ]
      }
    ]
  },
  {
    group: 3,
    emojiList: [
      {
        unicode: "\u{1F435}",
        tags: [
          "\u30B5\u30EB",
          "\u52D5\u7269",
          "\u733F",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F412}",
        tags: [
          "\u52D5\u7269",
          "\u733F"
        ]
      },
      {
        unicode: "\u{1F98D}",
        tags: [
          "\u52D5\u7269",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F9A7}",
        tags: [
          "\u30B5\u30EB",
          "\u52D5\u7269",
          "\u68EE\u306E\u4EBA",
          "\u733F"
        ]
      },
      {
        unicode: "\u{1F436}",
        tags: [
          "\u30A4\u30CC",
          "\u30DA\u30C3\u30C8",
          "\u52D5\u7269",
          "\u72AC",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F415}\uFE0F",
        tags: [
          "\u30DA\u30C3\u30C8",
          "\u52D5\u7269",
          "\u72AC"
        ]
      },
      {
        unicode: "\u{1F9AE}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u72AC",
          "\u88DC\u52A9",
          "\u8996\u899A",
          "\u969C\u304C\u3044"
        ]
      },
      {
        unicode: "\u{1F415}\u200D\u{1F9BA}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u30B5\u30FC\u30D3\u30B9",
          "\u72AC",
          "\u88DC\u52A9"
        ]
      },
      {
        unicode: "\u{1F429}",
        tags: [
          "\u30DA\u30C3\u30C8",
          "\u52D5\u7269",
          "\u72AC"
        ]
      },
      {
        unicode: "\u{1F43A}",
        tags: [
          "\u30AA\u30AA\u30AB\u30DF",
          "\u52D5\u7269",
          "\u72FC",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F98A}",
        tags: [
          "\u30AD\u30C4\u30CD",
          "\u52D5\u7269",
          "\u72D0",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F99D}",
        tags: [
          "\u305A\u308B\u8CE2\u3044",
          "\u52D5\u7269",
          "\u597D\u5947\u5FC3",
          "\u8A6E\u7D22\u597D\u304D"
        ]
      },
      {
        unicode: "\u{1F431}",
        tags: [
          "\u30CD\u30B3",
          "\u30DA\u30C3\u30C8",
          "\u52D5\u7269",
          "\u732B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F408}\uFE0F",
        tags: [
          "\u30DA\u30C3\u30C8",
          "\u52D5\u7269",
          "\u732B"
        ]
      },
      {
        unicode: "\u{1F408}\u200D\u2B1B",
        tags: [
          "\u30CD\u30B3",
          "\u4E0D\u5409",
          "\u52D5\u7269",
          "\u732B",
          "\u9ED2"
        ]
      },
      {
        unicode: "\u{1F981}",
        tags: [
          "\u30E9\u30A4\u30AA\u30F3",
          "\u52D5\u7269",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F42F}",
        tags: [
          "\u30C8\u30E9",
          "\u52D5\u7269",
          "\u864E",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F405}",
        tags: [
          "\u52D5\u7269",
          "\u864E"
        ]
      },
      {
        unicode: "\u{1F406}",
        tags: [
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F434}",
        tags: [
          "\u30A6\u30DE",
          "\u52D5\u7269",
          "\u9854",
          "\u99AC"
        ]
      },
      {
        unicode: "\u{1F40E}",
        tags: [
          "\u30A6\u30DE",
          "\u4E57\u99AC",
          "\u52D5\u7269",
          "\u7AF6\u99AC"
        ]
      },
      {
        unicode: "\u{1F984}",
        tags: [
          "\u30E6\u30CB\u30B3\u30FC\u30F3",
          "\u4E00\u89D2\u7363",
          "\u52D5\u7269",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F993}",
        tags: [
          "\u3057\u307E\u3057\u307E",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F98C}",
        tags: [
          "\u52D5\u7269",
          "\u9854",
          "\u9E7F"
        ]
      },
      {
        unicode: "\u{1F9AC}",
        tags: [
          "\u30D0\u30C3\u30D5\u30A1\u30ED\u30FC",
          "\u52D5\u7269",
          "\u725B",
          "\u7FA4\u308C",
          "\u91CE\u725B"
        ]
      },
      {
        unicode: "\u{1F42E}",
        tags: [
          "\u30A6\u30B7",
          "\u52D5\u7269",
          "\u725B",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F402}",
        tags: [
          "\u30A6\u30B7",
          "\u52D5\u7269",
          "\u661F\u5EA7",
          "\u725B"
        ]
      },
      {
        unicode: "\u{1F403}",
        tags: [
          "\u30D0\u30C3\u30D5\u30A1\u30ED\u30FC",
          "\u52D5\u7269",
          "\u725B"
        ]
      },
      {
        unicode: "\u{1F404}",
        tags: [
          "\u30A6\u30B7",
          "\u52D5\u7269",
          "\u725B"
        ]
      },
      {
        unicode: "\u{1F437}",
        tags: [
          "\u30D6\u30BF",
          "\u52D5\u7269",
          "\u8C5A",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F416}",
        tags: [
          "\u52D5\u7269",
          "\u8C5A"
        ]
      },
      {
        unicode: "\u{1F417}",
        tags: [
          "\u52D5\u7269",
          "\u732A",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F43D}",
        tags: [
          "\u30D6\u30BF",
          "\u8C5A",
          "\u9854",
          "\u9F3B"
        ]
      },
      {
        unicode: "\u{1F40F}",
        tags: [
          "\u30D2\u30C4\u30B8",
          "\u52D5\u7269",
          "\u661F\u5EA7",
          "\u7F8A"
        ]
      },
      {
        unicode: "\u{1F411}",
        tags: [
          "\u30D2\u30C4\u30B8",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F410}",
        tags: [
          "\u30E4\u30AE",
          "\u52D5\u7269",
          "\u661F\u5EA7"
        ]
      },
      {
        unicode: "\u{1F42A}",
        tags: [
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F42B}",
        tags: [
          "\u30D5\u30BF\u30B3\u30D6",
          "\u30E9\u30AF\u30C0",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F999}",
        tags: [
          "\u30A2\u30EB\u30D1\u30AB",
          "\u30B0\u30A2\u30CA\u30B3",
          "\u30D3\u30AF\u30FC\u30CA",
          "\u52D5\u7269",
          "\u7F8A\u6BDB"
        ]
      },
      {
        unicode: "\u{1F992}",
        tags: [
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F418}",
        tags: [
          "\u52D5\u7269",
          "\u8C61"
        ]
      },
      {
        unicode: "\u{1F9A3}",
        tags: [
          "\u52D5\u7269",
          "\u5DE8\u5927",
          "\u7259",
          "\u7D76\u6EC5"
        ]
      },
      {
        unicode: "\u{1F98F}",
        tags: [
          "\u52D5\u7269",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F99B}",
        tags: [
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F42D}",
        tags: [
          "\u306D\u305A\u307F",
          "\u52D5\u7269",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F401}",
        tags: [
          "\u306D\u305A\u307F",
          "\u30CD\u30BA\u30DF",
          "\u30DE\u30A6\u30B9",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F400}",
        tags: [
          "\u306D\u305A\u307F",
          "\u30E9\u30C3\u30C8",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F439}",
        tags: [
          "\u30CD\u30BA\u30DF",
          "\u30CF\u30E0\u30B9\u30BF\u30FC",
          "\u30DA\u30C3\u30C8",
          "\u52D5\u7269",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F430}",
        tags: [
          "\u3046\u3055\u304E",
          "\u30A6\u30B5\u30AE",
          "\u30DA\u30C3\u30C8",
          "\u52D5\u7269",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F407}",
        tags: [
          "\u3046\u3055\u304E",
          "\u30DA\u30C3\u30C8",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F43F}\uFE0F",
        tags: [
          "\u308A\u3059",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F9AB}",
        tags: [
          "\u30C0\u30E0\u4F5C\u308A",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F994}",
        tags: [
          "\u3068\u3052",
          "\u306F\u308A\u306D\u305A\u307F",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F987}",
        tags: [
          "\u3053\u3046\u3082\u308A",
          "\u30D0\u30F3\u30D1\u30A4\u30A2",
          "\u52D5\u7269",
          "\u5438\u8840\u9B3C"
        ]
      },
      {
        unicode: "\u{1F43B}",
        tags: [
          "\u304F\u307E",
          "\u30AF\u30DE",
          "\u52D5\u7269",
          "\u718A",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F43B}\u200D\u2744\uFE0F",
        tags: [
          "\u30AF\u30DE",
          "\u30DB\u30C3\u30AD\u30E7\u30AF\u30B0\u30DE",
          "\u52D5\u7269",
          "\u5317\u6975",
          "\u767D"
        ]
      },
      {
        unicode: "\u{1F428}",
        tags: [
          "\u52D5\u7269",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F43C}",
        tags: [
          "\u30D1\u30F3\u30C0",
          "\u52D5\u7269",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F9A5}",
        tags: [
          "\u306E\u3093\u3073\u308A",
          "\u3082\u306E\u3050\u3055",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F9A6}",
        tags: [
          "\u30E9\u30C3\u30B3",
          "\u52D5\u7269",
          "\u904A\u3073\u597D\u304D",
          "\u9B5A\u3092\u98DF\u3079\u308B"
        ]
      },
      {
        unicode: "\u{1F9A8}",
        tags: [
          "\u52D5\u7269",
          "\u60AA\u81ED"
        ]
      },
      {
        unicode: "\u{1F998}",
        tags: [
          "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2",
          "\u30B8\u30E3\u30F3\u30D7",
          "\u30B8\u30E7\u30FC\u30A4",
          "\u6709\u888B\u985E"
        ]
      },
      {
        unicode: "\u{1F9A1}",
        tags: [
          "\u30DF\u30C4\u30A2\u30CA\u30B0\u30DE",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F43E}",
        tags: [
          "\u52D5\u7269",
          "\u72AC",
          "\u732B",
          "\u8DB3\u8DE1"
        ]
      },
      {
        unicode: "\u{1F983}",
        tags: [
          "\u30BF\u30FC\u30AD\u30FC",
          "\u52D5\u7269",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F414}",
        tags: [
          "\u52D5\u7269",
          "\u9854",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F413}",
        tags: [
          "\u52D5\u7269",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F423}",
        tags: [
          "\u3072\u306A",
          "\u3072\u3088\u3053",
          "\u52D5\u7269",
          "\u9854",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F424}",
        tags: [
          "\u3072\u306A",
          "\u52D5\u7269",
          "\u6A2A\u3092\u5411\u3044\u3066\u3044\u308B\u3072\u3088\u3053",
          "\u9854",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F425}",
        tags: [
          "\u3072\u306A",
          "\u3072\u3088\u3053",
          "\u52D5\u7269",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F426}\uFE0F",
        tags: [
          "\u52D5\u7269",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F427}",
        tags: [
          "\u52D5\u7269",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F54A}\uFE0F",
        tags: [
          "\u52D5\u7269",
          "\u5E73\u548C",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F985}",
        tags: [
          "\u52D5\u7269",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F986}",
        tags: [
          "\u52D5\u7269",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F9A2}",
        tags: [
          "\u3072\u306A",
          "\u307F\u306B\u304F\u3044\u30A2\u30D2\u30EB\u306E\u5B50",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F989}",
        tags: [
          "\u52D5\u7269",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F9A4}",
        tags: [
          "\u30E2\u30FC\u30EA\u30B7\u30E3\u30B9\u5CF6",
          "\u7D76\u6EC5",
          "\u98DB\u3079\u306A\u3044\u9CE5",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1FAB6}",
        tags: [
          "\u7FBD\u6BDB",
          "\u8EFD\u3044",
          "\u98DB\u3076",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F9A9}",
        tags: [
          "\u30D4\u30F3\u30AF\u8272",
          "\u52D5\u7269",
          "\u71B1\u5E2F",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F99A}",
        tags: [
          "\u30D4\u30FC\u30B3\u30C3\u30AF",
          "\u5B54\u96C0",
          "\u6D3E\u624B",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F99C}",
        tags: [
          "\u3057\u3083\u3079\u308B",
          "\u6D77\u8CCA",
          "\u9CE5"
        ]
      },
      {
        unicode: "\u{1F438}",
        tags: [
          "\u30AB\u30A8\u30EB",
          "\u52D5\u7269",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F40A}",
        tags: [
          "\u52D5\u7269",
          "\u722C\u866B\u985E"
        ]
      },
      {
        unicode: "\u{1F422}",
        tags: [
          "\u52D5\u7269",
          "\u722C\u866B\u985E"
        ]
      },
      {
        unicode: "\u{1F98E}",
        tags: [
          "\u52D5\u7269",
          "\u722C\u866B\u985E"
        ]
      },
      {
        unicode: "\u{1F40D}",
        tags: [
          "\u52D5\u7269",
          "\u661F\u5EA7",
          "\u6BD2",
          "\u722C\u866B\u985E"
        ]
      },
      {
        unicode: "\u{1F432}",
        tags: [
          "\u30C9\u30E9\u30B4\u30F3",
          "\u52D5\u7269",
          "\u7ADC",
          "\u9854",
          "\u9F8D"
        ]
      },
      {
        unicode: "\u{1F409}",
        tags: [
          "\u52D5\u7269",
          "\u7ADC",
          "\u9F8D"
        ]
      },
      {
        unicode: "\u{1F995}",
        tags: [
          "\u30C7\u30A3\u30D7\u30ED\u30C9\u30AF\u30B9",
          "\u30D6\u30E9\u30AD\u30AA\u30B5\u30A6\u30EB\u30B9",
          "\u6050\u7ADC",
          "\u7ADC\u811A\u985E"
        ]
      },
      {
        unicode: "\u{1F996}",
        tags: [
          "\u6050\u7ADC"
        ]
      },
      {
        unicode: "\u{1F433}",
        tags: [
          "\u30AF\u30B8\u30E9",
          "\u52D5\u7269",
          "\u6F6E\u5439\u304D"
        ]
      },
      {
        unicode: "\u{1F40B}",
        tags: [
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F42C}",
        tags: [
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F9AD}",
        tags: [
          "\u30A2\u30B7\u30AB",
          "\u30C8\u30C9",
          "\u52D5\u7269",
          "\u6D77\u7363"
        ]
      },
      {
        unicode: "\u{1F41F}\uFE0F",
        tags: [
          "\u52D5\u7269",
          "\u661F\u5EA7"
        ]
      },
      {
        unicode: "\u{1F420}",
        tags: [
          "\u52D5\u7269",
          "\u9B5A"
        ]
      },
      {
        unicode: "\u{1F421}",
        tags: [
          "\u52D5\u7269",
          "\u9B5A"
        ]
      },
      {
        unicode: "\u{1F988}",
        tags: [
          "\u52D5\u7269",
          "\u9B5A"
        ]
      },
      {
        unicode: "\u{1F419}",
        tags: [
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F41A}",
        tags: [
          "\u52D5\u7269",
          "\u8C9D"
        ]
      },
      {
        unicode: "\u{1F40C}",
        tags: [
          "\u3067\u3093\u3067\u3093\u866B",
          "\u866B"
        ]
      },
      {
        unicode: "\u{1F98B}",
        tags: [
          "\u866B"
        ]
      },
      {
        unicode: "\u{1F41B}",
        tags: [
          "\u828B\u866B",
          "\u866B"
        ]
      },
      {
        unicode: "\u{1F41C}",
        tags: [
          "\u866B"
        ]
      },
      {
        unicode: "\u{1F41D}",
        tags: [
          "\u30CF\u30C1",
          "\u866B"
        ]
      },
      {
        unicode: "\u{1FAB2}",
        tags: [
          "\u3064\u306E",
          "\u6606\u866B",
          "\u866B"
        ]
      },
      {
        unicode: "\u{1F41E}",
        tags: [
          "\u866B"
        ]
      },
      {
        unicode: "\u{1F997}",
        tags: [
          "\u30B3\u30AA\u30ED\u30AE",
          "\u866B"
        ]
      },
      {
        unicode: "\u{1FAB3}",
        tags: [
          "\u5BB3\u866B",
          "\u866B"
        ]
      },
      {
        unicode: "\u{1F577}\uFE0F",
        tags: [
          "\u30B9\u30D1\u30A4\u30C0\u30FC",
          "\u866B"
        ]
      },
      {
        unicode: "\u{1F578}\uFE0F",
        tags: [
          "\u30AF\u30E2"
        ]
      },
      {
        unicode: "\u{1F982}",
        tags: [
          "\u661F\u5EA7",
          "\u866B"
        ]
      },
      {
        unicode: "\u{1F99F}",
        tags: [
          "\u30A6\u30A4\u30EB\u30B9",
          "\u30DE\u30E9\u30EA\u30A2",
          "\u71B1",
          "\u75C5\u6C17",
          "\u866B"
        ]
      },
      {
        unicode: "\u{1FAB0}",
        tags: [
          "\u4E0D\u6F54",
          "\u5BB3\u866B",
          "\u75C5\u539F\u83CC",
          "\u866B"
        ]
      },
      {
        unicode: "\u{1FAB1}",
        tags: [
          "\u5BC4\u751F\u866B",
          "\u866B"
        ]
      },
      {
        unicode: "\u{1F9A0}",
        tags: [
          "\u30A2\u30E1\u30FC\u30D0",
          "\u30A6\u30A4\u30EB\u30B9",
          "\u30D0\u30AF\u30C6\u30EA\u30A2",
          "\u7D30\u83CC"
        ]
      },
      {
        unicode: "\u{1F490}",
        tags: [
          "\u30D6\u30FC\u30B1",
          "\u82B1"
        ]
      },
      {
        unicode: "\u{1F338}",
        tags: [
          "\u82B1"
        ]
      },
      {
        unicode: "\u{1F4AE}",
        tags: [
          "\u306F\u306A\u307E\u308B",
          "\u3088\u304F\u3067\u304D\u307E\u3057\u305F",
          "\u82B1"
        ]
      },
      {
        unicode: "\u{1F3F5}\uFE0F",
        tags: [
          "\u690D\u7269",
          "\u82B1"
        ]
      },
      {
        unicode: "\u{1F339}",
        tags: [
          "\u82B1"
        ]
      },
      {
        unicode: "\u{1F940}",
        tags: [
          "\u3057\u304A\u308C\u305F",
          "\u82B1"
        ]
      },
      {
        unicode: "\u{1F33A}",
        tags: [
          "\u82B1"
        ]
      },
      {
        unicode: "\u{1F33B}",
        tags: [
          "\u82B1"
        ]
      },
      {
        unicode: "\u{1F33C}",
        tags: [
          "\u54B2\u3044\u305F\u82B1",
          "\u82B1"
        ]
      },
      {
        unicode: "\u{1F337}",
        tags: [
          "\u82B1"
        ]
      },
      {
        unicode: "\u{1F331}",
        tags: [
          "\u53CC\u8449",
          "\u82BD"
        ]
      },
      {
        unicode: "\u{1FAB4}",
        tags: [
          "\u30D9\u30E9\u30F3\u30C0",
          "\u6210\u9577",
          "\u690D\u7269",
          "\u6C34\u3084\u308A",
          "\u7DD1",
          "\u82D7"
        ]
      },
      {
        unicode: "\u{1F332}",
        tags: [
          "\u6728"
        ]
      },
      {
        unicode: "\u{1F333}",
        tags: [
          "\u6728"
        ]
      },
      {
        unicode: "\u{1F334}",
        tags: [
          "\u30E4\u30B7",
          "\u6728"
        ]
      },
      {
        unicode: "\u{1F335}",
        tags: [
          "\u690D\u7269"
        ]
      },
      {
        unicode: "\u{1F33E}",
        tags: [
          "\u30B9\u30B9\u30AD",
          "\u7A32\u7A42",
          "\u8349"
        ]
      },
      {
        unicode: "\u{1F33F}",
        tags: [
          "\u8349",
          "\u8449",
          "\u85AC\u8349"
        ]
      },
      {
        unicode: "\u2618\uFE0F",
        tags: [
          "\u8349",
          "\u8449"
        ]
      },
      {
        unicode: "\u{1F340}",
        tags: [
          "4",
          "\u30AF\u30ED\u30FC\u30D0\u30FC",
          "\u8349",
          "\u8449"
        ]
      },
      {
        unicode: "\u{1F341}",
        tags: [
          "\u3082\u307F\u3058",
          "\u7D05\u8449"
        ]
      },
      {
        unicode: "\u{1F342}",
        tags: [
          "\u6728\u306E\u8449",
          "\u67AF\u308C\u8449"
        ]
      },
      {
        unicode: "\u{1F343}",
        tags: [
          "\u6728\u306E\u8449",
          "\u843D\u3061\u8449",
          "\u98A8"
        ]
      }
    ]
  },
  {
    group: 4,
    emojiList: [
      {
        unicode: "\u{1F347}",
        tags: [
          "\u30B0\u30EC\u30FC\u30D7",
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F348}",
        tags: [
          "\u679C\u7269",
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F349}",
        tags: [
          "\u679C\u7269",
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F34A}",
        tags: [
          "\u30AA\u30EC\u30F3\u30B8",
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F34B}",
        tags: [
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F34C}",
        tags: [
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F34D}",
        tags: [
          "\u30C8\u30ED\u30D4\u30AB\u30EB",
          "\u30D1\u30A4\u30F3",
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F96D}",
        tags: [
          "\u30C8\u30ED\u30D4\u30AB\u30EB",
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F34E}",
        tags: [
          "\u308A\u3093\u3054",
          "\u30A2\u30C3\u30D7\u30EB",
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F34F}",
        tags: [
          "\u308A\u3093\u3054",
          "\u30A2\u30C3\u30D7\u30EB",
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F350}",
        tags: [
          "\u30CA\u30B7",
          "\u679C\u7269",
          "\u897F\u6D0B\u30CA\u30B7"
        ]
      },
      {
        unicode: "\u{1F351}",
        tags: [
          "\u30D4\u30FC\u30C1",
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F352}",
        tags: [
          "\u30C1\u30A7\u30EA\u30FC",
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F353}",
        tags: [
          "\u30B9\u30C8\u30ED\u30D9\u30EA\u30FC",
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1FAD0}",
        tags: [
          "\u30D3\u30EB\u30D9\u30EA\u30FC",
          "\u30D9\u30EA\u30FC",
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F95D}",
        tags: [
          "\u30AD\u30A6\u30A4",
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F345}",
        tags: [
          "\u679C\u7269",
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1FAD2}",
        tags: [
          "\u5B9F",
          "\u679C\u5B9F"
        ]
      },
      {
        unicode: "\u{1F965}",
        tags: [
          "\u30B3\u30B3\u30CA\u30C3\u30C4",
          "\u30E4\u30B7\u306E\u5B9F",
          "\u679C\u7269"
        ]
      },
      {
        unicode: "\u{1F951}",
        tags: [
          "\u679C\u7269",
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F346}",
        tags: [
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F954}",
        tags: [
          "\u30A4\u30E2",
          "\u30DD\u30C6\u30C8",
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F955}",
        tags: [
          "\u30CB\u30F3\u30B8\u30F3",
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F33D}",
        tags: [
          "\u30B3\u30FC\u30F3",
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F336}\uFE0F",
        tags: [
          "\u8F9B\u3044",
          "\u91CE\u83DC",
          "\u9999\u8F9B\u6599"
        ]
      },
      {
        unicode: "\u{1FAD1}",
        tags: [
          "\u3068\u3046\u304C\u3089\u3057",
          "\u30D1\u30D7\u30EA\u30AB",
          "\u30D4\u30FC\u30DE\u30F3",
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F952}",
        tags: [
          "\u30D4\u30AF\u30EB\u30B9",
          "\u6F2C\u3051\u7269",
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F96C}",
        tags: [
          "\u30AD\u30E3\u30D9\u30C4",
          "\u30B1\u30FC\u30EB",
          "\u30C1\u30F3\u30B2\u30F3\u83DC",
          "\u30EC\u30BF\u30B9"
        ]
      },
      {
        unicode: "\u{1F966}",
        tags: [
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F9C4}",
        tags: [
          "\u306B\u304A\u3044",
          "\u85AC\u5473",
          "\u91CE\u83DC",
          "\u9999\u308A"
        ]
      },
      {
        unicode: "\u{1F9C5}",
        tags: [
          "\u306D\u304E",
          "\u7389\u306D\u304E",
          "\u85AC\u5473",
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F344}",
        tags: [
          "\u304D\u306E\u3053",
          "\u30DE\u30C3\u30B7\u30E5\u30EB\u30FC\u30E0",
          "\u6BD2",
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F95C}",
        tags: [
          "\u30CA\u30C3\u30C4",
          "\u843D\u82B1\u751F",
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F330}",
        tags: [
          "\u91CE\u83DC"
        ]
      },
      {
        unicode: "\u{1F35E}",
        tags: [
          "\u30D1\u30F3",
          "\u30D9\u30FC\u30AB\u30EA\u30FC"
        ]
      },
      {
        unicode: "\u{1F950}",
        tags: [
          "\u30D1\u30F3",
          "\u30D5\u30E9\u30F3\u30B9",
          "\u30D9\u30FC\u30AB\u30EA\u30FC"
        ]
      },
      {
        unicode: "\u{1F956}",
        tags: [
          "\u30D1\u30F3",
          "\u30D5\u30E9\u30F3\u30B9\u30D1\u30F3",
          "\u30D9\u30FC\u30AB\u30EA\u30FC"
        ]
      },
      {
        unicode: "\u{1FAD3}",
        tags: [
          "\u30A2\u30EC\u30D1",
          "\u30CA\u30F3",
          "\u30D1\u30F3",
          "\u30D4\u30BF\u30D1\u30F3",
          "\u30E9\u30D0\u30B7"
        ]
      },
      {
        unicode: "\u{1F968}",
        tags: [
          "\u306D\u3058\u308A",
          "\u30D1\u30F3"
        ]
      },
      {
        unicode: "\u{1F96F}",
        tags: [
          "\u30AF\u30EA\u30FC\u30E0\u30C1\u30FC\u30BA",
          "\u30D1\u30F3\u5C4B",
          "\u30D9\u30FC\u30AB\u30EA\u30FC"
        ]
      },
      {
        unicode: "\u{1F95E}",
        tags: [
          "\u30DB\u30C3\u30C8\u30B1\u30FC\u30AD"
        ]
      },
      {
        unicode: "\u{1F9C7}",
        tags: [
          "\u3075\u3093\u308F\u308A",
          "\u713C\u304D\u83D3\u5B50"
        ]
      },
      {
        unicode: "\u{1F9C0}",
        tags: [
          "\u30C1\u30FC\u30BA"
        ]
      },
      {
        unicode: "\u{1F356}",
        tags: [
          "\u3082\u3082\u8089",
          "\u8089"
        ]
      },
      {
        unicode: "\u{1F357}",
        tags: [
          "\u3082\u3082\u8089",
          "\u30C1\u30AD\u30F3",
          "\u8089",
          "\u9AA8\u4ED8\u304D\u8089"
        ]
      },
      {
        unicode: "\u{1F969}",
        tags: [
          "\u30B9\u30C6\u30FC\u30AD",
          "\u30D3\u30FC\u30D5",
          "\u30DD\u30FC\u30AF",
          "\u30E9\u30E0",
          "\u8089"
        ]
      },
      {
        unicode: "\u{1F953}",
        tags: [
          "\u8089"
        ]
      },
      {
        unicode: "\u{1F354}",
        tags: [
          "\u30D0\u30FC\u30AC\u30FC"
        ]
      },
      {
        unicode: "\u{1F35F}",
        tags: [
          "\u30D5\u30EC\u30F3\u30C1\u30D5\u30E9\u30A4",
          "\u30DD\u30C6\u30C8",
          "\u30DD\u30C6\u30C8\u30D5\u30E9\u30A4"
        ]
      },
      {
        unicode: "\u{1F355}",
        tags: [
          "\u30C1\u30FC\u30BA",
          "\u30D4\u30C3\u30C4\u30A1"
        ]
      },
      {
        unicode: "\u{1F32D}",
        tags: [
          "\u30BD\u30FC\u30BB\u30FC\u30B8",
          "\u30D5\u30E9\u30F3\u30AF\u30D5\u30EB\u30C8"
        ]
      },
      {
        unicode: "\u{1F96A}",
        tags: [
          "\u30D1\u30F3"
        ]
      },
      {
        unicode: "\u{1F32E}",
        tags: [
          "\u30E1\u30AD\u30B7\u30AB\u30F3"
        ]
      },
      {
        unicode: "\u{1F32F}",
        tags: [
          "\u30BD\u30D5\u30C8\u30BF\u30B3\u30B9",
          "\u30E1\u30AD\u30B7\u30AB\u30F3"
        ]
      },
      {
        unicode: "\u{1FAD4}",
        tags: [
          "\u3061\u307E\u304D",
          "\u30BF\u30DE\u30EC\u30B9",
          "\u30E1\u30AD\u30B7\u30AB\u30F3"
        ]
      },
      {
        unicode: "\u{1F959}",
        tags: [
          "\u30B1\u30D0\u30D6",
          "\u30E9\u30C3\u30D7\u30B5\u30F3\u30C9"
        ]
      },
      {
        unicode: "\u{1F9C6}",
        tags: [
          "\u30B3\u30ED\u30C3\u30B1",
          "\u30D2\u30E8\u30B3\u30DE\u30E1",
          "\u8089\u56E3\u5B50"
        ]
      },
      {
        unicode: "\u{1F95A}",
        tags: [
          "\u5375"
        ]
      },
      {
        unicode: "\u{1F373}",
        tags: [
          "\u30D5\u30E9\u30A4\u30D1\u30F3",
          "\u5375",
          "\u76EE\u7389\u713C\u304D"
        ]
      },
      {
        unicode: "\u{1F958}",
        tags: [
          "\u30B7\u30FC\u30D5\u30FC\u30C9"
        ]
      },
      {
        unicode: "\u{1F372}",
        tags: [
          "\u30B7\u30C1\u30E5\u30FC",
          "\u716E\u7269",
          "\u716E\u8FBC\u307F"
        ]
      },
      {
        unicode: "\u{1FAD5}",
        tags: [
          "\u30B9\u30A4\u30B9",
          "\u30C1\u30E7\u30B3",
          "\u30C1\u30FC\u30BA",
          "\u6EB6\u304B\u3059",
          "\u934B"
        ]
      },
      {
        unicode: "\u{1F963}",
        tags: [
          "\u304A\u304B\u3086",
          "\u30B7\u30EA\u30A2\u30EB",
          "\u671D\u98DF"
        ]
      },
      {
        unicode: "\u{1F957}",
        tags: [
          "\u30B0\u30EA\u30FC\u30F3",
          "\u30B5\u30E9\u30C0"
        ]
      },
      {
        unicode: "\u{1F37F}",
        tags: [
          "\u304A\u83D3\u5B50"
        ]
      },
      {
        unicode: "\u{1F9C8}",
        tags: [
          "\u4E73\u88FD\u54C1"
        ]
      },
      {
        unicode: "\u{1F9C2}",
        tags: [
          "\u632F\u308A\u304B\u3051\u5BB9\u5668",
          "\u85AC\u5473",
          "\u8ABF\u5473\u6599"
        ]
      },
      {
        unicode: "\u{1F96B}",
        tags: [
          "\u7F36",
          "\u975E\u5E38\u98DF"
        ]
      },
      {
        unicode: "\u{1F371}",
        tags: [
          "\u5E55\u306E\u5185",
          "\u99C5\u5F01"
        ]
      },
      {
        unicode: "\u{1F358}",
        tags: [
          "\u304A\u83D3\u5B50"
        ]
      },
      {
        unicode: "\u{1F359}",
        tags: [
          "\u304A\u3080\u3059\u3073",
          "\u7C73"
        ]
      },
      {
        unicode: "\u{1F35A}",
        tags: [
          "\u30E9\u30A4\u30B9",
          "\u7C73"
        ]
      },
      {
        unicode: "\u{1F35B}",
        tags: [
          "\u30AB\u30EC\u30FC",
          "\u30E9\u30A4\u30B9"
        ]
      },
      {
        unicode: "\u{1F35C}",
        tags: [
          "\u3069\u3093\u3076\u308A",
          "\u71B1\u3005"
        ]
      },
      {
        unicode: "\u{1F35D}",
        tags: [
          "\u30B9\u30D1\u30B2\u30C3\u30C6\u30A3\u30FC",
          "\u30D1\u30B9\u30BF"
        ]
      },
      {
        unicode: "\u{1F360}",
        tags: [
          "\u30B5\u30C4\u30DE\u30A4\u30E2",
          "\u828B"
        ]
      },
      {
        unicode: "\u{1F362}",
        tags: [
          "\u304A\u3067\u3093"
        ]
      },
      {
        unicode: "\u{1F363}",
        tags: [
          "\u304A\u5BFF\u53F8"
        ]
      },
      {
        unicode: "\u{1F364}",
        tags: [
          "\u30A8\u30D3",
          "\u30D5\u30E9\u30A4",
          "\u5929\u3077\u3089"
        ]
      },
      {
        unicode: "\u{1F365}",
        tags: [
          "\u6E26\u5DFB\u304D",
          "\u7DF4\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F96E}",
        tags: [
          "\u304A\u795D\u3044",
          "\u4E2D\u79CB\u7BC0",
          "\u4E2D\u83EF\u83D3\u5B50",
          "\u79CB"
        ]
      },
      {
        unicode: "\u{1F361}",
        tags: [
          "\u304A\u56E3\u5B50",
          "\u548C\u83D3\u5B50"
        ]
      },
      {
        unicode: "\u{1F95F}",
        tags: [
          "\u304E\u3087\u3046\u3056",
          "\u8089\u307E\u3093"
        ]
      },
      {
        unicode: "\u{1F960}",
        tags: [
          "\u304A\u307F\u304F\u3058"
        ]
      },
      {
        unicode: "\u{1F961}",
        tags: [
          "\u4E2D\u83EF",
          "\u5F01\u5F53",
          "\u6301\u3061\u5E30\u308A"
        ]
      },
      {
        unicode: "\u{1F980}",
        tags: [
          "\u52D5\u7269",
          "\u661F\u5EA7"
        ]
      },
      {
        unicode: "\u{1F99E}",
        tags: [
          "\u306F\u3055\u307F",
          "\u30B7\u30FC\u30D5\u30FC\u30C9",
          "\u30D3\u30B9\u30AF",
          "\u30ED\u30D6\u30B9\u30BF\u30FC"
        ]
      },
      {
        unicode: "\u{1F990}",
        tags: [
          "\u30B7\u30E5\u30EA\u30F3\u30D7",
          "\u30B7\u30FC\u30D5\u30FC\u30C9",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F991}",
        tags: [
          "\u30B7\u30FC\u30D5\u30FC\u30C9",
          "\u52D5\u7269"
        ]
      },
      {
        unicode: "\u{1F9AA}",
        tags: [
          "\u30AA\u30A4\u30B9\u30BF\u30FC",
          "\u30AB\u30AD",
          "\u30B7\u30FC\u30D5\u30FC\u30C9",
          "\u751F\u30AC\u30AD",
          "\u8C9D",
          "\u9B5A\u4ECB"
        ]
      },
      {
        unicode: "\u{1F366}",
        tags: [
          "\u30A2\u30A4\u30B9",
          "\u30B9\u30A4\u30FC\u30C4",
          "\u30BD\u30D5\u30C8",
          "\u30C7\u30B6\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F367}",
        tags: [
          "\u30A2\u30A4\u30B9",
          "\u30C7\u30B6\u30FC\u30C8",
          "\u6C37"
        ]
      },
      {
        unicode: "\u{1F368}",
        tags: [
          "\u30A2\u30A4\u30B9",
          "\u30B9\u30A4\u30FC\u30C4",
          "\u30C7\u30B6\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F369}",
        tags: [
          "\u304A\u83D3\u5B50",
          "\u30B9\u30A4\u30FC\u30C4",
          "\u30C7\u30B6\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F36A}",
        tags: [
          "\u304A\u83D3\u5B50",
          "\u30B9\u30A4\u30FC\u30C4",
          "\u30C7\u30B6\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F382}",
        tags: [
          "\u30B1\u30FC\u30AD",
          "\u30D0\u30FC\u30B9\u30C7\u30FC",
          "\u8A95\u751F\u65E5"
        ]
      },
      {
        unicode: "\u{1F370}",
        tags: [
          "\u304A\u83D3\u5B50",
          "\u30B1\u30FC\u30AD",
          "\u30B9\u30A4\u30FC\u30C4",
          "\u30C7\u30B6\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F9C1}",
        tags: [
          "\u304A\u83D3\u5B50",
          "\u30B1\u30FC\u30AD",
          "\u30B9\u30A4\u30FC\u30C4",
          "\u30D9\u30FC\u30AB\u30EA\u30FC"
        ]
      },
      {
        unicode: "\u{1F967}",
        tags: [
          "\u304A\u83D3\u5B50",
          "\u30BF\u30EB\u30C8"
        ]
      },
      {
        unicode: "\u{1F36B}",
        tags: [
          "\u304A\u83D3\u5B50",
          "\u30B9\u30A4\u30FC\u30C4",
          "\u30C1\u30E7\u30B3",
          "\u30C7\u30B6\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F36C}",
        tags: [
          "\u3042\u3081",
          "\u304A\u83D3\u5B50"
        ]
      },
      {
        unicode: "\u{1F36D}",
        tags: [
          "\u3042\u3081",
          "\u304A\u83D3\u5B50",
          "\u30AD\u30E3\u30F3\u30C7\u30A3",
          "\u68D2\u4ED8\u304D\u30AD\u30E3\u30F3\u30C7\u30A3"
        ]
      },
      {
        unicode: "\u{1F36E}",
        tags: [
          "\u304A\u83D3\u5B50",
          "\u30B9\u30A4\u30FC\u30C4",
          "\u30C7\u30B6\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F36F}",
        tags: [
          "\u30CF\u30CB\u30FC",
          "\u7518\u3044"
        ]
      },
      {
        unicode: "\u{1F37C}",
        tags: [
          "\u30DF\u30EB\u30AF",
          "\u8D64\u3061\u3083\u3093"
        ]
      },
      {
        unicode: "\u{1F95B}",
        tags: [
          "\u30B3\u30C3\u30D7",
          "\u30DF\u30EB\u30AF",
          "\u725B\u4E73"
        ]
      },
      {
        unicode: "\u2615\uFE0F",
        tags: [
          "\u30B3\u30FC\u30D2\u30FC",
          "\u30DB\u30C3\u30C8\u30C9\u30EA\u30F3\u30AF",
          "\u7D05\u8336",
          "\u98F2\u307F\u7269"
        ]
      },
      {
        unicode: "\u{1FAD6}",
        tags: [
          "\u304A\u8336",
          "\u30DD\u30C3\u30C8",
          "\u8336\u5668",
          "\u98F2\u307F\u7269"
        ]
      },
      {
        unicode: "\u{1F375}",
        tags: [
          "\u304A\u8336",
          "\u7DD1\u8336",
          "\u98F2\u307F\u7269"
        ]
      },
      {
        unicode: "\u{1F376}",
        tags: [
          "\u65E5\u672C\u9152",
          "\u9152"
        ]
      },
      {
        unicode: "\u{1F37E}",
        tags: [
          "\u30B7\u30E3\u30F3\u30DA\u30F3",
          "\u30B9\u30D1\u30FC\u30AF\u30EA\u30F3\u30B0\u30EF\u30A4\u30F3",
          "\u30B9\u30D7\u30DE\u30F3\u30C6",
          "\u30DC\u30C8\u30EB",
          "\u6CE1"
        ]
      },
      {
        unicode: "\u{1F377}",
        tags: [
          "\u30B0\u30E9\u30B9",
          "\u30D0\u30FC",
          "\u30EF\u30A4\u30F3"
        ]
      },
      {
        unicode: "\u{1F378}\uFE0F",
        tags: [
          "\u30AB\u30AF\u30C6\u30EB",
          "\u30B0\u30E9\u30B9",
          "\u30D0\u30FC"
        ]
      },
      {
        unicode: "\u{1F379}",
        tags: [
          "\u30AB\u30AF\u30C6\u30EB",
          "\u30C8\u30ED\u30D4\u30AB\u30EB",
          "\u30D0\u30FC"
        ]
      },
      {
        unicode: "\u{1F37A}",
        tags: [
          "\u30B8\u30E7\u30C3\u30AD",
          "\u30D0\u30FC",
          "\u30D3\u30FC\u30EB",
          "\u5C45\u9152\u5C4B"
        ]
      },
      {
        unicode: "\u{1F37B}",
        tags: [
          "\u30B8\u30E7\u30C3\u30AD",
          "\u30D3\u30FC\u30EB",
          "\u4E7E\u676F",
          "\u5BB4\u4F1A"
        ]
      },
      {
        unicode: "\u{1F942}",
        tags: [
          "\u30B7\u30E3\u30F3\u30D1\u30F3",
          "\u30B7\u30E3\u30F3\u30DA\u30F3",
          "\u30B9\u30D1\u30FC\u30AF\u30EA\u30F3\u30B0\u30EF\u30A4\u30F3",
          "\u30B9\u30D7\u30DE\u30F3\u30C6",
          "\u4E7E\u676F"
        ]
      },
      {
        unicode: "\u{1F943}",
        tags: [
          "\u30A6\u30A3\u30B9\u30AD\u30FC",
          "\u30A6\u30A4\u30B9\u30AD\u30FC",
          "\u30B0\u30E9\u30B9",
          "\u30BF\u30F3\u30D6\u30E9\u30FC"
        ]
      },
      {
        unicode: "\u{1F964}",
        tags: [
          "\u30B3\u30C3\u30D7",
          "\u30B8\u30E5\u30FC\u30B9"
        ]
      },
      {
        unicode: "\u{1F9CB}",
        tags: [
          "\u304A\u8336",
          "\u30BF\u30D4\u30AA\u30AB",
          "\u30C9\u30EA\u30F3\u30AF",
          "\u30D0\u30D6\u30EB\u30C6\u30A3\u30FC",
          "\u30DF\u30EB\u30AF\u30C6\u30A3\u30FC"
        ]
      },
      {
        unicode: "\u{1F9C3}",
        tags: [
          "\u30B8\u30E5\u30FC\u30B9",
          "\u30C9\u30EA\u30F3\u30AF",
          "\u98F2\u307F\u7269"
        ]
      },
      {
        unicode: "\u{1F9C9}",
        tags: [
          "\u304A\u8336",
          "\u30C9\u30EA\u30F3\u30AF",
          "\u98F2\u307F\u7269"
        ]
      },
      {
        unicode: "\u{1F9CA}",
        tags: [
          "\u51B7\u305F\u3044",
          "\u6C37"
        ]
      },
      {
        unicode: "\u{1F962}",
        tags: [
          "\u304A\u306F\u3057"
        ]
      },
      {
        unicode: "\u{1F37D}\uFE0F",
        tags: [
          "\u304A\u76BF",
          "\u30CA\u30A4\u30D5",
          "\u30D5\u30A9\u30FC\u30AF",
          "\u76BF"
        ]
      },
      {
        unicode: "\u{1F374}",
        tags: [
          "\u30AB\u30C8\u30E9\u30EA\u30FC",
          "\u30CA\u30A4\u30D5",
          "\u30D5\u30A9\u30FC\u30AF",
          "\u30EC\u30B9\u30C8\u30E9\u30F3"
        ]
      },
      {
        unicode: "\u{1F944}",
        tags: [
          "\u30AB\u30C8\u30E9\u30EA\u30FC",
          "\u98DF\u5668"
        ]
      },
      {
        unicode: "\u{1F52A}",
        tags: [
          "\u30CA\u30A4\u30D5",
          "\u6599\u7406"
        ]
      },
      {
        unicode: "\u{1F3FA}",
        tags: [
          "\u304B\u3081",
          "\u661F\u5EA7",
          "\u6C34\u74F6"
        ]
      }
    ]
  },
  {
    group: 5,
    emojiList: [
      {
        unicode: "\u{1F30D}\uFE0F",
        tags: [
          "\u30A2\u30D5\u30EA\u30AB",
          "\u30E8\u30FC\u30ED\u30C3\u30D1",
          "\u5730\u7403"
        ]
      },
      {
        unicode: "\u{1F30E}\uFE0F",
        tags: [
          "\u30A2\u30E1\u30EA\u30AB",
          "\u30A2\u30E1\u30EA\u30AB\u5927\u9678",
          "\u5730\u7403"
        ]
      },
      {
        unicode: "\u{1F30F}\uFE0F",
        tags: [
          "\u30A2\u30B8\u30A2",
          "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2",
          "\u5730\u7403"
        ]
      },
      {
        unicode: "\u{1F310}",
        tags: [
          "\u5730\u7403",
          "\u5B50\u5348\u7DDA"
        ]
      },
      {
        unicode: "\u{1F5FA}\uFE0F",
        tags: [
          "\u4E16\u754C",
          "\u5730\u56F3"
        ]
      },
      {
        unicode: "\u{1F5FE}",
        tags: [
          "\u5730\u56F3",
          "\u65E5\u672C"
        ]
      },
      {
        unicode: "\u{1F9ED}",
        tags: [
          "\u30AA\u30EA\u30A8\u30F3\u30C6\u30FC\u30EA\u30F3\u30B0",
          "\u78C1\u77F3",
          "\u822A\u6D77",
          "\u822A\u7A7A"
        ]
      },
      {
        unicode: "\u{1F3D4}\uFE0F",
        tags: [
          "\u51A0\u96EA",
          "\u5C71",
          "\u96EA"
        ]
      },
      {
        unicode: "\u26F0\uFE0F",
        tags: [
          "\u5C71\u5CB3"
        ]
      },
      {
        unicode: "\u{1F30B}",
        tags: [
          "\u5674\u706B",
          "\u5C71"
        ]
      },
      {
        unicode: "\u{1F5FB}",
        tags: [
          "\u5C71"
        ]
      },
      {
        unicode: "\u{1F3D5}\uFE0F",
        tags: [
          "\u30C6\u30F3\u30C8",
          "\u5C71"
        ]
      },
      {
        unicode: "\u{1F3D6}\uFE0F",
        tags: [
          "\u30D1\u30E9\u30BD\u30EB",
          "\u30D3\u30FC\u30C1",
          "\u7802\u6D5C"
        ]
      },
      {
        unicode: "\u{1F3DC}\uFE0F",
        tags: [
          "\u30B5\u30DC\u30C6\u30F3",
          "\u30B5\u30DC\u30C6\u30F3\u306E\u3042\u308B\u7802\u6F20"
        ]
      },
      {
        unicode: "\u{1F3DD}\uFE0F",
        tags: [
          "\u30E4\u30B7",
          "\u30E4\u30B7\u306E\u6728\u306E\u3042\u308B\u5CF6",
          "\u5CF6"
        ]
      },
      {
        unicode: "\u{1F3DE}\uFE0F",
        tags: [
          "\u516C\u5712",
          "\u81EA\u7136"
        ]
      },
      {
        unicode: "\u{1F3DF}\uFE0F",
        tags: [
          "\u30B9\u30BF\u30B8\u30A2\u30E0",
          "\u91CE\u7403\u5834"
        ]
      },
      {
        unicode: "\u{1F3DB}\uFE0F",
        tags: [
          "\u53F2\u8DE1",
          "\u6B74\u53F2",
          "\u6B74\u53F2\u7684\u5EFA\u9020\u7269"
        ]
      },
      {
        unicode: "\u{1F3D7}\uFE0F",
        tags: [
          "\u30AF\u30EC\u30FC\u30F3",
          "\u5DE5\u4E8B",
          "\u5EFA\u8A2D"
        ]
      },
      {
        unicode: "\u{1F9F1}",
        tags: [
          "\u3057\u3063\u304F\u3044",
          "\u30E2\u30EB\u30BF\u30EB",
          "\u58C1",
          "\u7C98\u571F"
        ]
      },
      {
        unicode: "\u{1FAA8}",
        tags: [
          "\u5DE8\u5CA9",
          "\u77F3\u6750",
          "\u786C\u3044",
          "\u91CD\u305F\u3044"
        ]
      },
      {
        unicode: "\u{1FAB5}",
        tags: [
          "\u30ED\u30B0",
          "\u6728\u6750",
          "\u6750\u6728",
          "\u6A39\u6728"
        ]
      },
      {
        unicode: "\u{1F6D6}",
        tags: [
          "\u30D0\u30F3\u30AC\u30ED\u30FC",
          "\u30E6\u30EB\u30C8",
          "\u5C0F\u5C4B"
        ]
      },
      {
        unicode: "\u{1F3D8}\uFE0F",
        tags: [
          "\u5BB6",
          "\u8857",
          "\u8907\u6570\u306E\u5BB6"
        ]
      },
      {
        unicode: "\u{1F3DA}\uFE0F",
        tags: [
          "\u5BB6",
          "\u5EFA\u7269",
          "\u7A7A\u304D\u5BB6"
        ]
      },
      {
        unicode: "\u{1F3E0}\uFE0F",
        tags: [
          "\u30DE\u30A4\u30DB\u30FC\u30E0",
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F3E1}",
        tags: [
          "\u30DE\u30A4\u30DB\u30FC\u30E0",
          "\u5BB6",
          "\u5EAD",
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F3E2}",
        tags: [
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F3E3}",
        tags: [
          "\u5EFA\u7269",
          "\u90F5\u4FBF"
        ]
      },
      {
        unicode: "\u{1F3E4}",
        tags: [
          "\u5EFA\u7269",
          "\u90F5\u4FBF"
        ]
      },
      {
        unicode: "\u{1F3E5}",
        tags: [
          "\u533B\u8005",
          "\u5EFA\u7269",
          "\u85AC"
        ]
      },
      {
        unicode: "\u{1F3E6}",
        tags: [
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F3E8}",
        tags: [
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F3E9}",
        tags: [
          "\u30E9\u30D6\u30DB",
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F3EA}",
        tags: [
          "\u30B3\u30F3\u30D3\u30CB\u30A8\u30F3\u30B9\u30B9\u30C8\u30A2",
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F3EB}",
        tags: [
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F3EC}",
        tags: [
          "\u5EFA\u7269",
          "\u767E\u8CA8\u5E97"
        ]
      },
      {
        unicode: "\u{1F3ED}\uFE0F",
        tags: [
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F3EF}",
        tags: [
          "\u5EFA\u7269",
          "\u65E5\u672C"
        ]
      },
      {
        unicode: "\u{1F3F0}",
        tags: [
          "\u30AD\u30E3\u30C3\u30B9\u30EB",
          "\u57CE",
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F492}",
        tags: [
          "\u5EFA\u7269",
          "\u5F0F\u5834",
          "\u6559\u4F1A",
          "\u7D50\u5A5A"
        ]
      },
      {
        unicode: "\u{1F5FC}",
        tags: [
          "\u30BF\u30EF\u30FC",
          "\u6771\u4EAC"
        ]
      },
      {
        unicode: "\u{1F5FD}",
        tags: [
          "\u30A2\u30E1\u30EA\u30AB",
          "\u30CB\u30E5\u30FC\u30E8\u30FC\u30AF",
          "\u5F6B\u50CF"
        ]
      },
      {
        unicode: "\u26EA\uFE0F",
        tags: [
          "\u30AD\u30EA\u30B9\u30C8\u6559",
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F54C}",
        tags: [
          "\u30A4\u30B9\u30E9\u30E0\u6559",
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F6D5}",
        tags: [
          "\u30D2\u30F3\u30BA\u30FC\u6559",
          "\u5B97\u6559",
          "\u5BFA",
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u{1F54D}",
        tags: [
          "\u30E6\u30C0\u30E4\u6559",
          "\u5EFA\u7269"
        ]
      },
      {
        unicode: "\u26E9\uFE0F",
        tags: [
          "\u5EFA\u7269",
          "\u795E\u793E",
          "\u795E\u9053"
        ]
      },
      {
        unicode: "\u{1F54B}",
        tags: [
          "\u30A4\u30B9\u30E9\u30E0\u6559",
          "\u30E1\u30C3\u30AB",
          "\u5EFA\u7269",
          "\u8056\u5730"
        ]
      },
      {
        unicode: "\u26F2\uFE0F",
        tags: [
          "\u5674\u6C34"
        ]
      },
      {
        unicode: "\u26FA\uFE0F",
        tags: [
          "\u30AD\u30E3\u30F3\u30D7"
        ]
      },
      {
        unicode: "\u{1F301}",
        tags: [
          "\u90FD\u4F1A",
          "\u9727"
        ]
      },
      {
        unicode: "\u{1F303}",
        tags: [
          "\u591C",
          "\u591C\u666F",
          "\u661F"
        ]
      },
      {
        unicode: "\u{1F3D9}\uFE0F",
        tags: [
          "\u30D3\u30EB\u7FA4",
          "\u90FD\u4F1A"
        ]
      },
      {
        unicode: "\u{1F304}",
        tags: [
          "\u3054\u6765\u5149",
          "\u592A\u967D",
          "\u65E5\u306E\u51FA",
          "\u671D",
          "\u671D\u65E5"
        ]
      },
      {
        unicode: "\u{1F305}",
        tags: [
          "\u592A\u967D",
          "\u671D",
          "\u671D\u65E5"
        ]
      },
      {
        unicode: "\u{1F306}",
        tags: [
          "\u5915\u65B9",
          "\u5915\u65E5",
          "\u5915\u66AE\u308C",
          "\u90FD\u4F1A"
        ]
      },
      {
        unicode: "\u{1F307}",
        tags: [
          "\u5915\u65B9",
          "\u5915\u66AE\u308C",
          "\u592A\u967D"
        ]
      },
      {
        unicode: "\u{1F309}",
        tags: [
          "\u591C",
          "\u591C\u666F",
          "\u6A4B"
        ]
      },
      {
        unicode: "\u2668\uFE0F",
        tags: [
          "\u6E29\u6CC9"
        ]
      },
      {
        unicode: "\u{1F3A0}",
        tags: [
          "\u904A\u5712\u5730"
        ]
      },
      {
        unicode: "\u{1F3A1}",
        tags: [
          "\u904A\u5712\u5730"
        ]
      },
      {
        unicode: "\u{1F3A2}",
        tags: [
          "\u904A\u5712\u5730"
        ]
      },
      {
        unicode: "\u{1F488}",
        tags: [
          "\u30D0\u30FC\u30D0\u30FC",
          "\u30D8\u30A2\u30B5\u30ED\u30F3",
          "\u7406\u9AEA\u5E97",
          "\u7F8E\u5BB9\u5BA4",
          "\u7F8E\u5BB9\u9662"
        ]
      },
      {
        unicode: "\u{1F3AA}",
        tags: [
          "\u30C6\u30F3\u30C8"
        ]
      },
      {
        unicode: "\u{1F682}",
        tags: [
          "sl",
          "\u4E57\u308A\u7269",
          "\u5217\u8ECA"
        ]
      },
      {
        unicode: "\u{1F683}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u5217\u8ECA"
        ]
      },
      {
        unicode: "\u{1F684}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u96FB\u8ECA"
        ]
      },
      {
        unicode: "\u{1F685}",
        tags: [
          "0\u7CFB",
          "\u4E38\u3044\u65B0\u5E79\u7DDA",
          "\u4E57\u308A\u7269",
          "\u65B0\u5E79\u7DDA",
          "\u96FB\u8ECA"
        ]
      },
      {
        unicode: "\u{1F686}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u5217\u8ECA",
          "\u96FB\u8ECA"
        ]
      },
      {
        unicode: "\u{1F687}\uFE0F",
        tags: [
          "\u30E1\u30C8\u30ED",
          "\u4E57\u308A\u7269",
          "\u96FB\u8ECA"
        ]
      },
      {
        unicode: "\u{1F688}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u96FB\u8ECA"
        ]
      },
      {
        unicode: "\u{1F689}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u5217\u8ECA",
          "\u96FB\u8ECA"
        ]
      },
      {
        unicode: "\u{1F68A}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u8DEF\u9762\u96FB\u8ECA",
          "\u96FB\u8ECA"
        ]
      },
      {
        unicode: "\u{1F69D}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u96FB\u8ECA"
        ]
      },
      {
        unicode: "\u{1F69E}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u767B\u5C71\u96FB\u8ECA",
          "\u96FB\u8ECA"
        ]
      },
      {
        unicode: "\u{1F68B}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u96FB\u8ECA"
        ]
      },
      {
        unicode: "\u{1F68C}",
        tags: [
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F68D}\uFE0F",
        tags: [
          "\u30D0\u30B9",
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F68E}",
        tags: [
          "\u30D0\u30B9",
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F690}",
        tags: [
          "\u30D0\u30B9",
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F691}\uFE0F",
        tags: [
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F692}",
        tags: [
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F693}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u8B66\u5BDF"
        ]
      },
      {
        unicode: "\u{1F694}\uFE0F",
        tags: [
          "\u30D1\u30C8\u30AB\u30FC",
          "\u4E57\u308A\u7269",
          "\u8B66\u5BDF"
        ]
      },
      {
        unicode: "\u{1F695}",
        tags: [
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F696}",
        tags: [
          "\u30BF\u30AF\u30B7\u30FC",
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F697}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u8ECA"
        ]
      },
      {
        unicode: "\u{1F698}\uFE0F",
        tags: [
          "\u4E57\u308A\u7269",
          "\u81EA\u52D5\u8ECA",
          "\u8ECA"
        ]
      },
      {
        unicode: "\u{1F699}",
        tags: [
          "rv\u8ECA",
          "suv\u8ECA",
          "\u4E57\u308A\u7269",
          "\u81EA\u52D5\u8ECA",
          "\u8ECA"
        ]
      },
      {
        unicode: "\u{1F6FB}",
        tags: [
          "\u30C8\u30E9\u30C3\u30AF",
          "\u30D4\u30C3\u30AF\u30A2\u30C3\u30D7\u30C8\u30E9\u30C3\u30AF",
          "\u4E57\u308A\u7269",
          "\u8ECA",
          "\u914D\u9054"
        ]
      },
      {
        unicode: "\u{1F69A}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u8ECA",
          "\u914D\u9054"
        ]
      },
      {
        unicode: "\u{1F69B}",
        tags: [
          "\u30C8\u30E9\u30C3\u30AF",
          "\u4E57\u308A\u7269",
          "\u8ECA"
        ]
      },
      {
        unicode: "\u{1F69C}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u8ECA"
        ]
      },
      {
        unicode: "\u{1F3CE}\uFE0F",
        tags: [
          "f1",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30E2\u30FC\u30BF\u30FC\u30B9\u30DD\u30FC\u30C4",
          "\u4E57\u308A\u7269",
          "\u8ECA"
        ]
      },
      {
        unicode: "\u{1F3CD}\uFE0F",
        tags: [
          "\u30AA\u30FC\u30C8\u30EC\u30FC\u30B9",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D0\u30A4\u30AF",
          "\u30E2\u30FC\u30BF\u30FC\u30B9\u30DD\u30FC\u30C4",
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F6F5}",
        tags: [
          "\u539F\u4ED8"
        ]
      },
      {
        unicode: "\u{1F9BD}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u6905\u5B50",
          "\u8ECA\u6905\u5B50"
        ]
      },
      {
        unicode: "\u{1F9BC}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u6905\u5B50",
          "\u8ECA\u6905\u5B50"
        ]
      },
      {
        unicode: "\u{1F6FA}",
        tags: [
          "\u30AA\u30FC\u30C8\u30EA\u30AF\u30B7\u30E3\u30FC",
          "\u30BF\u30AF\u30B7\u30FC",
          "\u30C8\u30A5\u30AF\u30C8\u30A5\u30AF",
          "\u30EA\u30AF\u30B7\u30E3\u30FC"
        ]
      },
      {
        unicode: "\u{1F6B2}\uFE0F",
        tags: [
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F6F4}",
        tags: [
          "\u30AD\u30C3\u30AF\u30B9\u30AF\u30FC\u30BF\u30FC",
          "\u30AD\u30C3\u30AF\u30B9\u30B1\u30FC\u30BF\u30FC"
        ]
      },
      {
        unicode: "\u{1F6F9}",
        tags: [
          "\u30B9\u30B1\u30DC\u30FC",
          "\u30DC\u30FC\u30C9"
        ]
      },
      {
        unicode: "\u{1F6FC}",
        tags: [
          "\u30B9\u30B1\u30FC\u30C8",
          "\u30B9\u30DD\u30FC\u30C4"
        ]
      },
      {
        unicode: "\u{1F68F}",
        tags: [
          "\u30D0\u30B9\u4E57\u308A\u5834",
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F6E3}\uFE0F",
        tags: [
          "\u9053\u8DEF",
          "\u9AD8\u901F"
        ]
      },
      {
        unicode: "\u{1F6E4}\uFE0F",
        tags: [
          "\u9244\u9053"
        ]
      },
      {
        unicode: "\u{1F6E2}\uFE0F",
        tags: [
          "\u77F3\u6CB9"
        ]
      },
      {
        unicode: "\u26FD\uFE0F",
        tags: [
          "\u30AC\u30BD\u30EA\u30F3",
          "\u30AC\u30BD\u30EA\u30F3\u30CE\u30BA\u30EB"
        ]
      },
      {
        unicode: "\u{1F6A8}",
        tags: [
          "\u30D1\u30C8\u30AB\u30FC"
        ]
      },
      {
        unicode: "\u{1F6A5}",
        tags: [
          "\u4FE1\u53F7",
          "\u4FE1\u53F7\u6A5F"
        ]
      },
      {
        unicode: "\u{1F6A6}",
        tags: [
          "\u4FE1\u53F7",
          "\u4FE1\u53F7\u6A5F"
        ]
      },
      {
        unicode: "\u{1F6D1}",
        tags: [
          "\u30B9\u30C8\u30C3\u30D7",
          "\u6A19\u8B58",
          "\u6B62\u307E\u308C"
        ]
      },
      {
        unicode: "\u{1F6A7}",
        tags: [
          "\u30B5\u30A4\u30F3",
          "\u901A\u884C\u6B62\u3081"
        ]
      },
      {
        unicode: "\u2693\uFE0F",
        tags: [
          "\u3044\u304B\u308A",
          "\u7887",
          "\u8239"
        ]
      },
      {
        unicode: "\u26F5\uFE0F",
        tags: [
          "\u4E57\u308A\u7269",
          "\u5E06\u8239",
          "\u8239"
        ]
      },
      {
        unicode: "\u{1F6F6}",
        tags: [
          "\u30AB\u30E4\u30C3\u30AF",
          "\u30DC\u30FC\u30C8",
          "\u4E57\u308A\u7269",
          "\u8239"
        ]
      },
      {
        unicode: "\u{1F6A4}",
        tags: [
          "\u30DC\u30FC\u30C8",
          "\u4E57\u308A\u7269",
          "\u8239"
        ]
      },
      {
        unicode: "\u{1F6F3}\uFE0F",
        tags: [
          "\u4E57\u308A\u7269",
          "\u65C5\u5BA2\u8239",
          "\u8239"
        ]
      },
      {
        unicode: "\u26F4\uFE0F",
        tags: [
          "\u4E57\u308A\u7269",
          "\u8239"
        ]
      },
      {
        unicode: "\u{1F6E5}\uFE0F",
        tags: [
          "\u30DC\u30FC\u30C8",
          "\u4E57\u308A\u7269",
          "\u8239"
        ]
      },
      {
        unicode: "\u{1F6A2}",
        tags: [
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u2708\uFE0F",
        tags: [
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F6E9}\uFE0F",
        tags: [
          "\u4E57\u308A\u7269",
          "\u5C0F\u578B\u6A5F",
          "\u98DB\u884C\u6A5F"
        ]
      },
      {
        unicode: "\u{1F6EB}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u96E2\u9678",
          "\u98DB\u884C\u6A5F"
        ]
      },
      {
        unicode: "\u{1F6EC}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u7740\u9678",
          "\u98DB\u884C\u6A5F"
        ]
      },
      {
        unicode: "\u{1FA82}",
        tags: [
          "\u30B9\u30AB\u30A4\u30C0\u30A4\u30D3\u30F3\u30B0",
          "\u30D1\u30E9\u30B0\u30E9\u30A4\u30C0\u30FC"
        ]
      },
      {
        unicode: "\u{1F4BA}",
        tags: [
          "\u5E2D",
          "\u6905\u5B50"
        ]
      },
      {
        unicode: "\u{1F681}",
        tags: [
          "\u30D8\u30EA",
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F69F}",
        tags: [
          "\u30E2\u30CE\u30EC\u30FC\u30EB",
          "\u4E57\u308A\u7269",
          "\u96FB\u8ECA"
        ]
      },
      {
        unicode: "\u{1F6A0}",
        tags: [
          "\u30B4\u30F3\u30C9\u30E9",
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F6A1}",
        tags: [
          "\u30B4\u30F3\u30C9\u30E9",
          "\u4E57\u308A\u7269"
        ]
      },
      {
        unicode: "\u{1F6F0}\uFE0F",
        tags: [
          "\u5B87\u5B99"
        ]
      },
      {
        unicode: "\u{1F680}",
        tags: [
          "\u4E57\u308A\u7269",
          "\u5B87\u5B99"
        ]
      },
      {
        unicode: "\u{1F6F8}",
        tags: [
          "ufo",
          "\u4E57\u308A\u7269",
          "\u5B87\u5B99"
        ]
      },
      {
        unicode: "\u{1F6CE}\uFE0F",
        tags: [
          "\u30D9\u30EB",
          "\u30DB\u30C6\u30EB"
        ]
      },
      {
        unicode: "\u{1F9F3}",
        tags: [
          "\u30D1\u30C3\u30AD\u30F3\u30B0",
          "\u65C5\u884C",
          "\u65C5\u884C\u304B\u3070\u3093"
        ]
      },
      {
        unicode: "\u231B\uFE0F",
        tags: [
          "\u6642\u8A08",
          "\u7802"
        ]
      },
      {
        unicode: "\u23F3\uFE0F",
        tags: [
          "\u6642\u8A08",
          "\u7802",
          "\u7802\u6642\u8A08"
        ]
      },
      {
        unicode: "\u231A\uFE0F",
        tags: [
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u23F0",
        tags: [
          "\u30A2\u30E9\u30FC\u30E0",
          "\u6642\u8A08",
          "\u76EE\u899A\u307E\u3057"
        ]
      },
      {
        unicode: "\u23F1\uFE0F",
        tags: [
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u23F2\uFE0F",
        tags: [
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F570}\uFE0F",
        tags: [
          "\u30DE\u30F3\u30C6\u30EB\u30AF\u30ED\u30C3\u30AF",
          "\u6642\u8A08",
          "\u7F6E\u304D\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F55B}\uFE0F",
        tags: [
          "12:00",
          "\u6642\u8A08",
          "\u6B63\u5348"
        ]
      },
      {
        unicode: "\u{1F567}\uFE0F",
        tags: [
          "12:30",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F550}\uFE0F",
        tags: [
          "1:00",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F55C}\uFE0F",
        tags: [
          "1:30",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F551}\uFE0F",
        tags: [
          "2:00",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F55D}\uFE0F",
        tags: [
          "2:30",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F552}\uFE0F",
        tags: [
          "3:00",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F55E}\uFE0F",
        tags: [
          "3:30",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F553}\uFE0F",
        tags: [
          "4:00",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F55F}\uFE0F",
        tags: [
          "4:30",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F554}\uFE0F",
        tags: [
          "5:00",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F560}\uFE0F",
        tags: [
          "5:30",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F555}\uFE0F",
        tags: [
          "6:00",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F561}\uFE0F",
        tags: [
          "6:30",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F556}\uFE0F",
        tags: [
          "7:00",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F562}\uFE0F",
        tags: [
          "7:30",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F557}\uFE0F",
        tags: [
          "8:00",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F563}\uFE0F",
        tags: [
          "8:30",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F558}\uFE0F",
        tags: [
          "9:00",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F564}\uFE0F",
        tags: [
          "9:30",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F559}\uFE0F",
        tags: [
          "10:00",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F565}\uFE0F",
        tags: [
          "10:30",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F55A}\uFE0F",
        tags: [
          "11:00",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F566}\uFE0F",
        tags: [
          "11:30",
          "\u6642\u8A08"
        ]
      },
      {
        unicode: "\u{1F311}",
        tags: [
          "\u6708"
        ]
      },
      {
        unicode: "\u{1F312}",
        tags: [
          "\u4E09\u65E5\u6708",
          "\u6708"
        ]
      },
      {
        unicode: "\u{1F313}",
        tags: [
          "\u4E0A\u5F26",
          "\u534A\u6708",
          "\u6708"
        ]
      },
      {
        unicode: "\u{1F314}",
        tags: [
          "\u5341\u65E5\u591C\u306E\u6708",
          "\u6708"
        ]
      },
      {
        unicode: "\u{1F315}\uFE0F",
        tags: [
          "\u6708"
        ]
      },
      {
        unicode: "\u{1F316}",
        tags: [
          "\u5C45\u5F85\u6708",
          "\u6708"
        ]
      },
      {
        unicode: "\u{1F317}",
        tags: [
          "\u4E0B\u5F26",
          "\u534A\u6708",
          "\u6708"
        ]
      },
      {
        unicode: "\u{1F318}",
        tags: [
          "\u4E09\u65E5\u6708",
          "\u6708"
        ]
      },
      {
        unicode: "\u{1F319}",
        tags: [
          "\u6708"
        ]
      },
      {
        unicode: "\u{1F31A}",
        tags: [
          "\u65B0\u6708",
          "\u6708",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F31B}",
        tags: [
          "\u4E0A\u5F26\u306E\u6708",
          "\u6708",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F31C}\uFE0F",
        tags: [
          "\u4E0B\u5F26\u306E\u6708",
          "\u6708",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F321}\uFE0F",
        tags: [
          "\u5929\u6C17",
          "\u6C17\u6E29",
          "\u6E29\u5EA6"
        ]
      },
      {
        unicode: "\u2600\uFE0F",
        tags: [
          "\u6674\u308C"
        ]
      },
      {
        unicode: "\u{1F31D}",
        tags: [
          "\u6708",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1F31E}",
        tags: [
          "\u592A\u967D",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1FA90}",
        tags: [
          "\u30EA\u30F3\u30B0",
          "\u571F\u661F",
          "\u5929\u4F53",
          "\u60D1\u661F",
          "\u661F"
        ]
      },
      {
        unicode: "\u2B50\uFE0F",
        tags: [
          "\u661F"
        ]
      },
      {
        unicode: "\u{1F31F}",
        tags: [
          "\u304D\u3089\u304D\u3089",
          "\u30B9\u30BF\u30FC",
          "\u661F",
          "\u8F1D\u304D"
        ]
      },
      {
        unicode: "\u{1F320}",
        tags: [
          "\u30B9\u30BF\u30FC",
          "\u661F"
        ]
      },
      {
        unicode: "\u{1F30C}",
        tags: [
          "\u591C\u7A7A",
          "\u661F\u7A7A",
          "\u9280\u6CB3"
        ]
      },
      {
        unicode: "\u2601\uFE0F",
        tags: [
          "\u5929\u6C17",
          "\u66C7\u308A"
        ]
      },
      {
        unicode: "\u26C5\uFE0F",
        tags: [
          "\u5929\u6C17",
          "\u592A\u967D",
          "\u66C7\u308A",
          "\u96F2"
        ]
      },
      {
        unicode: "\u26C8\uFE0F",
        tags: [
          "\u5929\u6C17",
          "\u7A32\u59BB",
          "\u96E8",
          "\u96F2",
          "\u96F7"
        ]
      },
      {
        unicode: "\u{1F324}\uFE0F",
        tags: [
          "\u5929\u6C17",
          "\u592A\u967D",
          "\u6674\u308C",
          "\u96F2"
        ]
      },
      {
        unicode: "\u{1F325}\uFE0F",
        tags: [
          "\u5929\u6C17",
          "\u592A\u967D",
          "\u66C7\u308A",
          "\u96F2"
        ]
      },
      {
        unicode: "\u{1F326}\uFE0F",
        tags: [
          "\u5929\u6C17",
          "\u5929\u6C17\u96E8",
          "\u592A\u967D",
          "\u66C7\u308A",
          "\u96F2"
        ]
      },
      {
        unicode: "\u{1F327}\uFE0F",
        tags: [
          "\u5929\u6C17",
          "\u96E8",
          "\u96F2"
        ]
      },
      {
        unicode: "\u{1F328}\uFE0F",
        tags: [
          "\u5929\u6C17",
          "\u96EA",
          "\u96F2"
        ]
      },
      {
        unicode: "\u{1F329}\uFE0F",
        tags: [
          "\u5929\u6C17",
          "\u7A32\u59BB",
          "\u96F2",
          "\u96F7"
        ]
      },
      {
        unicode: "\u{1F32A}\uFE0F",
        tags: [
          "\u5929\u6C17",
          "\u7A81\u98A8"
        ]
      },
      {
        unicode: "\u{1F32B}\uFE0F",
        tags: [
          "\u5929\u6C17"
        ]
      },
      {
        unicode: "\u{1F32C}\uFE0F",
        tags: [
          "\u9854",
          "\u98A8"
        ]
      },
      {
        unicode: "\u{1F300}",
        tags: [
          "\u3081\u307E\u3044",
          "\u3082\u3084\u3082\u3084",
          "\u30B5\u30A4\u30AF\u30ED\u30F3",
          "\u30CF\u30EA\u30B1\u30FC\u30F3",
          "\u53F0\u98A8"
        ]
      },
      {
        unicode: "\u{1F308}",
        tags: [
          "\u30EC\u30A4\u30F3\u30DC\u30FC"
        ]
      },
      {
        unicode: "\u{1F302}",
        tags: [
          "\u5098",
          "\u5929\u6C17",
          "\u6301\u3061\u7269",
          "\u96E8"
        ]
      },
      {
        unicode: "\u2602\uFE0F",
        tags: [
          "\u5929\u6C17",
          "\u6301\u3061\u7269",
          "\u96E8"
        ]
      },
      {
        unicode: "\u2614\uFE0F",
        tags: [
          "\u5098",
          "\u5929\u6C17",
          "\u6301\u3061\u7269",
          "\u96E8"
        ]
      },
      {
        unicode: "\u26F1\uFE0F",
        tags: [
          "\u30D3\u30FC\u30C1",
          "\u5098",
          "\u7802\u6D5C"
        ]
      },
      {
        unicode: "\u26A1\uFE0F",
        tags: [
          "\u5371\u967A",
          "\u7A32\u59BB",
          "\u96F7",
          "\u96FB\u6C17"
        ]
      },
      {
        unicode: "\u2744\uFE0F",
        tags: [
          "\u7D50\u6676",
          "\u96EA"
        ]
      },
      {
        unicode: "\u2603\uFE0F",
        tags: [
          "\u96EA",
          "\u96EA\u3060\u308B\u307E"
        ]
      },
      {
        unicode: "\u26C4\uFE0F",
        tags: [
          "\u96EA"
        ]
      },
      {
        unicode: "\u2604\uFE0F",
        tags: [
          "\u3059\u3044\u661F",
          "\u5B87\u5B99"
        ]
      },
      {
        unicode: "\u{1F525}",
        tags: [
          "\u30D5\u30A1\u30A4\u30A2\u30FC",
          "\u30D5\u30A1\u30A4\u30E4\u30FC",
          "\u708E"
        ]
      },
      {
        unicode: "\u{1F4A7}",
        tags: [
          "\u3057\u305A\u304F",
          "\u305F\u3089\u30FC\u3063",
          "\u6C57",
          "\u6D99"
        ]
      },
      {
        unicode: "\u{1F30A}",
        tags: [
          "\u5929\u6C17",
          "\u6CE2\u6D6A",
          "\u6D77"
        ]
      }
    ]
  },
  {
    group: 6,
    emojiList: [
      {
        unicode: "\u{1F383}",
        tags: [
          "\u304B\u307C\u3061\u3083",
          "\u30CF\u30ED\u30A6\u30A3\u30F3",
          "\u30CF\u30ED\u30A6\u30A3\u30FC\u30F3"
        ]
      },
      {
        unicode: "\u{1F384}",
        tags: [
          "\u30AF\u30EA\u30B9\u30DE\u30B9",
          "\u30AF\u30EA\u30B9\u30DE\u30B9\u30A4\u30D6",
          "\u30C4\u30EA\u30FC"
        ]
      },
      {
        unicode: "\u{1F386}",
        tags: [
          "\u304A\u796D\u308A",
          "\u82B1\u706B",
          "\u82B1\u706B\u5927\u4F1A"
        ]
      },
      {
        unicode: "\u{1F387}",
        tags: [
          "\u304A\u796D\u308A",
          "\u82B1\u706B"
        ]
      },
      {
        unicode: "\u{1F9E8}",
        tags: [
          "\u30C0\u30A4\u30CA\u30DE\u30A4\u30C8",
          "\u706B\u85AC",
          "\u7206\u767A",
          "\u7206\u85AC"
        ]
      },
      {
        unicode: "\u2728",
        tags: [
          "\u3074\u304B\u3074\u304B",
          "\u30B9\u30BF\u30FC",
          "\u661F"
        ]
      },
      {
        unicode: "\u{1F388}",
        tags: [
          "\u30D0\u30EB\u30FC\u30F3"
        ]
      },
      {
        unicode: "\u{1F389}",
        tags: [
          "\u304A\u795D\u3044",
          "\u30D1\u30FC\u30C6\u30A3\u30FC",
          "\u30D1\u30FC\u30C6\u30A3\u30FC\u30AF\u30E9\u30C3\u30AB\u30FC"
        ]
      },
      {
        unicode: "\u{1F38A}",
        tags: [
          "\u304A\u795D\u3044",
          "\u30D1\u30FC\u30C6\u30A3\u30FC"
        ]
      },
      {
        unicode: "\u{1F38B}",
        tags: [
          "\u548C",
          "\u65E5\u672C",
          "\u77ED\u518A"
        ]
      },
      {
        unicode: "\u{1F38D}",
        tags: [
          "\u304A\u795D\u3044",
          "\u548C",
          "\u65E5\u672C",
          "\u6B63\u6708",
          "\u7AF9"
        ]
      },
      {
        unicode: "\u{1F38E}",
        tags: [
          "\u304A\u3060\u3044\u308A\u69D8",
          "\u304A\u3072\u306A\u69D8",
          "\u304A\u795D\u3044",
          "\u4EBA\u5F62",
          "\u548C",
          "\u65E5\u672C"
        ]
      },
      {
        unicode: "\u{1F38F}",
        tags: [
          "\u304A\u795D\u3044",
          "\u5B50\u4F9B\u306E\u65E5"
        ]
      },
      {
        unicode: "\u{1F390}",
        tags: [
          "\u590F",
          "\u9234",
          "\u98A8"
        ]
      },
      {
        unicode: "\u{1F391}",
        tags: [
          "\u30B9\u30B9\u30AD",
          "\u5341\u4E94\u591C",
          "\u6708"
        ]
      },
      {
        unicode: "\u{1F9E7}",
        tags: [
          "\u304A\u5E74\u7389",
          "\u304A\u91D1",
          "\u3054\u795D\u5100",
          "\u5E78\u904B",
          "\u7D05\u5305"
        ]
      },
      {
        unicode: "\u{1F380}",
        tags: [
          "\u304A\u795D\u3044"
        ]
      },
      {
        unicode: "\u{1F381}",
        tags: [
          "\u304A\u795D\u3044",
          "\u30AE\u30D5\u30C8",
          "\u7BB1"
        ]
      },
      {
        unicode: "\u{1F397}\uFE0F",
        tags: [
          "\u304A\u795D\u3044",
          "\u30EA\u30DC\u30F3",
          "\u30EA\u30DE\u30A4\u30F3\u30C0\u30FC"
        ]
      },
      {
        unicode: "\u{1F39F}\uFE0F",
        tags: [
          "\u30C1\u30B1\u30C3\u30C8",
          "\u5165\u5834\u30D1\u30B9",
          "\u534A\u5238"
        ]
      },
      {
        unicode: "\u{1F3AB}",
        tags: [
          "\u5207\u7B26"
        ]
      },
      {
        unicode: "\u{1F396}\uFE0F",
        tags: [
          "\u304A\u795D\u3044",
          "\u30E1\u30C0\u30EB",
          "\u8868\u5F70"
        ]
      },
      {
        unicode: "\u{1F3C6}\uFE0F",
        tags: [
          "\u512A\u52DD\u30AB\u30C3\u30D7",
          "\u8868\u5F70",
          "\u8CDE\u676F"
        ]
      },
      {
        unicode: "\u{1F3C5}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u8868\u5F70"
        ]
      },
      {
        unicode: "\u{1F947}",
        tags: [
          "1\u4F4D",
          "\u30B4\u30FC\u30EB\u30C9",
          "\u30E1\u30C0\u30EB",
          "\u91D1"
        ]
      },
      {
        unicode: "\u{1F948}",
        tags: [
          "2\u4F4D",
          "\u30B7\u30EB\u30D0\u30FC",
          "\u30E1\u30C0\u30EB",
          "\u9280"
        ]
      },
      {
        unicode: "\u{1F949}",
        tags: [
          "3\u4F4D",
          "\u30D6\u30ED\u30F3\u30BA",
          "\u30E1\u30C0\u30EB",
          "\u9285"
        ]
      },
      {
        unicode: "\u26BD\uFE0F",
        tags: [
          "\u30B5\u30C3\u30AB\u30FC\u30DC\u30FC\u30EB",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30DC\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u26BE\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30DC\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F94E}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30DC\u30FC\u30EB",
          "\u4E0B\u624B\u6295\u3052"
        ]
      },
      {
        unicode: "\u{1F3C0}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D0\u30B9\u30B1",
          "\u30DC\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F3D0}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D0\u30EC\u30FC",
          "\u30DC\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F3C8}",
        tags: [
          "\u30A2\u30E1\u30EA\u30AB\u30F3\u30D5\u30C3\u30C8\u30DC\u30FC\u30EB",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30DC\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F3C9}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30DC\u30FC\u30EB",
          "\u30E9\u30B0\u30D3\u30FC\u30DC\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F3BE}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30C6\u30CB\u30B9\u30DC\u30FC\u30EB",
          "\u30DC\u30FC\u30EB",
          "\u30E9\u30B1\u30C3\u30C8"
        ]
      },
      {
        unicode: "\u{1F94F}",
        tags: [
          "\u30A2\u30EB\u30C6\u30A3\u30E1\u30C3\u30C8",
          "\u30D5\u30E9\u30A4\u30F3\u30B0\u30C7\u30A3\u30B9\u30AF"
        ]
      },
      {
        unicode: "\u{1F3B3}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30DC\u30FC\u30EB",
          "\u7403"
        ]
      },
      {
        unicode: "\u{1F3CF}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D0\u30C3\u30C8",
          "\u30DC\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F3D1}",
        tags: [
          "\u30B9\u30C6\u30A3\u30C3\u30AF",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D5\u30A3\u30FC\u30EB\u30C9\u30DB\u30C3\u30B1\u30FC",
          "\u30DC\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F3D2}",
        tags: [
          "\u30B9\u30C6\u30A3\u30C3\u30AF",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D1\u30C3\u30AF",
          "\u30DB\u30C3\u30B1\u30FC"
        ]
      },
      {
        unicode: "\u{1F94D}",
        tags: [
          "\u30B4\u30FC\u30EB",
          "\u30B9\u30C6\u30A3\u30C3\u30AF",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30DC\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F3D3}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D4\u30F3\u30DD\u30F3",
          "\u30DC\u30FC\u30EB",
          "\u30E9\u30B1\u30C3\u30C8"
        ]
      },
      {
        unicode: "\u{1F3F8}",
        tags: [
          "\u30B7\u30E3\u30C8\u30EB",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30E9\u30B1\u30C3\u30C8"
        ]
      },
      {
        unicode: "\u{1F94A}",
        tags: [
          "\u30B0\u30ED\u30FC\u30D6",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30DC\u30AF\u30B7\u30F3\u30B0\u30B0\u30ED\u30FC\u30D6"
        ]
      },
      {
        unicode: "\u{1F94B}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30C6\u30B3\u30F3\u30C9\u30FC",
          "\u67D4\u9053",
          "\u7A7A\u624B",
          "\u9053\u7740"
        ]
      },
      {
        unicode: "\u{1F945}",
        tags: [
          "\u30B4\u30FC\u30EB",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30CD\u30C3\u30C8"
        ]
      },
      {
        unicode: "\u26F3\uFE0F",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D5\u30E9\u30B0",
          "\u30D5\u30E9\u30C3\u30B0",
          "\u30DB\u30FC\u30EB",
          "\u65D7"
        ]
      },
      {
        unicode: "\u26F8\uFE0F",
        tags: [
          "\u30B9\u30B1\u30FC\u30C8",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D5\u30A3\u30AE\u30E5\u30A2\u30B9\u30B1\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F3A3}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u91E3\u308A\u7AFF",
          "\u9B5A"
        ]
      },
      {
        unicode: "\u{1F93F}",
        tags: [
          "\u30B7\u30E5\u30CE\u30FC\u30B1\u30EA\u30F3\u30B0",
          "\u30B9\u30AD\u30E5\u30FC\u30D0",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30DE\u30B9\u30AF"
        ]
      },
      {
        unicode: "\u{1F3BD}",
        tags: [
          "\u305F\u3059\u304D",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30E9\u30F3\u30CB\u30F3\u30B0",
          "\u30E9\u30F3\u30CB\u30F3\u30B0\u30B7\u30E3\u30C4",
          "\u99C5\u4F1D"
        ]
      },
      {
        unicode: "\u{1F3BF}",
        tags: [
          "\u30B9\u30C8\u30C3\u30AF",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u677F",
          "\u96EA"
        ]
      },
      {
        unicode: "\u{1F6F7}",
        tags: [
          "\u305D\u308A",
          "\u30B9\u30B1\u30EB\u30C8\u30F3",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30DC\u30D6\u30B9\u30EC\u30FC",
          "\u30EA\u30E5\u30FC\u30B8\u30E5"
        ]
      },
      {
        unicode: "\u{1F94C}",
        tags: [
          "\u30B9\u30C8\u30FC\u30F3",
          "\u30B9\u30DD\u30FC\u30C4"
        ]
      },
      {
        unicode: "\u{1F3AF}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30C0\u30FC\u30C4",
          "\u30D6\u30EB\u30BA\u30A2\u30A4",
          "\u5F53\u305F\u308A"
        ]
      },
      {
        unicode: "\u{1FA80}",
        tags: [
          "\u304A\u3082\u3061\u3083",
          "\u56DE\u8EE2",
          "\u73A9\u5177"
        ]
      },
      {
        unicode: "\u{1FA81}",
        tags: [
          "\u304A\u3082\u3061\u3083",
          "\u30AB\u30A4\u30C8",
          "\u51E7\u63DA\u3052",
          "\u73A9\u5177"
        ]
      },
      {
        unicode: "\u{1F3B1}",
        tags: [
          "\u30A8\u30A4\u30C8\u30DC\u30FC\u30EB",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30DC\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F52E}",
        tags: [
          "\u5360\u3044",
          "\u6C34\u6676",
          "\u7389",
          "\u904B\u547D"
        ]
      },
      {
        unicode: "\u{1FA84}",
        tags: [
          "\u3064\u3048",
          "\u6756",
          "\u9B54\u8853"
        ]
      },
      {
        unicode: "\u{1F9FF}",
        tags: [
          "\u304A\u5B88\u308A",
          "\u30CA\u30B6\u30FC\u30EB",
          "\u30D3\u30FC\u30BA",
          "\u90AA\u8996",
          "\u9B54\u9664\u3051"
        ]
      },
      {
        unicode: "\u{1F3AE}\uFE0F",
        tags: [
          "\u30B2\u30FC\u30E0",
          "\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9",
          "\u30D3\u30C7\u30AA\u30B2\u30FC\u30E0"
        ]
      },
      {
        unicode: "\u{1F579}\uFE0F",
        tags: [
          "\u30B2\u30FC\u30E0",
          "\u30B3\u30F3\u30C8\u30ED\u30FC\u30E9",
          "\u30B9\u30C6\u30A3\u30C3\u30AF",
          "\u30C6\u30EC\u30D3\u30B2\u30FC\u30E0"
        ]
      },
      {
        unicode: "\u{1F3B0}",
        tags: [
          "\u30B9\u30EA\u30FC\u30BB\u30D6\u30F3",
          "\u30B9\u30ED\u30C3\u30C8"
        ]
      },
      {
        unicode: "\u{1F3B2}",
        tags: [
          "\u30B2\u30FC\u30E0",
          "\u30C0\u30A4\u30B9"
        ]
      },
      {
        unicode: "\u{1F9E9}",
        tags: [
          "\u30D1\u30BA\u30EB",
          "\u30D4\u30FC\u30B9",
          "\u7D44\u307F\u5408\u308F\u305B",
          "\u9375"
        ]
      },
      {
        unicode: "\u{1F9F8}",
        tags: [
          "\u304A\u3082\u3061\u3083",
          "\u304F\u307E",
          "\u306C\u3044\u3050\u308B\u307F",
          "\u73A9\u5177"
        ]
      },
      {
        unicode: "\u{1FA85}",
        tags: [
          "\u304A\u795D\u3044",
          "\u30D1\u30FC\u30C6\u30A3\u30FC",
          "\u4EBA\u5F62",
          "\u8A95\u751F\u65E5"
        ]
      },
      {
        unicode: "\u{1FA86}",
        tags: [
          "\u30ED\u30B7\u30A2",
          "\u4EBA\u5F62",
          "\u5165\u308C\u5B50"
        ]
      },
      {
        unicode: "\u2660\uFE0F",
        tags: [
          "\u30AB\u30FC\u30C9",
          "\u30C8\u30E9\u30F3\u30D7"
        ]
      },
      {
        unicode: "\u2665\uFE0F",
        tags: [
          "\u30AB\u30FC\u30C9",
          "\u30C8\u30E9\u30F3\u30D7"
        ]
      },
      {
        unicode: "\u2666\uFE0F",
        tags: [
          "\u30AB\u30FC\u30C9",
          "\u30C0\u30A4\u30A2",
          "\u30C8\u30E9\u30F3\u30D7"
        ]
      },
      {
        unicode: "\u2663\uFE0F",
        tags: [
          "\u30AB\u30FC\u30C9",
          "\u30AF\u30ED\u30FC\u30D0\u30FC",
          "\u30C8\u30E9\u30F3\u30D7"
        ]
      },
      {
        unicode: "\u265F\uFE0F",
        tags: [
          "\u30C1\u30A7\u30B9",
          "\u6368\u3066\u99D2",
          "\u99D2"
        ]
      },
      {
        unicode: "\u{1F0CF}",
        tags: [
          "\u30AB\u30FC\u30C9",
          "\u30B8\u30B8",
          "\u30C8\u30E9\u30F3\u30D7",
          "\u30D0\u30D0"
        ]
      },
      {
        unicode: "\u{1F004}\uFE0F",
        tags: [
          "\u30B2\u30FC\u30E0",
          "\u724C",
          "\u9EBB\u96C0\u724C"
        ]
      },
      {
        unicode: "\u{1F3B4}",
        tags: [
          "\u30AB\u30FC\u30C9",
          "\u30B2\u30FC\u30E0"
        ]
      },
      {
        unicode: "\u{1F3AD}\uFE0F",
        tags: [
          "\u4EEE\u9762",
          "\u5287\u5834",
          "\u6F14\u5287",
          "\u6F14\u82B8",
          "\u82B8\u8853"
        ]
      },
      {
        unicode: "\u{1F5BC}\uFE0F",
        tags: [
          "\u7D75",
          "\u7F8E\u8853\u9928",
          "\u82B8\u8853"
        ]
      },
      {
        unicode: "\u{1F3A8}",
        tags: [
          "\u30D1\u30EC\u30C3\u30C8",
          "\u7D75",
          "\u7F8E\u8853\u9928"
        ]
      },
      {
        unicode: "\u{1F9F5}",
        tags: [
          "\u3072\u3082",
          "\u7CF8\u5DFB\u304D",
          "\u7E2B\u3044\u91DD",
          "\u88C1\u7E2B"
        ]
      },
      {
        unicode: "\u{1FAA1}",
        tags: [
          "\u30B9\u30C6\u30C3\u30C1",
          "\u523A\u7E4D",
          "\u7E2B\u3046",
          "\u88C1\u7E2B",
          "\u91DD"
        ]
      },
      {
        unicode: "\u{1F9F6}",
        tags: [
          "\u304B\u304E\u91DD",
          "\u30CB\u30C3\u30C8",
          "\u6BDB\u7CF8\u7389",
          "\u7DE8\u307F\u7269"
        ]
      },
      {
        unicode: "\u{1FAA2}",
        tags: [
          "\u306D\u3058\u308C",
          "\u3072\u3082",
          "\u30CE\u30C3\u30C8",
          "\u30ED\u30FC\u30D7",
          "\u7DB1"
        ]
      }
    ]
  },
  {
    group: 7,
    emojiList: [
      {
        unicode: "\u{1F453}\uFE0F",
        tags: [
          "\u30E1\u30AC\u30CD"
        ]
      },
      {
        unicode: "\u{1F576}\uFE0F",
        tags: [
          "\u30E1\u30AC\u30CD"
        ]
      },
      {
        unicode: "\u{1F97D}",
        tags: [
          "\u4FDD\u8B77\u30E1\u30AC\u30CD",
          "\u6C34\u6CF3",
          "\u6EB6\u63A5"
        ]
      },
      {
        unicode: "\u{1F97C}",
        tags: [
          "\u533B\u8005",
          "\u5B9F\u9A13",
          "\u79D1\u5B66\u8005"
        ]
      },
      {
        unicode: "\u{1F9BA}",
        tags: [
          "\u30C1\u30E7\u30C3\u30AD",
          "\u30D9\u30B9\u30C8",
          "\u53CD\u5C04",
          "\u5DE5\u4E8B",
          "\u7DCA\u6025"
        ]
      },
      {
        unicode: "\u{1F454}",
        tags: [
          "\u30B7\u30E3\u30C4",
          "\u30EF\u30A4\u30B7\u30E3\u30C4",
          "\u670D"
        ]
      },
      {
        unicode: "\u{1F455}",
        tags: [
          "t\u30B7\u30E3\u30C4",
          "\u30B7\u30E3\u30C4",
          "\u670D"
        ]
      },
      {
        unicode: "\u{1F456}",
        tags: [
          "\u30BA\u30DC\u30F3",
          "\u30C7\u30CB\u30E0",
          "\u30D1\u30F3\u30C4",
          "\u670D"
        ]
      },
      {
        unicode: "\u{1F9E3}",
        tags: [
          "\u30B9\u30AB\u30FC\u30D5",
          "\u895F\u5DFB\u304D",
          "\u9996\u5DFB\u304D"
        ]
      },
      {
        unicode: "\u{1F9E4}",
        tags: [
          "\u624B\u888B"
        ]
      },
      {
        unicode: "\u{1F9E5}",
        tags: [
          "\u30A2\u30A6\u30BF\u30FC",
          "\u30AA\u30FC\u30D0\u30FC",
          "\u30B8\u30E3\u30B1\u30C3\u30C8",
          "\u670D"
        ]
      },
      {
        unicode: "\u{1F9E6}",
        tags: [
          "\u9774\u4E0B"
        ]
      },
      {
        unicode: "\u{1F457}",
        tags: [
          "\u30C9\u30EC\u30B9",
          "\u670D"
        ]
      },
      {
        unicode: "\u{1F458}",
        tags: [
          "\u670D"
        ]
      },
      {
        unicode: "\u{1F97B}",
        tags: [
          "\u670D",
          "\u6C11\u65CF\u8863\u88C5"
        ]
      },
      {
        unicode: "\u{1FA71}",
        tags: [
          "\u30B9\u30A4\u30E0\u30A6\u30A7\u30A2",
          "\u6C34\u7740"
        ]
      },
      {
        unicode: "\u{1FA72}",
        tags: [
          "\u30B9\u30A4\u30E0\u30A6\u30A7\u30A2",
          "\u30D1\u30F3\u30C4",
          "\u4E0B\u7740",
          "\u6C34\u7740"
        ]
      },
      {
        unicode: "\u{1FA73}",
        tags: [
          "\u30B9\u30A4\u30E0\u30A6\u30A7\u30A2",
          "\u30D1\u30F3\u30C4",
          "\u4E0B\u7740",
          "\u6C34\u7740"
        ]
      },
      {
        unicode: "\u{1F459}",
        tags: [
          "\u6C34\u7740"
        ]
      },
      {
        unicode: "\u{1F45A}",
        tags: [
          "\u30B7\u30E3\u30C4",
          "\u30D6\u30E9\u30A6\u30B9",
          "\u670D"
        ]
      },
      {
        unicode: "\u{1F45B}",
        tags: [
          "\u5C0F\u92AD\u5165\u308C",
          "\u8CA1\u5E03"
        ]
      },
      {
        unicode: "\u{1F45C}",
        tags: [
          "\u304B\u3070\u3093",
          "\u30D0\u30C3\u30B0"
        ]
      },
      {
        unicode: "\u{1F45D}",
        tags: [
          "\u30D0\u30C3\u30B0"
        ]
      },
      {
        unicode: "\u{1F6CD}\uFE0F",
        tags: [
          "\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u30D0\u30C3\u30B0",
          "\u30D0\u30C3\u30B0",
          "\u7D19\u624B\u63D0\u3052"
        ]
      },
      {
        unicode: "\u{1F392}",
        tags: [
          "\u30E9\u30F3\u30C9\u30BB\u30EB",
          "\u30EA\u30E5\u30C3\u30AF\u30B5\u30C3\u30AF",
          "\u5B66\u6821",
          "\u5C0F\u5B66\u6821",
          "\u5C0F\u5B66\u751F"
        ]
      },
      {
        unicode: "\u{1FA74}",
        tags: [
          "\u30B4\u30E0\u305E\u3046\u308A",
          "\u30B5\u30F3\u30C0\u30EB",
          "\u30C8\u30F3\u30B0\u30B5\u30F3\u30C0\u30EB",
          "\u30D3\u30FC\u30B5\u30F3",
          "\u9774"
        ]
      },
      {
        unicode: "\u{1F45E}",
        tags: [
          "\u30ED\u30FC\u30D5\u30A1\u30FC",
          "\u9769\u9774",
          "\u9774"
        ]
      },
      {
        unicode: "\u{1F45F}",
        tags: [
          "\u9774"
        ]
      },
      {
        unicode: "\u{1F97E}",
        tags: [
          "\u30AD\u30E3\u30F3\u30D7",
          "\u30CF\u30A4\u30AD\u30F3\u30B0",
          "\u30D6\u30FC\u30C4",
          "\u767B\u5C71\u9774"
        ]
      },
      {
        unicode: "\u{1F97F}",
        tags: [
          "\u307A\u305F\u3093\u3053\u9774",
          "\u30B9\u30EA\u30C3\u30DD\u30F3",
          "\u30D0\u30EC\u30A8\u30B7\u30E5\u30FC\u30BA"
        ]
      },
      {
        unicode: "\u{1F460}",
        tags: [
          "\u30D4\u30F3\u30D2\u30FC\u30EB",
          "\u9774"
        ]
      },
      {
        unicode: "\u{1F461}",
        tags: [
          "\u9774"
        ]
      },
      {
        unicode: "\u{1FA70}",
        tags: [
          "\u30B7\u30E5\u30FC\u30BA",
          "\u30C0\u30F3\u30B9",
          "\u30D0\u30EC\u30A8",
          "\u9774"
        ]
      },
      {
        unicode: "\u{1F462}",
        tags: [
          "\u30ED\u30F3\u30B0\u30D6\u30FC\u30C4",
          "\u9774"
        ]
      },
      {
        unicode: "\u{1F451}",
        tags: [
          "\u30AF\u30E9\u30A6\u30F3",
          "\u51A0"
        ]
      },
      {
        unicode: "\u{1F452}",
        tags: [
          "\u5E3D\u5B50",
          "\u9EA6\u308F\u3089",
          "\u9EA6\u308F\u3089\u5E3D\u5B50"
        ]
      },
      {
        unicode: "\u{1F3A9}",
        tags: [
          "\u5E3D\u5B50"
        ]
      },
      {
        unicode: "\u{1F393}\uFE0F",
        tags: [
          "\u5352\u696D",
          "\u5E3D\u5B50"
        ]
      },
      {
        unicode: "\u{1F9E2}",
        tags: [
          "\u5E3D\u5B50",
          "\u91CE\u7403\u5E3D"
        ]
      },
      {
        unicode: "\u{1FA96}",
        tags: [
          "\u30D8\u30EB\u30E1\u30C3\u30C8",
          "\u30DF\u30EA\u30BF\u30EA\u30FC",
          "\u5175\u58EB",
          "\u6226\u95D8",
          "\u8ECD\u968A"
        ]
      },
      {
        unicode: "\u26D1\uFE0F",
        tags: [
          "\u30D8\u30EB\u30E1\u30C3\u30C8",
          "\u6551\u6025",
          "\u767D\u5341\u5B57"
        ]
      },
      {
        unicode: "\u{1F4FF}",
        tags: [
          "\u30CD\u30C3\u30AF\u30EC\u30B9",
          "\u30ED\u30B6\u30EA\u30AA",
          "\u5FF5\u73E0",
          "\u7948\u308B"
        ]
      },
      {
        unicode: "\u{1F484}",
        tags: [
          "\u30EA\u30C3\u30D7",
          "\u30EA\u30C3\u30D7\u30B9\u30C6\u30A3\u30C3\u30AF",
          "\u5316\u7CA7"
        ]
      },
      {
        unicode: "\u{1F48D}",
        tags: [
          "\u30B8\u30E5\u30A8\u30EA\u30FC",
          "\u30C0\u30A4\u30A2",
          "\u30C0\u30A4\u30E4",
          "\u30EA\u30F3\u30B0"
        ]
      },
      {
        unicode: "\u{1F48E}",
        tags: [
          "\u30B8\u30E5\u30A8\u30EA\u30FC",
          "\u30C0\u30A4\u30A2",
          "\u30C0\u30A4\u30E4"
        ]
      },
      {
        unicode: "\u{1F507}",
        tags: [
          "\u30B9\u30D4\u30FC\u30AB\u30FC",
          "\u30DF\u30E5\u30FC\u30C8",
          "\u6D88\u97F3",
          "\u97F3\u7121\u3057"
        ]
      },
      {
        unicode: "\u{1F508}\uFE0F",
        tags: [
          "\u30DC\u30EA\u30E5\u30FC\u30E0",
          "\u97F3\u91CF"
        ]
      },
      {
        unicode: "\u{1F509}",
        tags: [
          "\u30B9\u30D4\u30FC\u30AB\u30FC",
          "\u30DC\u30EA\u30E5\u30FC\u30E0",
          "\u97F3\u91CF",
          "\u97F3\u91CF\u5C0F"
        ]
      },
      {
        unicode: "\u{1F50A}",
        tags: [
          "\u30B9\u30D4\u30FC\u30AB\u30FC",
          "\u30DC\u30EA\u30E5\u30FC\u30E0",
          "\u5927\u97F3\u91CF",
          "\u97F3\u91CF",
          "\u97F3\u91CF\u5927"
        ]
      },
      {
        unicode: "\u{1F4E2}",
        tags: [
          "\u30B9\u30D4\u30FC\u30AB\u30FC",
          "\u30E1\u30AC\u30DB\u30F3"
        ]
      },
      {
        unicode: "\u{1F4E3}",
        tags: [
          "\u30B9\u30D4\u30FC\u30AB\u30FC",
          "\u62E1\u58F0\u5668"
        ]
      },
      {
        unicode: "\u{1F4EF}",
        tags: [
          "\u30E9\u30C3\u30D1",
          "\u90F5\u4FBF"
        ]
      },
      {
        unicode: "\u{1F514}",
        tags: [
          "\u9234",
          "\u9418"
        ]
      },
      {
        unicode: "\u{1F515}",
        tags: [
          "\u30DF\u30E5\u30FC\u30C8",
          "\u6D88\u97F3",
          "\u9234",
          "\u9418",
          "\u97F3\u7121\u3057"
        ]
      },
      {
        unicode: "\u{1F3BC}",
        tags: [
          "\u30B9\u30B3\u30A2",
          "\u30C8\u97F3\u8A18\u53F7",
          "\u4E94\u7DDA\u8B5C",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F3B5}",
        tags: [
          "8\u5206\u97F3\u7B26",
          "\u9023\u7B26",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F3B6}",
        tags: [
          "8\u5206\u97F3\u7B26",
          "\u97F3\u697D",
          "\u97F3\u7B26"
        ]
      },
      {
        unicode: "\u{1F399}\uFE0F",
        tags: [
          "\u30DE\u30A4\u30AF",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F39A}\uFE0F",
        tags: [
          "\u30B9\u30E9\u30A4\u30C0\u30FC",
          "\u30EC\u30D9\u30EB",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F39B}\uFE0F",
        tags: [
          "\u3064\u307E\u307F",
          "\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB",
          "\u30CE\u30D6",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F3A4}",
        tags: [
          "\u30AB\u30E9\u30AA\u30B1",
          "\u6B4C",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F3A7}\uFE0F",
        tags: [
          "\u30A4\u30E4\u30DB\u30F3",
          "\u30D8\u30C3\u30C9\u30D5\u30A9\u30F3",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F4FB}\uFE0F",
        tags: [
          "\u53D7\u4FE1\u6A5F",
          "\u653E\u9001",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F3B7}",
        tags: [
          "\u30B5\u30AD\u30BD\u30D5\u30A9\u30F3",
          "\u30B5\u30AF\u30BD\u30D5\u30A9\u30F3",
          "\u697D\u5668",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1FA97}",
        tags: [
          "\u3058\u3083\u3070\u3089",
          "\u697D\u5668",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F3B8}",
        tags: [
          "\u697D\u5668",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F3B9}",
        tags: [
          "\u30AD\u30FC\u30DC\u30FC\u30C9",
          "\u30D4\u30A2\u30CE",
          "\u697D\u5668",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F3BA}",
        tags: [
          "\u30E9\u30C3\u30D1",
          "\u697D\u5668",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F3BB}",
        tags: [
          "\u30F4\u30A3\u30AA\u30E9",
          "\u697D\u5668",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1FA95}",
        tags: [
          "\u697D\u5668",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F941}",
        tags: [
          "\u592A\u9F13",
          "\u697D\u5668",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1FA98}",
        tags: [
          "\u30D3\u30FC\u30C8",
          "\u30EA\u30BA\u30E0",
          "\u592A\u9F13",
          "\u697D\u5668",
          "\u97F3\u697D"
        ]
      },
      {
        unicode: "\u{1F4F1}",
        tags: [
          "\u30B9\u30DE\u30DB",
          "\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3",
          "\u643A\u5E2F"
        ]
      },
      {
        unicode: "\u{1F4F2}",
        tags: [
          "\u30B9\u30DE\u30DB",
          "\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3",
          "\u53D7\u4FE1",
          "\u643A\u5E2F\u53D7\u4FE1",
          "\u643A\u5E2F\u96FB\u8A71"
        ]
      },
      {
        unicode: "\u260E\uFE0F",
        tags: [
          "\u30DC\u30BF\u30F3\u5F0F\u96FB\u8A71",
          "\u89AA\u6A5F",
          "\u96FB\u8A71",
          "\u9ED2\u96FB\u8A71"
        ]
      },
      {
        unicode: "\u{1F4DE}",
        tags: [
          "\u5B50\u6A5F",
          "\u96FB\u8A71"
        ]
      },
      {
        unicode: "\u{1F4DF}\uFE0F",
        tags: [
          "\u30DA\u30FC\u30B8\u30E3\u30FC",
          "\u30DD\u30B1\u30C3\u30C8\u30D9\u30EB"
        ]
      },
      {
        unicode: "\u{1F4E0}",
        tags: [
          "fax",
          "\u8907\u5408\u6A5F",
          "\u96FB\u8A71"
        ]
      },
      {
        unicode: "\u{1F50B}",
        tags: [
          "\u30D0\u30C3\u30C6\u30EA\u30FC",
          "\u4E7E\u96FB\u6C60"
        ]
      },
      {
        unicode: "\u{1F50C}",
        tags: [
          "\u30D7\u30E9\u30B0",
          "\u96FB\u6E90"
        ]
      },
      {
        unicode: "\u{1F4BB}\uFE0F",
        tags: [
          "pc",
          "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC",
          "\u30D1\u30BD\u30B3\u30F3",
          "\u30E9\u30C3\u30D7\u30C8\u30C3\u30D7"
        ]
      },
      {
        unicode: "\u{1F5A5}\uFE0F",
        tags: [
          "pc",
          "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC",
          "\u30C7\u30B9\u30AF\u30C8\u30C3\u30D7",
          "\u30D1\u30BD\u30B3\u30F3"
        ]
      },
      {
        unicode: "\u{1F5A8}\uFE0F",
        tags: [
          "\u30B3\u30D4\u30FC\u6A5F",
          "\u30D7\u30EA\u30F3\u30BF\u30FC",
          "\u5370\u5237\u6A5F",
          "\u8907\u5408\u6A5F"
        ]
      },
      {
        unicode: "\u2328\uFE0F",
        tags: [
          "pc",
          "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC",
          "\u30D1\u30BD\u30B3\u30F3"
        ]
      },
      {
        unicode: "\u{1F5B1}\uFE0F",
        tags: [
          "pc",
          "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC",
          "\u30D1\u30BD\u30B3\u30F3"
        ]
      },
      {
        unicode: "\u{1F5B2}\uFE0F",
        tags: [
          "pc",
          "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC",
          "\u30D1\u30BD\u30B3\u30F3"
        ]
      },
      {
        unicode: "\u{1F4BD}",
        tags: [
          "md",
          "mo",
          "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC",
          "\u30DF\u30CB\u30C7\u30A3\u30B9\u30AF"
        ]
      },
      {
        unicode: "\u{1F4BE}",
        tags: [
          "fd",
          "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC",
          "\u30C7\u30A3\u30B9\u30AF"
        ]
      },
      {
        unicode: "\u{1F4BF}\uFE0F",
        tags: [
          "blu-ray",
          "cd",
          "dvd",
          "\u30C7\u30A3\u30B9\u30AF",
          "\u30D6\u30EB\u30FC\u30EC\u30A4"
        ]
      },
      {
        unicode: "\u{1F4C0}",
        tags: [
          "blu-ray",
          "cd",
          "dvd",
          "\u30C7\u30A3\u30B9\u30AF",
          "\u30D6\u30EB\u30FC\u30EC\u30A4"
        ]
      },
      {
        unicode: "\u{1F9EE}",
        tags: [
          "\u30A2\u30D0\u30AB\u30B9",
          "\u7B97\u76E4"
        ]
      },
      {
        unicode: "\u{1F3A5}",
        tags: [
          "\u30AB\u30E1\u30E9",
          "\u30E0\u30FC\u30D3\u30FC",
          "\u6620\u753B"
        ]
      },
      {
        unicode: "\u{1F39E}\uFE0F",
        tags: [
          "\u30D5\u30A3\u30EB\u30E0",
          "\u30D5\u30EC\u30FC\u30E0",
          "\u30E0\u30FC\u30D3\u30FC",
          "\u6620\u753B"
        ]
      },
      {
        unicode: "\u{1F4FD}\uFE0F",
        tags: [
          "\u30D7\u30ED\u30B8\u30A7\u30AF\u30BF\u30FC",
          "\u30E0\u30FC\u30D3\u30FC",
          "\u6620\u753B"
        ]
      },
      {
        unicode: "\u{1F3AC}\uFE0F",
        tags: [
          "\u6620\u753B"
        ]
      },
      {
        unicode: "\u{1F4FA}\uFE0F",
        tags: [
          "tv",
          "\u30D3\u30C7\u30AA"
        ]
      },
      {
        unicode: "\u{1F4F7}\uFE0F",
        tags: [
          "\u5199\u771F"
        ]
      },
      {
        unicode: "\u{1F4F8}",
        tags: [
          "\u30AB\u30E1\u30E9",
          "\u30AB\u30E1\u30E9\u30D5\u30E9\u30C3\u30B7\u30E5",
          "\u5199\u771F"
        ]
      },
      {
        unicode: "\u{1F4F9}\uFE0F",
        tags: [
          "\u30AB\u30E1\u30E9",
          "\u30D3\u30C7\u30AA",
          "\u30E0\u30FC\u30D3\u30FC",
          "\u52D5\u753B"
        ]
      },
      {
        unicode: "\u{1F4FC}",
        tags: [
          "vhs",
          "\u30D3\u30C7\u30AA\u30AB\u30BB\u30C3\u30C8",
          "\u52D5\u753B"
        ]
      },
      {
        unicode: "\u{1F50D}\uFE0F",
        tags: [
          "\u30EB\u30FC\u30DA",
          "\u691C\u7D22",
          "\u866B\u3081\u304C\u306D"
        ]
      },
      {
        unicode: "\u{1F50E}",
        tags: [
          "\u30EB\u30FC\u30DA",
          "\u691C\u7D22",
          "\u866B\u3081\u304C\u306D"
        ]
      },
      {
        unicode: "\u{1F56F}\uFE0F",
        tags: [
          "\u30AD\u30E3\u30F3\u30C9\u30EB",
          "\u30ED\u30A6\u30BD\u30AF",
          "\u660E\u304B\u308A"
        ]
      },
      {
        unicode: "\u{1F4A1}",
        tags: [
          "\u3072\u3089\u3081\u304D",
          "\u3074\u3053\u30FC\u3093",
          "\u660E\u304B\u308A"
        ]
      },
      {
        unicode: "\u{1F526}",
        tags: [
          "\u30E9\u30A4\u30C8",
          "\u660E\u304B\u308A"
        ]
      },
      {
        unicode: "\u{1F3EE}",
        tags: [
          "\u3061\u3087\u3046\u3061\u3093",
          "\u5C45\u9152\u5C4B",
          "\u98F2\u307F\u5C4B"
        ]
      },
      {
        unicode: "\u{1FA94}",
        tags: [
          "\u30AA\u30A4\u30EB",
          "\u30E9\u30F3\u30D7",
          "\u660E\u304B\u308A"
        ]
      },
      {
        unicode: "\u{1F4D4}",
        tags: [
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F4D5}",
        tags: [
          "\u66F8\u7C4D"
        ]
      },
      {
        unicode: "\u{1F4D6}",
        tags: [
          "\u66F8\u7C4D"
        ]
      },
      {
        unicode: "\u{1F4D7}",
        tags: [
          "\u66F8\u7C4D"
        ]
      },
      {
        unicode: "\u{1F4D8}",
        tags: [
          "\u66F8\u7C4D"
        ]
      },
      {
        unicode: "\u{1F4D9}",
        tags: [
          "\u66F8\u7C4D"
        ]
      },
      {
        unicode: "\u{1F4DA}\uFE0F",
        tags: [
          "\u66F8\u7C4D"
        ]
      },
      {
        unicode: "\u{1F4D3}",
        tags: [
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F4D2}",
        tags: [
          "\u53F0\u5E33",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F4C3}",
        tags: [
          "\u30AB\u30FC\u30EB",
          "\u6587\u66F8",
          "\u66F8\u985E"
        ]
      },
      {
        unicode: "\u{1F4DC}",
        tags: [
          "\u6587\u66F8",
          "\u66F8\u985E"
        ]
      },
      {
        unicode: "\u{1F4C4}",
        tags: [
          "\u6587\u66F8",
          "\u66F8\u985E"
        ]
      },
      {
        unicode: "\u{1F4F0}",
        tags: [
          "\u30CB\u30E5\u30FC\u30B9",
          "\u65B0\u805E\u7D19"
        ]
      },
      {
        unicode: "\u{1F5DE}\uFE0F",
        tags: [
          "\u30CB\u30E5\u30FC\u30B9",
          "\u65B0\u805E",
          "\u65B0\u805E\u7D19"
        ]
      },
      {
        unicode: "\u{1F4D1}",
        tags: [
          "\u3075\u305B\u3093",
          "\u4ED8\u7B8B",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F516}",
        tags: [
          "\u30BF\u30B0",
          "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF",
          "\u4ED8\u7B8B"
        ]
      },
      {
        unicode: "\u{1F3F7}\uFE0F",
        tags: [
          "\u30BF\u30B0",
          "\u30E9\u30D9\u30EB"
        ]
      },
      {
        unicode: "\u{1F4B0}\uFE0F",
        tags: [
          "\u304A\u91D1",
          "\u30C9\u30EB",
          "\u8CDE\u91D1",
          "\u91D1\u888B"
        ]
      },
      {
        unicode: "\u{1FA99}",
        tags: [
          "\u304A\u91D1",
          "\u5C0F\u92AD",
          "\u786C\u8CA8",
          "\u91D1\u8CA8",
          "\u9280\u8CA8"
        ]
      },
      {
        unicode: "\u{1F4B4}",
        tags: [
          "\u304A\u672D",
          "\u304A\u91D1",
          "\u5186",
          "\u672D\u675F",
          "\u901A\u8CA8"
        ]
      },
      {
        unicode: "\u{1F4B5}",
        tags: [
          "\u304A\u672D",
          "\u304A\u91D1",
          "\u30C9\u30EB",
          "\u672D\u675F",
          "\u901A\u8CA8"
        ]
      },
      {
        unicode: "\u{1F4B6}",
        tags: [
          "\u304A\u672D",
          "\u304A\u91D1",
          "\u30E6\u30FC\u30ED",
          "\u672D\u675F",
          "\u901A\u8CA8"
        ]
      },
      {
        unicode: "\u{1F4B7}",
        tags: [
          "\u304A\u672D",
          "\u304A\u91D1",
          "\u30DD\u30F3\u30C9",
          "\u672D\u675F",
          "\u901A\u8CA8"
        ]
      },
      {
        unicode: "\u{1F4B8}",
        tags: [
          "\u304A\u672D",
          "\u304A\u91D1",
          "\u30C9\u30EB",
          "\u672D\u675F"
        ]
      },
      {
        unicode: "\u{1F4B3}\uFE0F",
        tags: [
          "\u304A\u91D1",
          "\u30AB\u30FC\u30C9",
          "\u30AD\u30E3\u30C3\u30B7\u30E5\u30AB\u30FC\u30C9",
          "\u9280\u884C"
        ]
      },
      {
        unicode: "\u{1F9FE}",
        tags: [
          "\u4F1A\u8A08",
          "\u7C3F\u8A18",
          "\u9818\u53CE\u66F8"
        ]
      },
      {
        unicode: "\u{1F4B9}",
        tags: [
          "\u30B0\u30E9\u30D5",
          "\u30C1\u30E3\u30FC\u30C8",
          "\u5E02\u5834",
          "\u682A",
          "\u682A\u4FA1"
        ]
      },
      {
        unicode: "\u2709\uFE0F",
        tags: [
          "e\u30E1\u30FC\u30EB",
          "\u624B\u7D19",
          "\u90F5\u4FBF",
          "\u96FB\u5B50\u30E1\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F4E7}",
        tags: [
          "e\u30E1\u30FC\u30EB",
          "\u5C01\u7B52",
          "\u624B\u7D19",
          "\u90F5\u4FBF",
          "\u96FB\u5B50\u30E1\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F4E8}",
        tags: [
          "e\u30E1\u30FC\u30EB",
          "\u53D7\u4FE1\u4E2D",
          "\u96FB\u5B50\u30E1\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F4E9}",
        tags: [
          "e\u30E1\u30FC\u30EB",
          "\u9001\u4FE1",
          "\u96FB\u5B50\u30E1\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F4E4}\uFE0F",
        tags: [
          "e\u30E1\u30FC\u30EB",
          "\u30C8\u30EC\u30A4",
          "\u9001\u4FE1",
          "\u96FB\u5B50\u30E1\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F4E5}\uFE0F",
        tags: [
          "e\u30E1\u30FC\u30EB",
          "\u30C8\u30EC\u30A4",
          "\u53D7\u4FE1",
          "\u96FB\u5B50\u30E1\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F4E6}\uFE0F",
        tags: [
          "\u5B85\u6025\u4FBF",
          "\u5B85\u914D\u4FBF",
          "\u5C0F\u5305",
          "\u6BB5\u30DC\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F4EB}\uFE0F",
        tags: [
          "\u30DD\u30B9\u30C8",
          "\u624B\u7D19\u3042\u308A",
          "\u90F5\u4FBF\u53D7\u3051",
          "\u90F5\u4FBF\u7BB1",
          "\u9589\u3058\u305F"
        ]
      },
      {
        unicode: "\u{1F4EA}\uFE0F",
        tags: [
          "\u30DD\u30B9\u30C8",
          "\u624B\u7D19\u306A\u3057",
          "\u90F5\u4FBF\u53D7\u3051",
          "\u90F5\u4FBF\u7BB1",
          "\u9589\u3058\u305F"
        ]
      },
      {
        unicode: "\u{1F4EC}\uFE0F",
        tags: [
          "\u30DD\u30B9\u30C8",
          "\u624B\u7D19\u3042\u308A",
          "\u90F5\u4FBF\u53D7\u3051",
          "\u90F5\u4FBF\u7BB1",
          "\u958B\u3044\u305F"
        ]
      },
      {
        unicode: "\u{1F4ED}\uFE0F",
        tags: [
          "\u30DD\u30B9\u30C8",
          "\u624B\u7D19\u306A\u3057",
          "\u90F5\u4FBF\u53D7\u3051",
          "\u90F5\u4FBF\u7BB1",
          "\u958B\u3044\u305F"
        ]
      },
      {
        unicode: "\u{1F4EE}",
        tags: [
          "\u30DD\u30B9\u30C8",
          "\u624B\u7D19",
          "\u90F5\u4FBF",
          "\u90F5\u4FBF\u7BB1"
        ]
      },
      {
        unicode: "\u{1F5F3}\uFE0F",
        tags: [
          "\u9078\u6319"
        ]
      },
      {
        unicode: "\u270F\uFE0F",
        tags: [
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u2712\uFE0F",
        tags: [
          "\u4E07\u5E74\u7B46",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F58B}\uFE0F",
        tags: [
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F58A}\uFE0F",
        tags: [
          "\u30DC\u30FC\u30EB\u30DA\u30F3",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F58C}\uFE0F",
        tags: [
          "\u6587\u5177",
          "\u6587\u623F\u5177",
          "\u7D75\u306E\u5177"
        ]
      },
      {
        unicode: "\u{1F58D}\uFE0F",
        tags: [
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F4DD}",
        tags: [
          "\u30E1\u30E2",
          "\u6587\u5177",
          "\u6587\u623F\u5177",
          "\u7D19\u3068\u925B\u7B46"
        ]
      },
      {
        unicode: "\u{1F4BC}",
        tags: [
          "\u304B\u3070\u3093"
        ]
      },
      {
        unicode: "\u{1F4C1}",
        tags: [
          "\u30D5\u30A1\u30A4\u30EB",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F4C2}",
        tags: [
          "\u30D5\u30A1\u30A4\u30EB",
          "\u30D5\u30A9\u30EB\u30C0\u30FC",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F5C2}\uFE0F",
        tags: [
          "\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9",
          "\u30D5\u30A9\u30EB\u30C0\u30FC",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F4C5}",
        tags: [
          "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB",
          "\u4E88\u5B9A",
          "\u65E5\u4ED8"
        ]
      },
      {
        unicode: "\u{1F4C6}",
        tags: [
          "\u30AB\u30EC\u30F3\u30C0\u30FC",
          "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB",
          "\u4E88\u5B9A",
          "\u65E5\u4ED8"
        ]
      },
      {
        unicode: "\u{1F5D2}\uFE0F",
        tags: [
          "\u30CE\u30FC\u30C8",
          "\u30EA\u30F3\u30B0\u30E1\u30E2",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F5D3}\uFE0F",
        tags: [
          "\u30AB\u30EC\u30F3\u30C0\u30FC",
          "\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB",
          "\u4E88\u5B9A",
          "\u65E5\u4ED8"
        ]
      },
      {
        unicode: "\u{1F4C7}",
        tags: [
          "\u540D\u523A\u30DB\u30EB\u30C0\u30FC",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F4C8}",
        tags: [
          "\u30B0\u30E9\u30D5",
          "\u4E0A\u5411\u304D",
          "\u4E0A\u6607",
          "\u6298\u308C\u7DDA\u30B0\u30E9\u30D5"
        ]
      },
      {
        unicode: "\u{1F4C9}",
        tags: [
          "\u4E0B\u5411\u304D",
          "\u4E0B\u964D",
          "\u6298\u308C\u7DDA\u30B0\u30E9\u30D5"
        ]
      },
      {
        unicode: "\u{1F4CA}",
        tags: [
          "\u30B0\u30E9\u30D5",
          "\u30C1\u30E3\u30FC\u30C8"
        ]
      },
      {
        unicode: "\u{1F4CB}\uFE0F",
        tags: [
          "\u30AF\u30EA\u30C3\u30D7",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F4CC}",
        tags: [
          "\u6587\u5177",
          "\u6587\u623F\u5177",
          "\u753B\u92F2"
        ]
      },
      {
        unicode: "\u{1F4CD}",
        tags: [
          "\u30D7\u30C3\u30B7\u30E5\u30D4\u30F3",
          "\u62BC\u3057\u30D4\u30F3",
          "\u6587\u5177",
          "\u6587\u623F\u5177",
          "\u753B\u3073\u3087\u3046"
        ]
      },
      {
        unicode: "\u{1F4CE}",
        tags: [
          "\u30BC\u30E0\u30AF\u30EA\u30C3\u30D7",
          "\u30DA\u30FC\u30D1\u30FC\u30AF\u30EA\u30C3\u30D7",
          "\u6587\u5177",
          "\u6587\u623F\u5177",
          "\u7D19\u30AF\u30EA\u30C3\u30D7"
        ]
      },
      {
        unicode: "\u{1F587}\uFE0F",
        tags: [
          "\u30DA\u30FC\u30D1\u30FC\u30AF\u30EA\u30C3\u30D7",
          "\u6587\u5177",
          "\u6587\u623F\u5177",
          "\u7D19\u30AF\u30EA\u30C3\u30D7"
        ]
      },
      {
        unicode: "\u{1F4CF}",
        tags: [
          "\u3082\u306E\u3055\u3057",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F4D0}",
        tags: [
          "\u5B9A\u898F",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u2702\uFE0F",
        tags: [
          "\u30AB\u30C3\u30C8",
          "\u5207\u308B",
          "\u6587\u5177",
          "\u6587\u623F\u5177"
        ]
      },
      {
        unicode: "\u{1F5C3}\uFE0F",
        tags: [
          "\u30D5\u30A1\u30A4\u30EB",
          "\u30DC\u30C3\u30AF\u30B9",
          "\u6587\u5177",
          "\u6587\u623F\u5177",
          "\u7BB1"
        ]
      },
      {
        unicode: "\u{1F5C4}\uFE0F",
        tags: [
          "\u30AD\u30E3\u30D3\u30CD\u30C3\u30C8",
          "\u30D5\u30A1\u30A4\u30EB",
          "\u5F15\u304D\u51FA\u3057"
        ]
      },
      {
        unicode: "\u{1F5D1}\uFE0F",
        tags: [
          "\u304F\u305A\u304B\u3054",
          "\u3054\u307F\u304B\u3054",
          "\u30B4\u30DF\u7BB1"
        ]
      },
      {
        unicode: "\u{1F512}\uFE0F",
        tags: [
          "\u30ED\u30C3\u30AF",
          "\u65BD\u9320",
          "\u9320",
          "\u9375"
        ]
      },
      {
        unicode: "\u{1F513}\uFE0F",
        tags: [
          "\u30ED\u30C3\u30AF",
          "\u89E3\u9320",
          "\u9320",
          "\u9375"
        ]
      },
      {
        unicode: "\u{1F50F}",
        tags: [
          "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC",
          "\u30ED\u30C3\u30AF",
          "\u9375"
        ]
      },
      {
        unicode: "\u{1F510}",
        tags: [
          "\u30AD\u30FC",
          "\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3",
          "\u30ED\u30C3\u30AF",
          "\u5B89\u5168"
        ]
      },
      {
        unicode: "\u{1F511}",
        tags: [
          "\u30AD\u30FC",
          "\u30D1\u30B9\u30EF\u30FC\u30C9"
        ]
      },
      {
        unicode: "\u{1F5DD}\uFE0F",
        tags: [
          "\u30AD\u30FC",
          "\u30D1\u30B9\u30EF\u30FC\u30C9",
          "\u624B\u304C\u304B\u308A"
        ]
      },
      {
        unicode: "\u{1F528}",
        tags: [
          "\u304B\u306A\u3065\u3061",
          "\u3068\u3093\u304B\u3061",
          "\u5DE5\u5177"
        ]
      },
      {
        unicode: "\u{1FA93}",
        tags: [
          "\u304A\u306E",
          "\u30CF\u30C1\u30A7\u30C3\u30C8",
          "\u5DE5\u5177",
          "\u6728",
          "\u85AA\u5272\u308A"
        ]
      },
      {
        unicode: "\u26CF\uFE0F",
        tags: [
          "\u5DE5\u5177",
          "\u63A1\u6398"
        ]
      },
      {
        unicode: "\u2692\uFE0F",
        tags: [
          "\u304B\u306A\u3065\u3061",
          "\u3064\u308B\u306F\u3057",
          "\u3068\u3093\u304B\u3061",
          "\u5DE5\u5177"
        ]
      },
      {
        unicode: "\u{1F6E0}\uFE0F",
        tags: [
          "\u304B\u306A\u3065\u3061",
          "\u3068\u3093\u304B\u3061",
          "\u30EC\u30F3\u30C1",
          "\u5DE5\u5177"
        ]
      },
      {
        unicode: "\u{1F5E1}\uFE0F",
        tags: [
          "\u30C0\u30AC\u30FC",
          "\u30CA\u30A4\u30D5",
          "\u6B66\u5668"
        ]
      },
      {
        unicode: "\u2694\uFE0F",
        tags: [
          "\u3064\u308B\u304E",
          "\u5200",
          "\u5263",
          "\u6B66\u5668"
        ]
      },
      {
        unicode: "\u{1F52B}",
        tags: [
          "\u30EA\u30DC\u30EB\u30D0\u30FC",
          "\u62F3\u9283",
          "\u6B66\u5668",
          "\u9283"
        ]
      },
      {
        unicode: "\u{1FA83}",
        tags: [
          "\u30AA\u30FC\u30B9\u30C8\u30E9\u30EA\u30A2",
          "\u6B66\u5668",
          "\u73A9\u5177",
          "\u8DF3\u306D\u8FD4\u308A",
          "\u8FD4\u3063\u3066\u6765\u308B"
        ]
      },
      {
        unicode: "\u{1F3F9}",
        tags: [
          "\u5C04\u624B",
          "\u661F\u5EA7",
          "\u6B66\u5668",
          "\u77E2"
        ]
      },
      {
        unicode: "\u{1F6E1}\uFE0F",
        tags: [
          "\u30B7\u30FC\u30EB\u30C9",
          "\u9632\u5177"
        ]
      },
      {
        unicode: "\u{1FA9A}",
        tags: [
          "\u30CE\u30B3",
          "\u5203",
          "\u5927\u5DE5",
          "\u5DE5\u5177",
          "\u6728\u5DE5"
        ]
      },
      {
        unicode: "\u{1F527}",
        tags: [
          "\u30B9\u30D1\u30CA",
          "\u5DE5\u5177"
        ]
      },
      {
        unicode: "\u{1FA9B}",
        tags: [
          "\u30B9\u30AF\u30EA\u30E5\u30FC\u30C9\u30E9\u30A4\u30D0\u30FC",
          "\u30C9\u30E9\u30A4\u30D0\u30FC",
          "\u5DE5\u5177"
        ]
      },
      {
        unicode: "\u{1F529}",
        tags: [
          "\u30CA\u30C3\u30C8",
          "\u30DC\u30EB\u30C8",
          "\u5DE5\u5177"
        ]
      },
      {
        unicode: "\u2699\uFE0F",
        tags: [
          "\u30AE\u30A2",
          "\u5DE5\u5177"
        ]
      },
      {
        unicode: "\u{1F5DC}\uFE0F",
        tags: [
          "\u30AF\u30E9\u30F3\u30D7",
          "\u30D0\u30A4\u30B9",
          "\u5DE5\u5177"
        ]
      },
      {
        unicode: "\u2696\uFE0F",
        tags: [
          "\u306F\u304B\u308A",
          "\u5316\u5B66",
          "\u5B9F\u9A13",
          "\u661F\u5EA7"
        ]
      },
      {
        unicode: "\u{1F9AF}",
        tags: [
          "\u3064\u3048",
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u8996\u899A",
          "\u969C\u304C\u3044"
        ]
      },
      {
        unicode: "\u{1F517}",
        tags: [
          "\u30EA\u30F3\u30AF"
        ]
      },
      {
        unicode: "\u26D3\uFE0F",
        tags: [
          "\u304F\u3055\u308A",
          "\u30C1\u30A7\u30FC\u30F3"
        ]
      },
      {
        unicode: "\u{1FA9D}",
        tags: [
          "\u5F15\u3063\u639B\u3051",
          "\u639B\u3051\u91D1",
          "\u7559\u3081\u91D1"
        ]
      },
      {
        unicode: "\u{1F9F0}",
        tags: [
          "\u30C4\u30FC\u30EB\u30DC\u30C3\u30AF\u30B9",
          "\u30E1\u30AB\u30CB\u30C3\u30AF",
          "\u6574\u5099\u58EB",
          "\u6A5F\u68B0\u5DE5"
        ]
      },
      {
        unicode: "\u{1F9F2}",
        tags: [
          "u\u5B57\u578B\u78C1\u77F3",
          "\u30DE\u30B0\u30CD\u30C3\u30C8",
          "\u8E44\u9244"
        ]
      },
      {
        unicode: "\u{1FA9C}",
        tags: [
          "\u30B9\u30C6\u30C3\u30D1\u30FC",
          "\u767B\u308B",
          "\u9AD8\u6240\u4F5C\u696D"
        ]
      },
      {
        unicode: "\u2697\uFE0F",
        tags: [
          "\u5316\u5B66",
          "\u5B9F\u9A13"
        ]
      },
      {
        unicode: "\u{1F9EA}",
        tags: [
          "\u30E9\u30DC",
          "\u5316\u5B66",
          "\u5B9F\u9A13"
        ]
      },
      {
        unicode: "\u{1F9EB}",
        tags: [
          "\u30D0\u30AF\u30C6\u30EA\u30A2",
          "\u57F9\u990A",
          "\u751F\u7269\u5B66"
        ]
      },
      {
        unicode: "\u{1F9EC}",
        tags: [
          "dna",
          "\u751F\u7269\u5B66",
          "\u9032\u5316",
          "\u907A\u4F1D\u5B50"
        ]
      },
      {
        unicode: "\u{1F52C}",
        tags: [
          "\u30B5\u30A4\u30A8\u30F3\u30B9",
          "\u7814\u7A76",
          "\u79D1\u5B66"
        ]
      },
      {
        unicode: "\u{1F52D}",
        tags: [
          "\u30B5\u30A4\u30A8\u30F3\u30B9",
          "\u5929\u4F53\u89B3\u6E2C",
          "\u79D1\u5B66",
          "\u89B3\u6E2C"
        ]
      },
      {
        unicode: "\u{1F4E1}",
        tags: [
          "\u30A2\u30F3\u30C6\u30CA",
          "\u30D1\u30E9\u30DC\u30E9",
          "\u885B\u661F\u30A2\u30F3\u30C6\u30CA",
          "\u96FB\u6CE2"
        ]
      },
      {
        unicode: "\u{1F489}",
        tags: [
          "\u533B\u8005",
          "\u6CE8\u5C04",
          "\u75C5\u6C17",
          "\u85AC"
        ]
      },
      {
        unicode: "\u{1FA78}",
        tags: [
          "\u3051\u304C",
          "\u533B\u8005",
          "\u732E\u8840",
          "\u751F\u7406"
        ]
      },
      {
        unicode: "\u{1F48A}",
        tags: [
          "\u30AB\u30D7\u30BB\u30EB",
          "\u533B\u8005",
          "\u75C5\u6C17"
        ]
      },
      {
        unicode: "\u{1FA79}",
        tags: [
          "\u3051\u304C",
          "\u3070\u3093\u305D\u3046\u3053\u3046",
          "\u50B7",
          "\u624B\u5F53\u3066",
          "\u85AC"
        ]
      },
      {
        unicode: "\u{1FA7A}",
        tags: [
          "\u533B\u8005",
          "\u5FC3\u81D3",
          "\u75C5\u6C17"
        ]
      },
      {
        unicode: "\u{1F6AA}",
        tags: [
          "\u6238",
          "\u6249"
        ]
      },
      {
        unicode: "\u{1F6D7}",
        tags: [
          "\u30A2\u30AF\u30BB\u30B7\u30D3\u30EA\u30C6\u30A3",
          "\u30D0\u30EA\u30A2\u30D5\u30EA\u30FC",
          "\u30EA\u30D5\u30C8",
          "\u6607\u964D\u6A5F"
        ]
      },
      {
        unicode: "\u{1FA9E}",
        tags: [
          "\u30DF\u30E9\u30FC",
          "\u53CD\u5C04",
          "\u59FF\u898B",
          "\u8EAB\u3060\u3057\u306A\u307F"
        ]
      },
      {
        unicode: "\u{1FA9F}",
        tags: [
          "\u30D5\u30EC\u30FC\u30E0",
          "\u63DB\u6C17",
          "\u773A\u3081",
          "\u958B\u3051\u308B"
        ]
      },
      {
        unicode: "\u{1F6CF}\uFE0F",
        tags: [
          "\u30DB\u30C6\u30EB",
          "\u5BDD\u308B",
          "\u7761\u7720"
        ]
      },
      {
        unicode: "\u{1F6CB}\uFE0F",
        tags: [
          "\u30BD\u30D5\u30A1",
          "\u30DB\u30C6\u30EB",
          "\u30E9\u30F3\u30D7"
        ]
      },
      {
        unicode: "\u{1FA91}",
        tags: [
          "\u30B7\u30FC\u30C8",
          "\u30C1\u30A7\u30A2",
          "\u5BB6\u5177",
          "\u8170\u639B\u3051"
        ]
      },
      {
        unicode: "\u{1F6BD}",
        tags: [
          "\u304A\u624B\u6D17\u3044",
          "\u30C8\u30A4\u30EC",
          "\u4FBF\u5EA7"
        ]
      },
      {
        unicode: "\u{1FAA0}",
        tags: [
          "\u3059\u3063\u307D\u3093",
          "\u30C8\u30A4\u30EC",
          "\u30D7\u30E9\u30F3\u30B8\u30E3\u30FC",
          "\u5438\u5F15\u30AB\u30C3\u30D7",
          "\u901A\u6C34\u30AB\u30C3\u30D7"
        ]
      },
      {
        unicode: "\u{1F6BF}",
        tags: [
          "\u98A8\u5442"
        ]
      },
      {
        unicode: "\u{1F6C1}",
        tags: [
          "\u6D74\u69FD",
          "\u98A8\u5442"
        ]
      },
      {
        unicode: "\u{1FAA4}",
        tags: [
          "\u304A\u3073\u304D\u5BC4\u305B\u308B",
          "\u3070\u306D",
          "\u308F\u306A",
          "\u30DE\u30A6\u30B9\u30C8\u30E9\u30C3\u30D7",
          "\u4ED5\u639B\u3051"
        ]
      },
      {
        unicode: "\u{1FA92}",
        tags: [
          "\u3072\u3052\u305D\u308A",
          "\u30EC\u30FC\u30B6\u30FC",
          "\u5203"
        ]
      },
      {
        unicode: "\u{1F9F4}",
        tags: [
          "\u30B7\u30E3\u30F3\u30D7\u30FC",
          "\u5316\u7CA7\u6C34",
          "\u65E5\u713C\u3051\u6B62\u3081"
        ]
      },
      {
        unicode: "\u{1F9F7}",
        tags: [
          "\u6B62\u3081\u30D4\u30F3"
        ]
      },
      {
        unicode: "\u{1F9F9}",
        tags: [
          "\u6383\u304F",
          "\u6383\u9664",
          "\u9B54\u5973"
        ]
      },
      {
        unicode: "\u{1F9FA}",
        tags: [
          "\u30D4\u30AF\u30CB\u30C3\u30AF",
          "\u53CE\u7A6B",
          "\u6D17\u6FEF"
        ]
      },
      {
        unicode: "\u{1F9FB}",
        tags: [
          "\u30AD\u30C3\u30C1\u30F3\u30DA\u30FC\u30D1\u30FC",
          "\u30DA\u30FC\u30D1\u30FC\u30BF\u30AA\u30EB"
        ]
      },
      {
        unicode: "\u{1FAA3}",
        tags: [
          "\u304A\u3051",
          "\u3070\u3051\u3064",
          "\u30DD\u30EA\u30D0\u30B1\u30C4",
          "\u5BB9\u5668"
        ]
      },
      {
        unicode: "\u{1F9FC}",
        tags: [
          "\u30BD\u30FC\u30D7",
          "\u98A8\u5442"
        ]
      },
      {
        unicode: "\u{1FAA5}",
        tags: [
          "\u304A\u624B\u5165\u308C",
          "\u6B6F\u78E8\u304D",
          "\u6D17\u9762\u6240",
          "\u866B\u6B6F",
          "\u885B\u751F"
        ]
      },
      {
        unicode: "\u{1F9FD}",
        tags: [
          "\u5438\u53CE",
          "\u6383\u9664",
          "\u6D77\u7DBF"
        ]
      },
      {
        unicode: "\u{1F9EF}",
        tags: [
          "\u6D88\u706B",
          "\u6D88\u706B\u5668\u5177",
          "\u6D88\u9632"
        ]
      },
      {
        unicode: "\u{1F6D2}",
        tags: [
          "\u30AB\u30FC\u30C8",
          "\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0",
          "\u30B9\u30FC\u30D1\u30FC",
          "\u8CB7\u3044\u7269"
        ]
      },
      {
        unicode: "\u{1F6AC}",
        tags: [
          "\u30BF\u30D0\u30B3",
          "\u55AB\u7159"
        ]
      },
      {
        unicode: "\u26B0\uFE0F",
        tags: [
          "\u57CB\u846C",
          "\u68FA",
          "\u6B7B"
        ]
      },
      {
        unicode: "\u{1FAA6}",
        tags: [
          "\u304A\u5893",
          "\u57CB\u846C",
          "\u5893\u5730",
          "\u5893\u5834",
          "\u77F3\u7891"
        ]
      },
      {
        unicode: "\u26B1\uFE0F",
        tags: [
          "\u57CB\u846C",
          "\u6B7B",
          "\u846C\u5100",
          "\u907A\u7070"
        ]
      },
      {
        unicode: "\u{1F5FF}",
        tags: [
          "\u30E2\u30E4\u30A4",
          "\u50CF",
          "\u9854"
        ]
      },
      {
        unicode: "\u{1FAA7}",
        tags: [
          "\u30C7\u30E2",
          "\u4E3B\u5F35",
          "\u6297\u8B70",
          "\u7570\u8B70",
          "\u770B\u677F"
        ]
      }
    ]
  },
  {
    group: 8,
    emojiList: [
      {
        unicode: "\u{1F3E7}",
        tags: [
          "atm",
          "\u73FE\u91D1\u81EA\u52D5\u9810\u3051\u6255\u3044\u6A5F",
          "\u9280\u884C"
        ]
      },
      {
        unicode: "\u{1F6AE}",
        tags: [
          "\u304F\u305A\u304B\u3054",
          "\u3054\u307F\u7BB1",
          "\u30B4\u30DF\u6368\u3066"
        ]
      },
      {
        unicode: "\u{1F6B0}",
        tags: [
          "\u6C34",
          "\u6C34\u9053",
          "\u98F2\u307F\u6C34"
        ]
      },
      {
        unicode: "\u267F\uFE0F",
        tags: [
          "\u30D0\u30EA\u30A2\u30D5\u30EA\u30FC",
          "\u30D0\u30EA\u30E4\u30D5\u30EA\u30FC"
        ]
      },
      {
        unicode: "\u{1F6B9}\uFE0F",
        tags: [
          "wc",
          "\u304A\u624B\u6D17\u3044",
          "\u30C8\u30A4\u30EC",
          "\u5316\u7CA7\u5BA4",
          "\u7537\u6027"
        ]
      },
      {
        unicode: "\u{1F6BA}\uFE0F",
        tags: [
          "wc",
          "\u304A\u624B\u6D17\u3044",
          "\u30C8\u30A4\u30EC",
          "\u5316\u7CA7\u5BA4",
          "\u5973\u6027"
        ]
      },
      {
        unicode: "\u{1F6BB}",
        tags: [
          "wc",
          "\u304A\u624B\u6D17\u3044",
          "\u5316\u7CA7\u5BA4"
        ]
      },
      {
        unicode: "\u{1F6BC}\uFE0F",
        tags: [
          "\u30D9\u30D3\u30FC",
          "\u8D64\u3061\u3083\u3093",
          "\u8D64\u3093\u574A"
        ]
      },
      {
        unicode: "\u{1F6BE}",
        tags: [
          "wc",
          "\u304A\u624B\u6D17\u3044",
          "\u30C8\u30A4\u30EC",
          "\u5316\u7CA7\u5BA4"
        ]
      },
      {
        unicode: "\u{1F6C2}",
        tags: [
          "\u30D1\u30B9\u30DD\u30FC\u30C8\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB",
          "\u5165\u51FA\u56FD",
          "\u51FA\u5165\u56FD"
        ]
      },
      {
        unicode: "\u{1F6C3}",
        tags: [
          "\u901A\u95A2"
        ]
      },
      {
        unicode: "\u{1F6C4}",
        tags: [
          "\u30B9\u30FC\u30C4\u30B1\u30FC\u30B9",
          "\u30D0\u30B2\u30C3\u30B8\u30AF\u30EC\u30FC\u30E0",
          "\u624B\u8377\u7269"
        ]
      },
      {
        unicode: "\u{1F6C5}",
        tags: [
          "\u30B9\u30FC\u30C4\u30B1\u30FC\u30B9",
          "\u30ED\u30C3\u30AB\u30FC",
          "\u624B\u8377\u7269"
        ]
      },
      {
        unicode: "\u26A0\uFE0F",
        tags: [
          "\u6A19\u8B58",
          "\u6CE8\u610F"
        ]
      },
      {
        unicode: "\u{1F6B8}",
        tags: [
          "\u5B50\u4F9B",
          "\u5B66\u6821\u3001\u5E7C\u7A1A\u5712\u3001\u4FDD\u80B2\u6240\u7B49\u3042\u308A",
          "\u6A19\u8B58",
          "\u901A\u5B66\u8DEF"
        ]
      },
      {
        unicode: "\u26D4\uFE0F",
        tags: [
          "\u6A19\u8B58",
          "\u898F\u5236",
          "\u9053\u8DEF"
        ]
      },
      {
        unicode: "\u{1F6AB}",
        tags: [
          "\u6A19\u8B58",
          "\u7981\u6B62",
          "\u898F\u5236",
          "\u9053\u8DEF"
        ]
      },
      {
        unicode: "\u{1F6B3}",
        tags: [
          "\u6A19\u8B58",
          "\u7981\u6B62",
          "\u81EA\u8EE2\u8ECA",
          "\u898F\u5236",
          "\u9053\u8DEF"
        ]
      },
      {
        unicode: "\u{1F6AD}\uFE0F",
        tags: [
          "\u30BF\u30D0\u30B3",
          "\u7159\u8349",
          "\u7981\u6B62"
        ]
      },
      {
        unicode: "\u{1F6AF}",
        tags: [
          "\u3054\u307F",
          "\u30B4\u30DF",
          "\u30B4\u30DF\u6368\u3066\u7981\u6B62",
          "\u7981\u6B62"
        ]
      },
      {
        unicode: "\u{1F6B1}",
        tags: [
          "\u7981\u6B62",
          "\u98F2\u3081\u306A\u3044\u6C34"
        ]
      },
      {
        unicode: "\u{1F6B7}",
        tags: [
          "\u6A19\u8B58",
          "\u7981\u6B62",
          "\u898F\u5236",
          "\u9053\u8DEF"
        ]
      },
      {
        unicode: "\u{1F4F5}",
        tags: [
          "\u30B9\u30DE\u30DB\u7981\u6B62",
          "\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3\u7981\u6B62",
          "\u643A\u5E2F\u7981\u6B62"
        ]
      },
      {
        unicode: "\u{1F51E}",
        tags: [
          "18\u7981",
          "\u672A\u6210\u5E74",
          "\u7981\u6B62"
        ]
      },
      {
        unicode: "\u2622\uFE0F",
        tags: [
          "\u5371\u967A",
          "\u653E\u5C04\u6027",
          "\u653E\u5C04\u7DDA"
        ]
      },
      {
        unicode: "\u2623\uFE0F",
        tags: [
          "\u5371\u967A",
          "\u6709\u5BB3\u7269\u8CEA"
        ]
      },
      {
        unicode: "\u2B06\uFE0F",
        tags: [
          "\u4E0A",
          "\u5317",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u2197\uFE0F",
        tags: [
          "\u5317\u6771",
          "\u53F3\u4E0A",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u27A1\uFE0F",
        tags: [
          "\u53F3",
          "\u6771",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u2198\uFE0F",
        tags: [
          "\u5357\u6771",
          "\u53F3\u4E0B",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u2B07\uFE0F",
        tags: [
          "\u4E0B",
          "\u5357",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u2199\uFE0F",
        tags: [
          "\u5357\u897F",
          "\u5DE6\u4E0B",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u2B05\uFE0F",
        tags: [
          "\u5DE6",
          "\u77E2\u5370",
          "\u897F"
        ]
      },
      {
        unicode: "\u2196\uFE0F",
        tags: [
          "\u5317\u897F",
          "\u5DE6\u4E0A",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u2195\uFE0F",
        tags: [
          "\u4E0A\u4E0B",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u2194\uFE0F",
        tags: [
          "\u5DE6\u53F3",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u21A9\uFE0F",
        tags: [
          "\u30AB\u30FC\u30D6",
          "\u5DE6",
          "\u66F2\u7DDA",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u21AA\uFE0F",
        tags: [
          "\u30AB\u30FC\u30D6",
          "\u53F3",
          "\u66F2\u7DDA",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u2934\uFE0F",
        tags: [
          "\u30AB\u30FC\u30D6",
          "\u4E0A",
          "\u66F2\u7DDA",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u2935\uFE0F",
        tags: [
          "\u30AB\u30FC\u30D6",
          "\u4E0B",
          "\u66F2\u7DDA",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u{1F503}",
        tags: [
          "\u30EA\u30ED\u30FC\u30C9",
          "\u53F3\u56DE\u308A",
          "\u6642\u8A08\u56DE\u308A",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u{1F504}",
        tags: [
          "\u30EA\u30D4\u30FC\u30C8",
          "\u53CD\u6642\u8A08\u56DE\u308A",
          "\u77E2\u5370",
          "\u7E70\u308A\u8FD4\u3057"
        ]
      },
      {
        unicode: "\u{1F519}",
        tags: [
          "back",
          "back\u77E2\u5370",
          "\u30D0\u30C3\u30AF",
          "\u623B\u308B",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u{1F51A}",
        tags: [
          "end",
          "end\u77E2\u5370",
          "\u30A8\u30F3\u30C9",
          "\u77E2\u5370",
          "\u7D42\u308F\u308A"
        ]
      },
      {
        unicode: "\u{1F51B}",
        tags: [
          "on",
          "on\u77E2\u5370",
          "\u30AA\u30F3",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u{1F51C}",
        tags: [
          "soon",
          "soon\u77E2\u5370",
          "\u3059\u3050",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u{1F51D}",
        tags: [
          "top",
          "top\u77E2\u5370",
          "\u30C8\u30C3\u30D7",
          "\u4E0A",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u{1F6D0}",
        tags: [
          "\u5B97\u6559",
          "\u7948\u308A"
        ]
      },
      {
        unicode: "\u269B\uFE0F",
        tags: [
          "\u5143\u7D20",
          "\u5206\u5B50",
          "\u539F\u5B50",
          "\u7121\u795E\u8AD6"
        ]
      },
      {
        unicode: "\u{1F549}\uFE0F",
        tags: [
          "\u30D2\u30F3\u30C9\u30A5\u30FC\u6559",
          "\u5B97\u6559"
        ]
      },
      {
        unicode: "\u2721\uFE0F",
        tags: [
          "\u30E6\u30C0\u30E4\u6559",
          "\u5B97\u6559",
          "\u661F"
        ]
      },
      {
        unicode: "\u2638\uFE0F",
        tags: [
          "\u4ECF\u6559",
          "\u5B97\u6559",
          "\u8EE2\u6CD5\u8F2A"
        ]
      },
      {
        unicode: "\u262F\uFE0F",
        tags: [
          "\u30A4\u30F3\u30E4\u30F3",
          "\u5B97\u6559",
          "\u9053\u6559"
        ]
      },
      {
        unicode: "\u271D\uFE0F",
        tags: [
          "\u30AD\u30EA\u30B9\u30C8\u6559",
          "\u30AF\u30ED\u30B9",
          "\u5B97\u6559"
        ]
      },
      {
        unicode: "\u2626\uFE0F",
        tags: [
          "\u30AD\u30EA\u30B9\u30C8\u6559",
          "\u5341\u5B57\u67B6",
          "\u5B97\u6559"
        ]
      },
      {
        unicode: "\u262A\uFE0F",
        tags: [
          "\u30A4\u30B9\u30E9\u30E0\u6559",
          "\u4E09\u65E5\u6708",
          "\u5B97\u6559",
          "\u661F"
        ]
      },
      {
        unicode: "\u262E\uFE0F",
        tags: [
          "\u5E73\u548C"
        ]
      },
      {
        unicode: "\u{1F54E}",
        tags: [
          "\u30E1\u30CE\u30E9\u30FC",
          "\u30E6\u30C0\u30E4\u6559",
          "\u5B97\u6559",
          "\u71ED\u53F0"
        ]
      },
      {
        unicode: "\u{1F52F}",
        tags: [
          "\u30C0\u30D3\u30C7",
          "\u516D\u89D2\u661F",
          "\u5360\u3044",
          "\u661F"
        ]
      },
      {
        unicode: "\u2648\uFE0F",
        tags: [
          "\u661F\u5EA7",
          "\u7261\u7F8A\u5EA7"
        ]
      },
      {
        unicode: "\u2649\uFE0F",
        tags: [
          "\u661F\u5EA7",
          "\u7261\u725B\u5EA7"
        ]
      },
      {
        unicode: "\u264A\uFE0F",
        tags: [
          "\u53CC\u5B50\u5EA7",
          "\u661F\u5EA7"
        ]
      },
      {
        unicode: "\u264B\uFE0F",
        tags: [
          "\u661F\u5EA7",
          "\u87F9\u5EA7"
        ]
      },
      {
        unicode: "\u264C\uFE0F",
        tags: [
          "\u661F\u5EA7",
          "\u7345\u5B50\u5EA7"
        ]
      },
      {
        unicode: "\u264D\uFE0F",
        tags: [
          "\u4E59\u5973\u5EA7",
          "\u661F\u5EA7"
        ]
      },
      {
        unicode: "\u264E\uFE0F",
        tags: [
          "\u5929\u79E4\u5EA7",
          "\u661F\u5EA7"
        ]
      },
      {
        unicode: "\u264F\uFE0F",
        tags: [
          "\u661F\u5EA7",
          "\u880D\u5EA7"
        ]
      },
      {
        unicode: "\u2650\uFE0F",
        tags: [
          "\u5C04\u624B\u5EA7",
          "\u661F\u5EA7"
        ]
      },
      {
        unicode: "\u2651\uFE0F",
        tags: [
          "\u5C71\u7F8A\u5EA7",
          "\u661F\u5EA7"
        ]
      },
      {
        unicode: "\u2652\uFE0F",
        tags: [
          "\u661F\u5EA7",
          "\u6C34\u74F6\u5EA7"
        ]
      },
      {
        unicode: "\u2653\uFE0F",
        tags: [
          "\u661F\u5EA7",
          "\u9B5A\u5EA7"
        ]
      },
      {
        unicode: "\u26CE",
        tags: [
          "\u661F\u5EA7",
          "\u86C7\u9063\u5EA7"
        ]
      },
      {
        unicode: "\u{1F500}",
        tags: [
          "\u30B7\u30E3\u30C3\u30D5\u30EB",
          "\u30DC\u30BF\u30F3",
          "\u4EA4\u5DEE",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u{1F501}",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u5168\u66F2",
          "\u77E2\u5370",
          "\u7E70\u308A\u8FD4\u3057"
        ]
      },
      {
        unicode: "\u{1F502}",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u30EA\u30D4\u30FC\u30C8",
          "\u77E2\u5370",
          "\u7E70\u308A\u8FD4\u3057"
        ]
      },
      {
        unicode: "\u25B6\uFE0F",
        tags: [
          "\u30D7\u30EC\u30A4",
          "\u30DC\u30BF\u30F3",
          "\u518D\u751F",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u23E9\uFE0F",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u65E9\u9001\u308A",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u23ED\uFE0F",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u6B21\u306E\u30B7\u30FC\u30F3",
          "\u6B21\u306E\u30C8\u30E9\u30C3\u30AF",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u23EF\uFE0F",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u4E00\u6642\u505C\u6B62",
          "\u518D\u751F",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u25C0\uFE0F",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u5DFB\u304D\u623B\u3057",
          "\u77E2\u5370",
          "\u9006\u518D\u751F"
        ]
      },
      {
        unicode: "\u23EA\uFE0F",
        tags: [
          "\u5DFB\u304D\u623B\u3057",
          "\u623B\u308B",
          "\u65E9\u623B\u3057",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u23EE\uFE0F",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u524D\u306E\u30B7\u30FC\u30F3",
          "\u524D\u306E\u30C8\u30E9\u30C3\u30AF",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u{1F53C}",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u4E0A",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u23EB",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u4E0A",
          "\u4E8C\u91CD",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u{1F53D}",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u4E0B",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u23EC",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u4E0B",
          "\u4E8C\u91CD",
          "\u77E2\u5370"
        ]
      },
      {
        unicode: "\u23F8\uFE0F",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u30DD\u30FC\u30BA",
          "\u4E00\u6642\u505C\u6B62"
        ]
      },
      {
        unicode: "\u23F9\uFE0F",
        tags: [
          "\u30B9\u30C8\u30C3\u30D7",
          "\u30DC\u30BF\u30F3",
          "\u505C\u6B62"
        ]
      },
      {
        unicode: "\u23FA\uFE0F",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u9332\u753B",
          "\u9332\u97F3"
        ]
      },
      {
        unicode: "\u23CF\uFE0F",
        tags: [
          "\u30A4\u30B8\u30A7\u30AF\u30C8",
          "\u30DC\u30BF\u30F3",
          "\u53D6\u308A\u51FA\u3057"
        ]
      },
      {
        unicode: "\u{1F3A6}",
        tags: [
          "\u30AB\u30E1\u30E9",
          "\u52D5\u753B",
          "\u6620\u753B\u9928"
        ]
      },
      {
        unicode: "\u{1F505}",
        tags: [
          "\u30D6\u30E9\u30A4\u30C8\u30CD\u30B9",
          "\u660E\u308B\u3055",
          "\u6697\u3044",
          "\u8F1D\u5EA6"
        ]
      },
      {
        unicode: "\u{1F506}",
        tags: [
          "\u30D6\u30E9\u30A4\u30C8\u30CD\u30B9",
          "\u660E\u308B\u3044",
          "\u660E\u308B\u3055",
          "\u8F1D\u5EA6"
        ]
      },
      {
        unicode: "\u{1F4F6}",
        tags: [
          "\u30B9\u30DE\u30DB",
          "\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3",
          "\u570F\u5185",
          "\u643A\u5E2F\u96FB\u8A71",
          "\u96FB\u6CE2"
        ]
      },
      {
        unicode: "\u{1F4F3}",
        tags: [
          "\u30B9\u30DE\u30DB",
          "\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3",
          "\u643A\u5E2F",
          "\u643A\u5E2F\u96FB\u8A71"
        ]
      },
      {
        unicode: "\u{1F4F4}",
        tags: [
          "\u30B9\u30DE\u30DB",
          "\u30B9\u30DE\u30FC\u30C8\u30D5\u30A9\u30F3",
          "\u96FB\u6E90\u30AA\u30D5"
        ]
      },
      {
        unicode: "\u2640\uFE0F",
        tags: [
          "\u30B7\u30F3\u30DC\u30EB",
          "\u5973",
          "\u5973\u6027"
        ]
      },
      {
        unicode: "\u2642\uFE0F",
        tags: [
          "\u30B7\u30F3\u30DC\u30EB",
          "\u7537",
          "\u7537\u6027"
        ]
      },
      {
        unicode: "\u26A7\uFE0F",
        tags: [
          "lgbt",
          "tg",
          "\u30B7\u30F3\u30DC\u30EB",
          "\u6027\u5225"
        ]
      },
      {
        unicode: "\u2716\uFE0F",
        tags: [
          "\u30AD\u30E3\u30F3\u30BB\u30EB",
          "\u30D0\u30C4",
          "\u30DA\u30B1",
          "\u4E57\u7B97",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u2795",
        tags: [
          "+",
          "\u52A0\u7B97",
          "\u8A18\u53F7",
          "\u8DB3\u3057\u7B97",
          "\u8DB3\u3059"
        ]
      },
      {
        unicode: "\u2796",
        tags: [
          "-",
          "\u5F15\u304D\u7B97",
          "\u5F15\u304F",
          "\u6E1B\u7B97",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u2797",
        tags: [
          "/",
          "\u5272\u308B",
          "\u8A18\u53F7",
          "\u9664\u7B97"
        ]
      },
      {
        unicode: "\u267E\uFE0F",
        tags: [
          "\u4E07\u7269",
          "\u6C38\u9060",
          "\u7121\u9650"
        ]
      },
      {
        unicode: "\u203C\uFE0F",
        tags: [
          "!",
          "\u3073\u3063\u304F\u308A\u30DE\u30FC\u30AF",
          "\u30A8\u30AF\u30B9\u30AF\u30E9\u30E1\u30FC\u30B7\u30E7\u30F3\u30DE\u30FC\u30AF",
          "\u7D04\u7269",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u2049\uFE0F",
        tags: [
          "!",
          "?",
          "\u306F\u3066\u306A\u30DE\u30FC\u30AF",
          "\u3073\u3063\u304F\u308A\u30DE\u30FC\u30AF",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u2753\uFE0F",
        tags: [
          "?",
          "\u306F\u3066\u306A\u30DE\u30FC\u30AF",
          "\u30AF\u30A8\u30B9\u30C1\u30E7\u30F3\u30DE\u30FC\u30AF",
          "\u7D04\u7269",
          "\u8A18\u53F7",
          "\u8D64\u3044\u7591\u554F\u7B26"
        ]
      },
      {
        unicode: "\u2754",
        tags: [
          "?",
          "\u306F\u3066\u306A\u30DE\u30FC\u30AF",
          "\u30AF\u30A8\u30B9\u30C1\u30E7\u30F3\u30DE\u30FC\u30AF",
          "\u7D04\u7269",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u2755",
        tags: [
          "!",
          "\u3073\u3063\u304F\u308A\u30DE\u30FC\u30AF",
          "\u30A8\u30AF\u30B9\u30AF\u30E9\u30E1\u30FC\u30B7\u30E7\u30F3\u30DE\u30FC\u30AF",
          "\u7D04\u7269",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u2757\uFE0F",
        tags: [
          "!",
          "\u3073\u3063\u304F\u308A\u30DE\u30FC\u30AF",
          "\u30A8\u30AF\u30B9\u30AF\u30E9\u30E1\u30FC\u30B7\u30E7\u30F3\u30DE\u30FC\u30AF",
          "\u7D04\u7269",
          "\u8A18\u53F7",
          "\u8D64\u3044\u611F\u5606\u7B26"
        ]
      },
      {
        unicode: "\u3030\uFE0F",
        tags: [
          "\u7D04\u7269",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u{1F4B1}",
        tags: [
          "\u304A\u91D1",
          "\u30C9\u30EB",
          "\u4E21\u66FF",
          "\u5186",
          "\u901A\u8CA8"
        ]
      },
      {
        unicode: "\u{1F4B2}",
        tags: [
          "\u304A\u91D1",
          "\u30C9\u30EB",
          "\u901A\u8CA8"
        ]
      },
      {
        unicode: "\u2695\uFE0F",
        tags: [
          "\u30A2\u30B9\u30AF\u30EC\u30D4\u30AA\u30B9\u306E\u6756",
          "\u533B\u7642",
          "\u533B\u8005",
          "\u6CBB\u7642"
        ]
      },
      {
        unicode: "\u267B\uFE0F",
        tags: [
          "\u30EA\u30B5\u30A4\u30AF\u30EB",
          "\u518D\u5229\u7528",
          "\u518D\u751F"
        ]
      },
      {
        unicode: "\u269C\uFE0F",
        tags: [
          "\u30A8\u30F3\u30D6\u30EC\u30E0",
          "\u30D5\u30E9\u30F3\u30B9\u738B\u5BB6",
          "\u30E6\u30EA",
          "\u7D0B\u7AE0"
        ]
      },
      {
        unicode: "\u{1F531}",
        tags: [
          "\u30A8\u30F3\u30D6\u30EC\u30E0",
          "\u4E09\u3064\u53C8",
          "\u6D77"
        ]
      },
      {
        unicode: "\u{1F4DB}",
        tags: [
          "\u4FDD\u80B2\u5712",
          "\u4FDD\u80B2\u6240",
          "\u5E7C\u7A1A\u5712"
        ]
      },
      {
        unicode: "\u{1F530}",
        tags: [
          "\u521D\u5FC3\u8005",
          "\u82E5\u8449\u30DE\u30FC\u30AF"
        ]
      },
      {
        unicode: "\u2B55\uFE0F",
        tags: [
          "\u5186",
          "\u8A18\u53F7",
          "\u8F2A"
        ]
      },
      {
        unicode: "\u2705",
        tags: [
          "\u30C1\u30A7\u30C3\u30AF",
          "\u30C1\u30A7\u30C3\u30AF\u30DE\u30FC\u30AF",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u2611\uFE0F",
        tags: [
          "\u30C1\u30A7\u30C3\u30AF",
          "\u30C1\u30A7\u30C3\u30AF\u30DE\u30FC\u30AF",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u2714\uFE0F",
        tags: [
          "\u30C1\u30A7\u30C3\u30AF",
          "\u30C1\u30A7\u30C3\u30AF\u30DE\u30FC\u30AF",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u274C",
        tags: [
          "\u30AD\u30E3\u30F3\u30BB\u30EB",
          "\u30DA\u30B1",
          "\u4E57\u7B97",
          "\u639B\u3051\u7B97",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u274E",
        tags: [
          "\u30AD\u30E3\u30F3\u30BB\u30EB",
          "\u30D0\u30C4",
          "\u30DA\u30B1",
          "\u4E57\u7B97",
          "\u639B\u3051\u7B97",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u27B0",
        tags: [
          "\u8A18\u53F7",
          "\u8F2A\u3063\u304B",
          "\u9577\u97F3"
        ]
      },
      {
        unicode: "\u27BF",
        tags: [
          "\u30D5\u30EA\u30FC\u30C0\u30A4\u30E4\u30EB",
          "\u30EB\u30FC\u30D7",
          "\u8A18\u53F7",
          "\u8F2A\u3063\u304B"
        ]
      },
      {
        unicode: "\u303D\uFE0F",
        tags: [
          "\u5EB5\u70B9",
          "\u6B4C\u8A18\u53F7",
          "\u7D04\u7269",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u2733\uFE0F",
        tags: [
          "\u30A2\u30B9\u30BF\u30EA\u30B9\u30AF",
          "\u7D04\u7269",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u2734\uFE0F",
        tags: [
          "\u661F",
          "\u7D04\u7269",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u2747\uFE0F",
        tags: [
          "\u30A2\u30B9\u30BF\u30EA\u30B9\u30AF",
          "\u7D04\u7269",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\xA9\uFE0F",
        tags: [
          "c\u30DE\u30FC\u30AF",
          "\u30B3\u30D4\u30FC\u30E9\u30A4\u30C8",
          "\u8457\u4F5C\u6A29",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\xAE\uFE0F",
        tags: [
          "r\u30DE\u30FC\u30AF",
          "\u767B\u9332\u5546\u6A19",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u2122\uFE0F",
        tags: [
          "tm\u30DE\u30FC\u30AF",
          "\u30C8\u30EC\u30FC\u30C9\u30DE\u30FC\u30AF",
          "\u5546\u6A19",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "#\uFE0F\u20E3",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "*\uFE0F\u20E3",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "0\uFE0F\u20E3",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "1\uFE0F\u20E3",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "2\uFE0F\u20E3",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "3\uFE0F\u20E3",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "4\uFE0F\u20E3",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "5\uFE0F\u20E3",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "6\uFE0F\u20E3",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "7\uFE0F\u20E3",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "8\uFE0F\u20E3",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "9\uFE0F\u20E3",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "\u{1F51F}",
        tags: [
          "\u56F2\u307F\u6570\u5B57"
        ]
      },
      {
        unicode: "\u{1F520}",
        tags: [
          "abcd",
          "\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8",
          "\u30ED\u30FC\u30DE\u5B57",
          "\u5927\u6587\u5B57",
          "\u82F1\u5B57"
        ]
      },
      {
        unicode: "\u{1F521}",
        tags: [
          "abcd",
          "\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8",
          "\u30ED\u30FC\u30DE\u5B57",
          "\u5C0F\u6587\u5B57",
          "\u82F1\u5B57"
        ]
      },
      {
        unicode: "\u{1F522}",
        tags: [
          "1234",
          "\u5165\u529B",
          "\u6570\u5B57"
        ]
      },
      {
        unicode: "\u{1F523}",
        tags: [
          "\u3012\u266A&%",
          "\u5165\u529B",
          "\u8A18\u53F7"
        ]
      },
      {
        unicode: "\u{1F524}",
        tags: [
          "abc",
          "\u30A2\u30EB\u30D5\u30A1\u30D9\u30C3\u30C8",
          "\u30ED\u30FC\u30DE\u5B57",
          "\u82F1\u5B57"
        ]
      },
      {
        unicode: "\u{1F170}\uFE0F",
        tags: [
          "a\u578B",
          "\u8840\u6DB2\u578B",
          "\u8840\u6DB2\u578Ba\u578B"
        ]
      },
      {
        unicode: "\u{1F18E}",
        tags: [
          "ab\u578B",
          "\u8840\u6DB2\u578B",
          "\u8840\u6DB2\u578Bab\u578B"
        ]
      },
      {
        unicode: "\u{1F171}\uFE0F",
        tags: [
          "b\u578B",
          "\u8840\u6DB2\u578B",
          "\u8840\u6DB2\u578Bb\u578B"
        ]
      },
      {
        unicode: "\u{1F191}",
        tags: [
          "cl",
          "cl\u30DE\u30FC\u30AF",
          "\u30AF\u30EA\u30A2"
        ]
      },
      {
        unicode: "\u{1F192}",
        tags: [
          "cool",
          "cool\u30DE\u30FC\u30AF",
          "\u30AF\u30FC\u30EB"
        ]
      },
      {
        unicode: "\u{1F193}",
        tags: [
          "free\u30DE\u30FC\u30AF",
          "\u30BF\u30C0",
          "\u30D5\u30EA\u30FC",
          "\u7121\u6599"
        ]
      },
      {
        unicode: "\u2139\uFE0F",
        tags: [
          "i",
          "\u30A4\u30F3\u30D5\u30A9\u30E1\u30FC\u30B7\u30E7\u30F3",
          "\u60C5\u5831"
        ]
      },
      {
        unicode: "\u{1F194}",
        tags: [
          "id",
          "id\u30DE\u30FC\u30AF",
          "\u30A2\u30A4\u30C7\u30A3\u30FC"
        ]
      },
      {
        unicode: "\u24C2\uFE0F",
        tags: [
          "m",
          "\u4E38",
          "\u4E38\u3044m\u30DE\u30FC\u30AF"
        ]
      },
      {
        unicode: "\u{1F195}",
        tags: [
          "new",
          "new\u30DE\u30FC\u30AF",
          "\u65B0\u3057\u3044"
        ]
      },
      {
        unicode: "\u{1F196}",
        tags: [
          "ng",
          "ng\u30DE\u30FC\u30AF",
          "\u30A8\u30CC\u30B8\u30FC",
          "\u30DC\u30C4"
        ]
      },
      {
        unicode: "\u{1F17E}\uFE0F",
        tags: [
          "o\u578B",
          "\u8840\u6DB2\u578B",
          "\u8840\u6DB2\u578Bo\u578B"
        ]
      },
      {
        unicode: "\u{1F197}",
        tags: [
          "ok",
          "ok\u30DE\u30FC\u30AF",
          "\u30AA\u30C3\u30B1\u30FC",
          "\u30AA\u30FC\u30B1\u30FC"
        ]
      },
      {
        unicode: "\u{1F17F}\uFE0F",
        tags: [
          "p",
          "p\u30DE\u30FC\u30AF",
          "\u30D1\u30FC\u30AD\u30F3\u30B0",
          "\u99D0\u8ECA\u5834"
        ]
      },
      {
        unicode: "\u{1F198}",
        tags: [
          "sos",
          "sos\u30DE\u30FC\u30AF",
          "\u30A8\u30B9\u30AA\u30FC\u30A8\u30B9",
          "\u52A9\u3051\u3066"
        ]
      },
      {
        unicode: "\u{1F199}",
        tags: [
          "up",
          "up\u30DE\u30FC\u30AF",
          "\u30A2\u30C3\u30D7",
          "\u66F4\u65B0"
        ]
      },
      {
        unicode: "\u{1F19A}",
        tags: [
          "vs\u30DE\u30FC\u30AF",
          "\u30D0\u30FC\u30B5\u30B9",
          "\u30D6\u30A4\u30A8\u30B9",
          "\u30F4\u30A1\u30FC\u30B5\u30B9",
          "\u30F4\u30A3\u30A8\u30B9"
        ]
      },
      {
        unicode: "\u{1F201}",
        tags: [
          "\u3053\u3053",
          "\u30B3\u30B3"
        ]
      },
      {
        unicode: "\u{1F202}\uFE0F",
        tags: [
          "\u30B5",
          "\u30B5\u30FC\u30D3\u30B9\u6599"
        ]
      },
      {
        unicode: "\u{1F237}\uFE0F",
        tags: [
          "\u6708",
          "\u6708\u6975",
          "\u6708\u984D"
        ]
      },
      {
        unicode: "\u{1F236}",
        tags: [
          "\u6709",
          "\u6709\u6599",
          "\u6709\u9650"
        ]
      },
      {
        unicode: "\u{1F22F}\uFE0F",
        tags: [
          "\u6307",
          "\u6307\u5B9A\u5E2D"
        ]
      },
      {
        unicode: "\u{1F250}",
        tags: [
          "\u304A\u5F97",
          "\u5F97"
        ]
      },
      {
        unicode: "\u{1F239}",
        tags: [
          "\u30C7\u30A3\u30B9\u30AB\u30A6\u30F3\u30C8",
          "\u5272",
          "\u5272\u5F15"
        ]
      },
      {
        unicode: "\u{1F21A}\uFE0F",
        tags: [
          "\u30BF\u30C0",
          "\u7121",
          "\u7121\u6599"
        ]
      },
      {
        unicode: "\u{1F232}",
        tags: [
          "\u53B3\u7981",
          "\u7981",
          "\u7981\u6B62"
        ]
      },
      {
        unicode: "\u{1F251}",
        tags: [
          "\u53EF",
          "\u53EF\u80FD",
          "\u8A31\u53EF"
        ]
      },
      {
        unicode: "\u{1F238}",
        tags: [
          "\u7533",
          "\u7533\u3057\u8FBC\u307F",
          "\u7533\u8ACB"
        ]
      },
      {
        unicode: "\u{1F234}",
        tags: [
          "\u5408",
          "\u5408\u683C"
        ]
      },
      {
        unicode: "\u{1F233}",
        tags: [
          "\u7A7A",
          "\u7A7A\u304D",
          "\u7A7A\u5BA4",
          "\u7A7A\u5E2D"
        ]
      },
      {
        unicode: "\u3297\uFE0F",
        tags: [
          "\u304A\u3081\u3067\u3068\u3046",
          "\u304A\u795D\u3044",
          "\u795D"
        ]
      },
      {
        unicode: "\u3299\uFE0F",
        tags: [
          "\u6975\u79D8",
          "\u793E\u5916\u79D8",
          "\u79D8",
          "\u79D8\u5BC6"
        ]
      },
      {
        unicode: "\u{1F23A}",
        tags: [
          "\u55B6",
          "\u55B6\u696D\u4E2D",
          "\u55B6\u696D\u65E5"
        ]
      },
      {
        unicode: "\u{1F235}",
        tags: [
          "\u6E80\u54E1",
          "\u6E80\u5BA4",
          "\u6E80\u5E2D",
          "\u6E80\u8ECA"
        ]
      },
      {
        unicode: "\u{1F534}",
        tags: [
          "\u4E38",
          "\u4E38\u3044\u30DC\u30BF\u30F3",
          "\u8D64"
        ]
      },
      {
        unicode: "\u{1F7E0}",
        tags: [
          "\u30AA\u30EC\u30F3\u30B8",
          "\u4E38",
          "\u4E38\u3044\u30DC\u30BF\u30F3"
        ]
      },
      {
        unicode: "\u{1F7E1}",
        tags: [
          "\u4E38",
          "\u4E38\u3044\u30DC\u30BF\u30F3",
          "\u9EC4\u8272"
        ]
      },
      {
        unicode: "\u{1F7E2}",
        tags: [
          "\u4E38",
          "\u4E38\u3044\u30DC\u30BF\u30F3",
          "\u7DD1"
        ]
      },
      {
        unicode: "\u{1F535}",
        tags: [
          "\u4E38",
          "\u4E38\u3044\u30DC\u30BF\u30F3",
          "\u9752"
        ]
      },
      {
        unicode: "\u{1F7E3}",
        tags: [
          "\u4E38",
          "\u4E38\u3044\u30DC\u30BF\u30F3",
          "\u7D2B"
        ]
      },
      {
        unicode: "\u{1F7E4}",
        tags: [
          "\u4E38",
          "\u4E38\u3044\u30DC\u30BF\u30F3",
          "\u8336\u8272"
        ]
      },
      {
        unicode: "\u26AB\uFE0F",
        tags: [
          "\u4E38",
          "\u4E38\u3044\u30DC\u30BF\u30F3",
          "\u9ED2"
        ]
      },
      {
        unicode: "\u26AA\uFE0F",
        tags: [
          "\u4E38",
          "\u4E38\u3044\u30DC\u30BF\u30F3",
          "\u767D"
        ]
      },
      {
        unicode: "\u{1F7E5}",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u8D64"
        ]
      },
      {
        unicode: "\u{1F7E7}",
        tags: [
          "\u30AA\u30EC\u30F3\u30B8",
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62"
        ]
      },
      {
        unicode: "\u{1F7E8}",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u9EC4\u8272"
        ]
      },
      {
        unicode: "\u{1F7E9}",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u7DD1"
        ]
      },
      {
        unicode: "\u{1F7E6}",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u9752"
        ]
      },
      {
        unicode: "\u{1F7EA}",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u7D2B"
        ]
      },
      {
        unicode: "\u{1F7EB}",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u8336\u8272"
        ]
      },
      {
        unicode: "\u2B1B\uFE0F",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u9ED2"
        ]
      },
      {
        unicode: "\u2B1C\uFE0F",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u767D"
        ]
      },
      {
        unicode: "\u25FC\uFE0F",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u9ED2"
        ]
      },
      {
        unicode: "\u25FB\uFE0F",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u767D"
        ]
      },
      {
        unicode: "\u25FE\uFE0F",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u9ED2"
        ]
      },
      {
        unicode: "\u25FD\uFE0F",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u767D"
        ]
      },
      {
        unicode: "\u25AA\uFE0F",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u9ED2"
        ]
      },
      {
        unicode: "\u25AB\uFE0F",
        tags: [
          "\u56DB\u89D2",
          "\u6B63\u65B9\u5F62",
          "\u767D"
        ]
      },
      {
        unicode: "\u{1F536}",
        tags: [
          "\u3072\u3057\u5F62",
          "\u30AA\u30EC\u30F3\u30B8",
          "\u30C0\u30A4\u30A2",
          "\u30C0\u30A4\u30E4",
          "\u56DB\u89D2"
        ]
      },
      {
        unicode: "\u{1F537}",
        tags: [
          "\u3072\u3057\u5F62",
          "\u30C0\u30A4\u30A2",
          "\u30C0\u30A4\u30E4",
          "\u56DB\u89D2",
          "\u9752"
        ]
      },
      {
        unicode: "\u{1F538}",
        tags: [
          "\u3072\u3057\u5F62",
          "\u30AA\u30EC\u30F3\u30B8",
          "\u30C0\u30A4\u30A2",
          "\u30C0\u30A4\u30E4",
          "\u56DB\u89D2"
        ]
      },
      {
        unicode: "\u{1F539}",
        tags: [
          "\u3072\u3057\u5F62",
          "\u30C0\u30A4\u30A2",
          "\u30C0\u30A4\u30E4",
          "\u56DB\u89D2",
          "\u9752"
        ]
      },
      {
        unicode: "\u{1F53A}",
        tags: [
          "\u4E09\u89D2",
          "\u4E0A",
          "\u8D64"
        ]
      },
      {
        unicode: "\u{1F53B}",
        tags: [
          "\u4E09\u89D2",
          "\u4E0B",
          "\u8D64"
        ]
      },
      {
        unicode: "\u{1F4A0}",
        tags: [
          "\u3072\u3057\u5F62",
          "\u30C0\u30A4\u30A2",
          "\u30C0\u30A4\u30E4"
        ]
      },
      {
        unicode: "\u{1F518}",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u4E8C\u91CD\u4E38"
        ]
      },
      {
        unicode: "\u{1F533}",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u56DB\u89D2\u30DC\u30BF\u30F3",
          "\u6B63\u65B9\u5F62"
        ]
      },
      {
        unicode: "\u{1F532}",
        tags: [
          "\u30DC\u30BF\u30F3",
          "\u56DB\u89D2\u30DC\u30BF\u30F3",
          "\u6B63\u65B9\u5F62"
        ]
      }
    ]
  },
  {
    group: 9,
    emojiList: [
      {
        unicode: "\u{1F3C1}",
        tags: [
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D5\u30E9\u30B0",
          "\u30D5\u30E9\u30C3\u30B0",
          "\u30EC\u30FC\u30B9",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F6A9}",
        tags: [
          "\u30B4\u30EB\u30D5",
          "\u30B9\u30DD\u30FC\u30C4",
          "\u30D5\u30E9\u30B0",
          "\u30D5\u30E9\u30C3\u30B0",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F38C}",
        tags: [
          "\u30D5\u30E9\u30B0",
          "\u30D5\u30E9\u30C3\u30B0",
          "\u65D7",
          "\u65E5\u306E\u4E38",
          "\u795D\u65E5"
        ]
      },
      {
        unicode: "\u{1F3F4}",
        tags: [
          "\u30D5\u30E9\u30B0",
          "\u30D5\u30E9\u30C3\u30B0",
          "\u65D7",
          "\u9ED2"
        ]
      },
      {
        unicode: "\u{1F3F3}\uFE0F",
        tags: [
          "\u30D5\u30E9\u30B0",
          "\u30D5\u30E9\u30C3\u30B0",
          "\u65D7",
          "\u767D"
        ]
      },
      {
        unicode: "\u{1F3F3}\uFE0F\u200D\u{1F308}",
        tags: [
          "lgbt",
          "\u30D5\u30E9\u30B0",
          "\u30D5\u30E9\u30C3\u30B0",
          "\u65D7",
          "\u8679\u8272\u306E\u65D7"
        ]
      },
      {
        unicode: "\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F",
        tags: [
          "lgbt",
          "tg",
          "\u30C8\u30E9\u30F3\u30B9\u30B8\u30A7\u30F3\u30C0\u30FC",
          "\u30D5\u30E9\u30B0",
          "\u30D5\u30E9\u30C3\u30B0",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F3F4}\u200D\u2620\uFE0F",
        tags: [
          "\u30B8\u30E7\u30EA\u30FC\u30FB\u30ED\u30B8\u30E3\u30FC",
          "\u5B9D\u7269",
          "\u6D77\u8CCA",
          "\u7565\u596A"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1E8}",
        tags: [
          "AC",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1E9}",
        tags: [
          "AD",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1EA}",
        tags: [
          "AE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1EB}",
        tags: [
          "AF",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1EC}",
        tags: [
          "AG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1EE}",
        tags: [
          "AI",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1F1}",
        tags: [
          "AL",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1F2}",
        tags: [
          "AM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1F4}",
        tags: [
          "AO",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1F6}",
        tags: [
          "AQ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1F7}",
        tags: [
          "AR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1F8}",
        tags: [
          "AS",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1F9}",
        tags: [
          "AT",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1FA}",
        tags: [
          "AU",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1FC}",
        tags: [
          "AW",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1FD}",
        tags: [
          "AX",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E6}\u{1F1FF}",
        tags: [
          "AZ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1E6}",
        tags: [
          "BA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1E7}",
        tags: [
          "BB",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1E9}",
        tags: [
          "BD",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1EA}",
        tags: [
          "BE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1EB}",
        tags: [
          "BF",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1EC}",
        tags: [
          "BG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1ED}",
        tags: [
          "BH",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1EE}",
        tags: [
          "BI",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1EF}",
        tags: [
          "BJ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1F1}",
        tags: [
          "BL",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1F2}",
        tags: [
          "BM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1F3}",
        tags: [
          "BN",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1F4}",
        tags: [
          "BO",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1F6}",
        tags: [
          "BQ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1F7}",
        tags: [
          "BR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1F8}",
        tags: [
          "BS",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1F9}",
        tags: [
          "BT",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1FB}",
        tags: [
          "BV",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1FC}",
        tags: [
          "BW",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1FE}",
        tags: [
          "BY",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E7}\u{1F1FF}",
        tags: [
          "BZ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1E6}",
        tags: [
          "CA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1E8}",
        tags: [
          "CC",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1E9}",
        tags: [
          "CD",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1EB}",
        tags: [
          "CF",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1EC}",
        tags: [
          "CG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1ED}",
        tags: [
          "CH",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1EE}",
        tags: [
          "CI",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1F0}",
        tags: [
          "CK",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1F1}",
        tags: [
          "CL",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1F2}",
        tags: [
          "CM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1F3}",
        tags: [
          "CN",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1F4}",
        tags: [
          "CO",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1F5}",
        tags: [
          "CP",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1F7}",
        tags: [
          "CR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1FA}",
        tags: [
          "CU",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1FB}",
        tags: [
          "CV",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1FC}",
        tags: [
          "CW",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1FD}",
        tags: [
          "CX",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1FE}",
        tags: [
          "CY",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E8}\u{1F1FF}",
        tags: [
          "CZ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E9}\u{1F1EA}",
        tags: [
          "DE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E9}\u{1F1EC}",
        tags: [
          "DG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E9}\u{1F1EF}",
        tags: [
          "DJ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E9}\u{1F1F0}",
        tags: [
          "DK",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E9}\u{1F1F2}",
        tags: [
          "DM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E9}\u{1F1F4}",
        tags: [
          "DO",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1E9}\u{1F1FF}",
        tags: [
          "DZ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EA}\u{1F1E6}",
        tags: [
          "EA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EA}\u{1F1E8}",
        tags: [
          "EC",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EA}\u{1F1EA}",
        tags: [
          "EE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EA}\u{1F1EC}",
        tags: [
          "EG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EA}\u{1F1ED}",
        tags: [
          "EH",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EA}\u{1F1F7}",
        tags: [
          "ER",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EA}\u{1F1F8}",
        tags: [
          "ES",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EA}\u{1F1F9}",
        tags: [
          "ET",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EA}\u{1F1FA}",
        tags: [
          "EU",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EB}\u{1F1EE}",
        tags: [
          "FI",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EB}\u{1F1EF}",
        tags: [
          "FJ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EB}\u{1F1F0}",
        tags: [
          "FK",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EB}\u{1F1F2}",
        tags: [
          "FM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EB}\u{1F1F4}",
        tags: [
          "FO",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EB}\u{1F1F7}",
        tags: [
          "FR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1E6}",
        tags: [
          "GA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1E7}",
        tags: [
          "GB",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1E9}",
        tags: [
          "GD",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1EA}",
        tags: [
          "GE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1EB}",
        tags: [
          "GF",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1EC}",
        tags: [
          "GG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1ED}",
        tags: [
          "GH",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1EE}",
        tags: [
          "GI",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1F1}",
        tags: [
          "GL",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1F2}",
        tags: [
          "GM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1F3}",
        tags: [
          "GN",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1F5}",
        tags: [
          "GP",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1F6}",
        tags: [
          "GQ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1F7}",
        tags: [
          "GR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1F8}",
        tags: [
          "GS",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1F9}",
        tags: [
          "GT",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1FA}",
        tags: [
          "GU",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1FC}",
        tags: [
          "GW",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EC}\u{1F1FE}",
        tags: [
          "GY",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1ED}\u{1F1F0}",
        tags: [
          "HK",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1ED}\u{1F1F2}",
        tags: [
          "HM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1ED}\u{1F1F3}",
        tags: [
          "HN",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1ED}\u{1F1F7}",
        tags: [
          "HR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1ED}\u{1F1F9}",
        tags: [
          "HT",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1ED}\u{1F1FA}",
        tags: [
          "HU",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EE}\u{1F1E8}",
        tags: [
          "IC",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EE}\u{1F1E9}",
        tags: [
          "ID",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EE}\u{1F1EA}",
        tags: [
          "IE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EE}\u{1F1F1}",
        tags: [
          "IL",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EE}\u{1F1F2}",
        tags: [
          "IM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EE}\u{1F1F3}",
        tags: [
          "IN",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EE}\u{1F1F4}",
        tags: [
          "IO",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EE}\u{1F1F6}",
        tags: [
          "IQ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EE}\u{1F1F7}",
        tags: [
          "IR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EE}\u{1F1F8}",
        tags: [
          "IS",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EE}\u{1F1F9}",
        tags: [
          "IT",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EF}\u{1F1EA}",
        tags: [
          "JE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EF}\u{1F1F2}",
        tags: [
          "JM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EF}\u{1F1F4}",
        tags: [
          "JO",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1EF}\u{1F1F5}",
        tags: [
          "JP",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F0}\u{1F1EA}",
        tags: [
          "KE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F0}\u{1F1EC}",
        tags: [
          "KG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F0}\u{1F1ED}",
        tags: [
          "KH",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F0}\u{1F1EE}",
        tags: [
          "KI",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F0}\u{1F1F2}",
        tags: [
          "KM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F0}\u{1F1F3}",
        tags: [
          "KN",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F0}\u{1F1F5}",
        tags: [
          "KP",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F0}\u{1F1F7}",
        tags: [
          "KR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F0}\u{1F1FC}",
        tags: [
          "KW",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F0}\u{1F1FE}",
        tags: [
          "KY",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F0}\u{1F1FF}",
        tags: [
          "KZ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F1}\u{1F1E6}",
        tags: [
          "LA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F1}\u{1F1E7}",
        tags: [
          "LB",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F1}\u{1F1E8}",
        tags: [
          "LC",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F1}\u{1F1EE}",
        tags: [
          "LI",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F1}\u{1F1F0}",
        tags: [
          "LK",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F1}\u{1F1F7}",
        tags: [
          "LR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F1}\u{1F1F8}",
        tags: [
          "LS",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F1}\u{1F1F9}",
        tags: [
          "LT",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F1}\u{1F1FA}",
        tags: [
          "LU",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F1}\u{1F1FB}",
        tags: [
          "LV",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F1}\u{1F1FE}",
        tags: [
          "LY",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1E6}",
        tags: [
          "MA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1E8}",
        tags: [
          "MC",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1E9}",
        tags: [
          "MD",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1EA}",
        tags: [
          "ME",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1EB}",
        tags: [
          "MF",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1EC}",
        tags: [
          "MG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1ED}",
        tags: [
          "MH",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1F0}",
        tags: [
          "MK",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1F1}",
        tags: [
          "ML",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1F2}",
        tags: [
          "MM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1F3}",
        tags: [
          "MN",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1F4}",
        tags: [
          "MO",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1F5}",
        tags: [
          "MP",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1F6}",
        tags: [
          "MQ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1F7}",
        tags: [
          "MR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1F8}",
        tags: [
          "MS",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1F9}",
        tags: [
          "MT",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1FA}",
        tags: [
          "MU",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1FB}",
        tags: [
          "MV",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1FC}",
        tags: [
          "MW",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1FD}",
        tags: [
          "MX",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1FE}",
        tags: [
          "MY",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F2}\u{1F1FF}",
        tags: [
          "MZ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F3}\u{1F1E6}",
        tags: [
          "NA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F3}\u{1F1E8}",
        tags: [
          "NC",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F3}\u{1F1EA}",
        tags: [
          "NE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F3}\u{1F1EB}",
        tags: [
          "NF",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F3}\u{1F1EC}",
        tags: [
          "NG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F3}\u{1F1EE}",
        tags: [
          "NI",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F3}\u{1F1F1}",
        tags: [
          "NL",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F3}\u{1F1F4}",
        tags: [
          "NO",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F3}\u{1F1F5}",
        tags: [
          "NP",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F3}\u{1F1F7}",
        tags: [
          "NR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F3}\u{1F1FA}",
        tags: [
          "NU",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F3}\u{1F1FF}",
        tags: [
          "NZ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F4}\u{1F1F2}",
        tags: [
          "OM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1E6}",
        tags: [
          "PA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1EA}",
        tags: [
          "PE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1EB}",
        tags: [
          "PF",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1EC}",
        tags: [
          "PG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1ED}",
        tags: [
          "PH",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1F0}",
        tags: [
          "PK",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1F1}",
        tags: [
          "PL",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1F2}",
        tags: [
          "PM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1F3}",
        tags: [
          "PN",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1F7}",
        tags: [
          "PR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1F8}",
        tags: [
          "PS",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1F9}",
        tags: [
          "PT",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1FC}",
        tags: [
          "PW",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F5}\u{1F1FE}",
        tags: [
          "PY",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F6}\u{1F1E6}",
        tags: [
          "QA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F7}\u{1F1EA}",
        tags: [
          "RE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F7}\u{1F1F4}",
        tags: [
          "RO",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F7}\u{1F1F8}",
        tags: [
          "RS",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F7}\u{1F1FA}",
        tags: [
          "RU",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F7}\u{1F1FC}",
        tags: [
          "RW",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1E6}",
        tags: [
          "SA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1E7}",
        tags: [
          "SB",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1E8}",
        tags: [
          "SC",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1E9}",
        tags: [
          "SD",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1EA}",
        tags: [
          "SE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1EC}",
        tags: [
          "SG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1ED}",
        tags: [
          "SH",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1EE}",
        tags: [
          "SI",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1EF}",
        tags: [
          "SJ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1F0}",
        tags: [
          "SK",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1F1}",
        tags: [
          "SL",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1F2}",
        tags: [
          "SM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1F3}",
        tags: [
          "SN",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1F4}",
        tags: [
          "SO",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1F7}",
        tags: [
          "SR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1F8}",
        tags: [
          "SS",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1F9}",
        tags: [
          "ST",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1FB}",
        tags: [
          "SV",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1FD}",
        tags: [
          "SX",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1FE}",
        tags: [
          "SY",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F8}\u{1F1FF}",
        tags: [
          "SZ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1E6}",
        tags: [
          "TA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1E8}",
        tags: [
          "TC",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1E9}",
        tags: [
          "TD",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1EB}",
        tags: [
          "TF",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1EC}",
        tags: [
          "TG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1ED}",
        tags: [
          "TH",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1EF}",
        tags: [
          "TJ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1F0}",
        tags: [
          "TK",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1F1}",
        tags: [
          "TL",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1F2}",
        tags: [
          "TM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1F3}",
        tags: [
          "TN",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1F4}",
        tags: [
          "TO",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1F7}",
        tags: [
          "TR",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1F9}",
        tags: [
          "TT",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1FB}",
        tags: [
          "TV",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1FC}",
        tags: [
          "TW",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1F9}\u{1F1FF}",
        tags: [
          "TZ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FA}\u{1F1E6}",
        tags: [
          "UA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FA}\u{1F1EC}",
        tags: [
          "UG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FA}\u{1F1F2}",
        tags: [
          "UM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FA}\u{1F1F3}",
        tags: [
          "UN",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FA}\u{1F1F8}",
        tags: [
          "US",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FA}\u{1F1FE}",
        tags: [
          "UY",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FA}\u{1F1FF}",
        tags: [
          "UZ",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FB}\u{1F1E6}",
        tags: [
          "VA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FB}\u{1F1E8}",
        tags: [
          "VC",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FB}\u{1F1EA}",
        tags: [
          "VE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FB}\u{1F1EC}",
        tags: [
          "VG",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FB}\u{1F1EE}",
        tags: [
          "VI",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FB}\u{1F1F3}",
        tags: [
          "VN",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FB}\u{1F1FA}",
        tags: [
          "VU",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FC}\u{1F1EB}",
        tags: [
          "WF",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FC}\u{1F1F8}",
        tags: [
          "WS",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FD}\u{1F1F0}",
        tags: [
          "XK",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FE}\u{1F1EA}",
        tags: [
          "YE",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FE}\u{1F1F9}",
        tags: [
          "YT",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FF}\u{1F1E6}",
        tags: [
          "ZA",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FF}\u{1F1F2}",
        tags: [
          "ZM",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F1FF}\u{1F1FC}",
        tags: [
          "ZW",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}",
        tags: [
          "gbeng",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
        tags: [
          "gbsct",
          "\u65D7"
        ]
      },
      {
        unicode: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}",
        tags: [
          "gbwls",
          "\u65D7"
        ]
      }
    ]
  }
];
const _hoisted_1$1 = { class: "bg-gray-50 bg-opacity-25 rounded border py-1 px-2" };
const _hoisted_2$1 = { class: "grid grid-cols-10 h-8 p-2 mt-1 mb-4" };
const _hoisted_3 = { class: "grid grid-cols-8 col-start-1 row-start-1 place-content-start gap-0 justify-items-center items-center h-64 p-1 overflow-y-scroll" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const emojiGroupList = JSON.parse(JSON.stringify(json));
    const group = ref(0);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", null, [
          createElementVNode("div", _hoisted_2$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(emojiGroupList), (tab) => {
              return openBlock(), createElementBlock("div", {
                key: tab.group
              }, [
                createVNode(_sfc_main$2, {
                  class: "w-6 h-6",
                  emoji: tab.emojiList[0].unicode,
                  onClick: ($event) => group.value = tab.group
                }, null, 8, ["emoji", "onClick"])
              ]);
            }), 128))
          ]),
          createElementVNode("div", _hoisted_3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(emojiGroupList)[group.value].emojiList, (emoji) => {
              return openBlock(), createElementBlock("div", {
                key: emoji.unicode,
                class: "w-10 h-10"
              }, [
                createVNode(_sfc_main$2, {
                  emoji: emoji.unicode,
                  onClick: ($event) => _ctx.$emit("select", emoji.unicode)
                }, null, 8, ["emoji", "onClick"])
              ]);
            }), 128))
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "flex flex-col" };
const _hoisted_2 = { class: "absolute pt-1 mt-10" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const props = __props;
    const emoji = ref(props.emoji);
    const popover = ref(false);
    const onSelect = (val) => {
      emoji.value = val;
      popover.value = false;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", null, [
          createVNode(_sfc_main$2, {
            emoji: emoji.value,
            onClick: _cache[0] || (_cache[0] = ($event) => popover.value = !popover.value)
          }, null, 8, ["emoji"])
        ]),
        withDirectives(createElementVNode("div", _hoisted_2, [
          createVNode(_sfc_main$1, { onSelect })
        ], 512), [
          [vShow, popover.value]
        ])
      ]);
    };
  }
});
export { _sfc_main$2 as SiEmoji, _sfc_main as SiEmojiPopOver };
