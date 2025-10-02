<script setup lang="ts"></script>

<template>
  <div class="support">
    <div class="container">
      <h1>Support</h1>

      <div class="contact-section">
        <h2>Contact Information</h2>
        <p class="email">
          For support and questions, please contact us at:
          <a href="mailto:93223262@qq.com" class="email-link">93223262@qq.com</a>
        </p>
      </div>

      <div class="usage-section">
        <h2>How to Use the Blood & Food App</h2>
        <p class="description">
          The Blood & Food iOS app is designed to help you track and manage your blood sugar levels,
          meals, and insulin intake. Here's how to get started:
        </p>

        <div class="features">
          <div class="feature">
            <h3>📱 Track Your Meals</h3>
            <p>
              Record your meals with detailed descriptions, including the time and type of meal
              (breakfast, lunch, dinner, or snack).
            </p>
          </div>

          <div class="feature">
            <h3>🩸 Blood Sugar Monitoring</h3>
            <p>
              Log your blood sugar readings before and after meals to track how different foods
              affect your glucose levels.
            </p>
          </div>

          <div class="feature">
            <h3>💉 Insulin Management</h3>
            <p>
              Set up baseline insulin amounts for different meal times and track your insulin intake
              alongside your meals and blood sugar readings.
            </p>
          </div>

          <div class="feature">
            <h3>📊 Analytics & Insights</h3>
            <p>
              View your data through charts and analytics to identify patterns and make informed
              decisions about your health management.
            </p>
          </div>
        </div>
      </div>

      <nav class="nav">
        <router-link to="/" class="nav-link">← Back to Home</router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.support {
  min-height: 100vh;
  background-color: black;
  color: white;
  font-family: Arial, sans-serif;
  padding: 2rem 1rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #f0f0f0;
}

.contact-section {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #111;
}

.email {
  font-size: 1.1rem;
  line-height: 1.6;
}

.email-link {
  color: #4a9eff;
  text-decoration: none;
  font-weight: bold;
}

.email-link:hover {
  text-decoration: underline;
}

.usage-section {
  margin-bottom: 3rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e0e0e0;
}

.features {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature {
  padding: 1rem;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #111;
}

.feature p {
  line-height: 1.5;
  color: #d0d0d0;
  margin: 0;
}

.note {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #b0b0b0;
  font-style: italic;
  padding: 1rem;
  border-left: 3px solid #4a9eff;
  background-color: #111;
  margin-top: 2rem;
}

.nav {
  text-align: center;
  margin-top: 3rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: inline-block;
}

.nav-link:hover {
  background-color: white;
  color: black;
}
</style>
