<script setup lang="ts"></script>

<template>
  <div class="terms">
    <main class="container">
      <h1>Terms of Use</h1>

      <p class="last-updated">Last updated: August 29, 2026</p>

      <section>
        <h2>Agreement</h2>
        <p>
          Your license to use Sugar Sense is governed by Apple's Standard Licensed Application End
          User License Agreement. This page provides important app-specific notices about intended
          use, privacy, and limitations. By using the app, you acknowledge that you have read these
          notices.
        </p>
      </section>

      <section>
        <h2>Tracking Tool, Not Medical Advice</h2>
        <p>
          Sugar Sense is a personal tracking tool and is not a medical device. It records the
          information you enter, but it does not measure blood glucose or diagnose any condition.
          It does not calculate or recommend insulin, and it does not provide treatment.
        </p>
        <p>
          Consult a qualified healthcare professional before making medical decisions. Do not use
          Sugar Sense in place of professional care or emergency services.
        </p>
      </section>

      <section>
        <h2>Your Responsibility</h2>
        <p>
          You are responsible for the accuracy of the information you enter and for independently
          verifying information before relying on it. You remain responsible for all health and
          treatment decisions made with a qualified healthcare professional.
        </p>
      </section>

      <section>
        <h2>Privacy and Local Data</h2>
        <p>
          Sugar Sense stores the health information you enter locally on your device. Review our
          <router-link to="/privacy" class="inline-link">Privacy Policy</router-link> for details
          about data handling, export, and deletion.
        </p>
      </section>

      <section>
        <h2>Availability and Warranty</h2>
        <p>
          Sugar Sense is provided on an “as is” and “as available” basis to the extent permitted by
          applicable law. We do not guarantee that the app or website will always be uninterrupted,
          error-free, or suitable for a particular medical purpose.
        </p>
      </section>

      <section>
        <h2>Apple Standard EULA</h2>
        <p>
          The license governing your use of Sugar Sense is Apple's
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            class="inline-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Standard Licensed Application End User License Agreement
          </a>.
        </p>
      </section>

      <section>
        <h2>Changes and Contact</h2>
        <p>
          We may update these terms by posting a revised version on this page and changing the
          “Last updated” date. Questions can be sent to
          <a href="mailto:93223262@qq.com" class="inline-link">93223262@qq.com</a>.
        </p>
      </section>

      <nav class="nav" aria-label="Terms navigation">
        <router-link to="/" class="nav-link">← Back to Home</router-link>
      </nav>
    </main>
  </div>
</template>

<style scoped>
.terms {
  min-height: 100vh;
  padding: 2rem 1rem;
  background-color: black;
  color: white;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
  text-align: center;
}

h2 {
  margin-bottom: 1rem;
  color: #e0e0e0;
  font-size: 1.8rem;
}

.last-updated {
  margin-bottom: 2rem;
  color: #888;
  font-size: 0.9rem;
  text-align: center;
}

section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: #111;
}

section p {
  margin: 0 0 1rem;
  color: #d0d0d0;
  font-size: 1rem;
  line-height: 1.6;
}

section p:last-child {
  margin-bottom: 0;
}

.inline-link {
  color: #4a9eff;
  font-weight: bold;
  text-decoration: none;
}

.inline-link:hover,
.inline-link:focus-visible {
  text-decoration: underline;
}

.nav {
  margin-top: 3rem;
  text-align: center;
}

.nav-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  background-color: white;
  color: black;
}
</style>
