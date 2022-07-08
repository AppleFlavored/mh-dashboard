<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Sidebar from '../components/Sidebar.vue';
import SidebarItem from '../components/SidebarItem.vue';
</script>

<template>
    <Sidebar>
        <div class="server-selector">
            <!-- TODO -->
        </div>
        <SidebarItem>Overview</SidebarItem>
        <SidebarItem>Settings</SidebarItem>
    </Sidebar>
    <main>
        <RouterView/>
    </main>
</template>