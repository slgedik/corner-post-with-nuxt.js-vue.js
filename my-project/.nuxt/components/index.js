export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as AdminPostFrom } from '../..\\components\\admin\\PostFrom.vue'
export { default as CommonBanner } from '../..\\components\\common\\Banner.vue'
export { default as CommonHeader } from '../..\\components\\common\\Header.vue'
export { default as HomeAbout } from '../..\\components\\home\\About.vue'
export { default as Post } from '../..\\components\\post\\Post.vue'
export { default as PostDetail } from '../..\\components\\post\\PostDetail.vue'
export { default as PostList } from '../..\\components\\post\\PostList.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
