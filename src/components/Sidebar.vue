<template>
    <aside class="sidebar">
        <slot></slot>
    </aside>
</template>

<style>
.sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    height: calc(100vh - 55px);
    background-color: var(--bg-secondary);
    border-right: 1px solid var(--bg-lighter);
}
</style>