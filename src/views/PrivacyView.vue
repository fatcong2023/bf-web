<script setup lang="ts"></script>

<template>
  <div class="privacy">
    <div class="container">
      <h1>Privacy Policy</h1>

      <div class="last-updated">
        <p>Last updated: October 3, 2025</p>
      </div>

      <div class="section">
        <h2>Introduction</h2>
        <p>
          Welcome to Blood & Food. We are committed to protecting your privacy and ensuring the
          security of your personal health information. This Privacy Policy explains how we collect,
          use, and safeguard your data when you use our iOS application.
        </p>
      </div>

      <div class="section">
        <h2>Information We Collect</h2>
        <p>
          Blood & Food collects and stores the following types of information to help you manage
          your health:
        </p>
        <ul>
          <li>Blood sugar readings and measurements</li>
          <li>Meal descriptions, times, and types</li>
          <li>Insulin dosage and timing information</li>
          <li>User preferences and settings</li>
        </ul>
      </div>

      <div class="section">
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Display your health data in an organized and accessible format</li>
          <li>Generate charts and analytics to help you track patterns</li>
          <li>Provide personalized insights about your blood sugar management</li>
          <li>Improve the functionality and user experience of our app</li>
        </ul>
      </div>

      <div class="section">
        <h2>Data Storage and Security</h2>
        <p>
          Your health data is stored locally on your device. We take the security of your
          information seriously and implement appropriate technical measures to protect your data
          from unauthorized access, alteration, or destruction.
        </p>
      </div>

      <div class="section">
        <h2>Data Sharing</h2>
        <p>
          We do not sell, trade, or share your personal health information with third parties. Your
          data remains private and is only accessible to you through your device.
        </p>
      </div>

      <div class="section">
        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access all of your stored health data</li>
          <li>Edit or delete any information you have entered</li>
          <li>Export your data for personal use</li>
          <li>Request complete deletion of your data by uninstalling the app</li>
        </ul>
      </div>

      <div class="section">
        <h2>Children's Privacy</h2>
        <p>
          Our app is not intended for children under 13 years of age. We do not knowingly collect
          personal information from children under 13.
        </p>
      </div>

      <div class="section">
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>
      </div>

      <div class="section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
          <a href="mailto:93223262@qq.com" class="email-link">93223262@qq.com</a>
        </p>
      </div>

      <nav class="nav">
        <router-link to="/" class="nav-link">← Back to Home</router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.privacy {
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
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #e0e0e0;
}

.last-updated {
  text-align: center;
  margin-bottom: 2rem;
  color: #888;
  font-size: 0.9rem;
}

.section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #111;
}

.section p {
  font-size: 1rem;
  line-height: 1.6;
  color: #d0d0d0;
  margin-bottom: 1rem;
}

.section p:last-child {
  margin-bottom: 0;
}

.section ul {
  margin: 1rem 0;
  padding-left: 2rem;
}

.section li {
  font-size: 1rem;
  line-height: 1.6;
  color: #d0d0d0;
  margin-bottom: 0.5rem;
}

.email-link {
  color: #4a9eff;
  text-decoration: none;
  font-weight: bold;
}

.email-link:hover {
  text-decoration: underline;
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
