<template>
  <section class="mb-organization">
    <div class="current">
      <mb-avatar :avatar="currentWorkspace"></mb-avatar>
    </div>
    <div class="organization-menu" :class="{expanded : 'expanded'}">
      <mb-navigation-list v-for="org in organizations" type="organization" :key="org._id" :avatar="org" title="Organizations"></mb-navigation-list>
      <mb-navigation-list v-for="prg in programs" type="program" :key="prg._id" :avatar="prg" title="Programs"></mb-navigation-list>
    </div>
  </section>
</template> 

<script>
export default {
  components: {
    MbAvatar: () => import('../MbAvatar.vue'),
    MbNavigationList: () => import('../MbNavigationList.vue'),
  },
  props: {
    currentWorkspace: {
      type: [Array,Object],
      default: () => {},
    },
    organizations:{
      type: [Array,Object],
      default: () => {},
    },
    programs:{
      type: [Array,Object],
      default: () => {},
    }
  },
}
</script>

<style lang="scss" scoped>
  .mb-organizations{
    position: fixed;
    right: 50px;
    .organization-menu{
      min-width: 250px;
      max-height: 0;
    }
    .expand{
      max-height: initial;
    }
  }
</style>