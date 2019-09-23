<template>
  <div id="app">
    <router-view class="text-center text-5xl"/>
    
    <button class="mr-2" @click="setRole('user')">设置user</button>
    <button class="mr-2" @click="setRole('admin')">设置admin</button>
    <button class="mr-2" @click="setRole('superadmin')">superadmin</button>
  </div>
</template>

<script>
  import {mapActions, } from 'vuex'

  export default {
    methods: {
      ...mapActions({
        setRole: 'SET_ROLE',
      }),

      // 设置角色
      initRole () {
        const role = localStorage.getItem('app_role')

        if (role) {
          this.setRole(role)
        } else {
          // 获取角色信息 并刷新页面
          setTimeout(() => {
            localStorage.setItem('app_role', 'user')
            this.initRole()
            this.$router.go(0)
          }, 1000)
        }
      },
    },

    created () {
      this.initRole()
    },
  }
</script>
