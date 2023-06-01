<template>
  <div class="flex-col justify-start page">
    <div class="flex-row section space-x-20">
      <span class="font_1">Bar</span>
      <span class="font_1">Chart</span>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    padding-bottom: 98.38rem;
    background-color: #f2f3f5;
    border-radius: 1.25rem;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .section {
    padding: 2.13rem 2.63rem 2.19rem;
    background-color: #ffffff;
    border-radius: 1.25rem 1.25rem 0px 0px;
  }
  .space-x-20 > *:not(:first-child) {
    margin-left: 0.63rem;
  }
  .font_1 {
    font-size: 1.25rem;
    font-family: RobotoRoman;
    line-height: 0.91rem;
    font-weight: 600;
    color: #1d2129;
  }
</style>