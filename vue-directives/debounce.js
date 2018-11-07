
Vue.directive('debounce', {
  inserted: function (el, binding) {
    let trigger = 'click'
    if (binding.modifiers.input) trigger = 'input'
    
    const now = binding.modifiers.now
    const handler = binding.value
    let timer

    el.addEventListener(trigger, function () {
      // if first click, invoke immediately
      const invokeNow = !timer && now

      clearTimeout(timer)
      timer = setTimeout(function () {
        // after timer is invoked, reset timer to null
        timer = null
        if (!now) handler()
      }, binding.arg || 300)

      // invoke immediately
      if (invokeNow) handler()
    })
  }
})
