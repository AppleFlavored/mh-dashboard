<template>
    <div class="top-navbar">
        <div class="top-navbar__icon">
            <img src="/src/assets/minehut.svg" />
        </div>
    </div>
</template>

<style>
.top-navbar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 55px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25)
}

.top-navbar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height: 100%;
}

.top-navbar__icon > img {
    width: 70%;
}
</style>