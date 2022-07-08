<script setup lang="ts">
import { RouterView } from 'vue-router';
import TopNavbar from './components/TopNavbar.vue';
</script>

<template>
    <TopNavbar />
    <div class="page">
        <RouterView />
    </div>
</template>

<style>
.page {
    display: flex;
    width: 100%;
    height: calc(100vh - 55px);
    margin-top: 55px;
}

.server-selector {
    width: 230px;
    height: 60px;
    margin: 26px 0;
    border: 1px solid var(--bg-lighter);
    border-radius: 4px;
}
</style>