<template>
  <div class="home">
    <br />
    <input type="text" v-model="search" /><br /><br />
    Search Item : {{ search }}<br />

    <ul v-for="name in filteredName" :key="name">
      <li>{{ name }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  name: "home",
  setup() {
    let search = ref("");

    let names = ref(["YMK", "TNY", "Ma Ma", "Hla Hla", "Khin Khin"]);

    let filteredName = computed(() => {
      return names.value.filter((name) => {
        return name.includes(search.value);
      });
    });

    // console.log(filteredName.value);
    return { names, search, filteredName };
  },
};
</script>
