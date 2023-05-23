<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
import { Plus } from '@element-plus/icons-vue'
</script>

<template>
  <div>
    <el-button type="primary" :icon="Plus">+</el-button>
    <svg-icon name="phone" />
  </div>
</template>

<style scoped></style>
