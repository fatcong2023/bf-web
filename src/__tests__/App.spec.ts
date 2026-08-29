import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from '../App.vue'
import HomeView from '../views/HomeView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import SupportView from '../views/SupportView.vue'
import TermsView from '../views/TermsView.vue'
import productionRouter from '../router'

describe('App', () => {
  it('renders the current home page and primary navigation', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: HomeView },
        { path: '/support', component: SupportView },
        { path: '/privacy', component: PrivacyView },
        { path: '/terms', component: TermsView },
      ],
    })
    await router.push('/')
    await router.isReady()

    const wrapper = mount(App, { global: { plugins: [router] } })

    expect(wrapper.get('h1').text()).toBe('Sugar Sense')
    expect(wrapper.get('a[href="/support"]').text()).toBe('Support')
    expect(wrapper.get('a[href="/privacy"]').text()).toBe('Privacy')
    expect(wrapper.get('a[href="/terms"]').text()).toBe('Terms')
  })

  it('publishes app-specific terms through the production router', () => {
    const termsRoute = productionRouter.getRoutes().find((route) => route.path === '/terms')

    expect(termsRoute).toBeDefined()
    if (!termsRoute) return

    const termsComponent = termsRoute.components?.default
    expect(termsComponent).toBeDefined()
    if (!termsComponent) return

    const wrapper = mount(termsComponent, {
      global: { plugins: [productionRouter] },
    })

    expect(wrapper.get('h1').text()).toBe('Terms of Use')
    expect(wrapper.text()).toContain(
      "Your license to use Sugar Sense is governed by Apple's Standard",
    )
    expect(wrapper.text()).not.toContain('and these app-specific terms')
    expect(wrapper.text()).toContain('not a medical device')
    expect(wrapper.text()).toContain('does not measure blood glucose')
    expect(wrapper.text()).toContain('does not calculate or recommend insulin')
    expect(wrapper.get('a[href="/privacy"]').text()).toBe('Privacy Policy')

    const appleEula = wrapper.get(
      'a[href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"]',
    )
    expect(appleEula.attributes('target')).toBe('_blank')
    expect(appleEula.attributes('rel')).toContain('noopener')
  })
})
