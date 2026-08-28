import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from '../App.vue'
import HomeView from '../views/HomeView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import SupportView from '../views/SupportView.vue'

describe('App', () => {
  it('renders the current home page and primary navigation', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: HomeView },
        { path: '/support', component: SupportView },
        { path: '/privacy', component: PrivacyView },
      ],
    })
    await router.push('/')
    await router.isReady()

    const wrapper = mount(App, { global: { plugins: [router] } })

    expect(wrapper.get('h1').text()).toBe('Sugar Sense')
    expect(wrapper.get('a[href="/support"]').text()).toBe('Support')
    expect(wrapper.get('a[href="/privacy"]').text()).toBe('Privacy')
  })
})
