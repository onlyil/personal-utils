
Vue.directive('debounce', {
  inserted: function (el, binding) {
    let trigger = 'click'
    if (binding.modifiers.input) trigger = 'input'

    const now = binding.modifiers.now
    const handler = binding.value
    el.__timer__ = null

    el.addEventListener(trigger, function () {
      // if first click, invoke immediately
      const invokeNow = !el.__timer__ && now

      clearTimeout(el.__timer__)
      el.__timer__ = setTimeout(function () {
        // after timer is invoked, reset timer to null
        el.__timer__ = null
        if (!now) handler()
      }, binding.arg || 300)

      // invoke immediately
      if (invokeNow) handler()
    })
  },
  unbind: function (el, binding) {
    clearTimeout(el.__timer__)
    el.__timer__ = null
  },
})
