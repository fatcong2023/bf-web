<script setup lang="ts">
</script>

<template>
  <div class="home">
    <h1>Blood and Food</h1>
    <nav class="nav">
      <router-link to="/support" class="nav-link">Support</router-link>
      <router-link to="/privacy" class="nav-link">Privacy</router-link>
    </nav>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: black;
  color: white;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
}

.nav {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: white;
  color: black;
}
</style>