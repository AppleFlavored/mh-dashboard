<template>
    <div class="sidebar-item">
        <slot></slot>
    </div>
</template>

<style>
.sidebar-item {
    display: flex;
    align-items: center;
    width: 230px;
    height: 35px;
    border-radius: 4px;
}

.active {
    background-color: var(--bg-tertiary);
}
</style>