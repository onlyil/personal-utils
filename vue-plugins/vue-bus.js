const VueBus = {
  install: function(Vue, options) {
    const Bus = new Vue({
      methods: {
        emit(event, ...args) {
          this.$emit(event, ...args)
        },
        on(event, cb) {
          this.$on(event, cb)
        },
        off(event, cb) {
          this.$off(event, cb)
        }
      }
    })
    Vue.prototype.$bus = Bus
  }
}

export default VueBus
