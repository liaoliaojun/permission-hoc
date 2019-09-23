<template>
  <div id="app" class="flex flex-col items-center mt-5">
    <router-view class="text-center text-5xl"/>
    
    <div class="flex justify-center items-center mt-5">
      <span class="leading-loose">设置角色：</span>
      <button class="button mr-2" @click="setRole('user')">设置user</button>
      <button class="button mr-2" @click="setRole('admin')">设置admin</button>
      <button class="button" @click="setRole('superadmin')">superadmin</button>
    </div>
    
    <div class="flex items-center leading-loose mt-5">
      <p>user可以切换到about页面， admin和superadmin无法切换到about：</p>
      <router-link :to="{name: 'about'}" class="button">切换至about路由</router-link>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

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

<style lang="scss">
  .button {
    @apply inline-block leading-none cursor-pointer bg-white;

    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
</style>