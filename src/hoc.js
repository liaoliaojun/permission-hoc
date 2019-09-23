import {mapGetters} from 'vuex'

// 分发不同权限的组件
export default function ({user, admin, superadmin}) {
  return {
    components: {
      user,
      admin,
      superadmin,
    },

    computed: {
      ...mapGetters({
        role: 'GET_ROLE',
      }),

      componentName () {
        return this.role || ''
      },
    },

    render () {
      let componentTempalte = this.componentName
      if (!componentTempalte) {
        this.$router.push({path: '/'})
      }
      return (<componentTempalte />)
    },
  }
}
