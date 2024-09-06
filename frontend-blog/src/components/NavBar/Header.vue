<template>
  <header class="blog-container">
    <div class="navbar">
      <span class="blog-title">dekuyu blog</span>
      <ul class="nav-list">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
      </ul>
      <div class="navBarHamburger" @click="toggleMenu">
        <div class="hamburger-container">
          <div class="hamburger-top" :class="{ active: isMobileShow }"></div>
          <div class="hamburger-middle" :class="{ active: isMobileShow }"></div>
          <div class="hamburger-bottom" :class="{ active: isMobileShow }"></div>
        </div>
      </div>
    </div>
    <!-- 移动端导航栏 -->
    <ul :class="['nav-list-mobile', { show: isMobileShow }]">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <div class="line"></div>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <div class="line"></div>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <div class="line"></div>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <!-- <div class="line"></div> -->
    </ul>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMobileShow = ref(false)
const toggleMenu = () => {
  isMobileShow.value = !isMobileShow.value
  console.log('toggleMenu')
}
</script>

<style lang="scss">
@import './index.scss';
</style>
