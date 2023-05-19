<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="tinyVue logo"
      class="logo"
      src="@/assets/tinyVue.svg"
      width="250"
      height="150"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">
          <TinyButton type="primary">Home</TinyButton>
        </RouterLink>
        <RouterLink to="/about">
          <TinyButton type="primary">About</TinyButton>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
