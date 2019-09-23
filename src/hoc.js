import {mapGetters} from 'vuex'

// 分发不同权限的组件
export default function (components = {user, admin, superadmin}) {
  return {
    computed: {
      ...mapGetters({
        role: 'GET_ROLE',
      }),

      componentName () {
        const role = this.role

        switch (role) {
          case 'user':
          case 'admin':
          case 'superadmin':
            return components[role] || ''
            break

          default:
            return ''
            break
        }
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
