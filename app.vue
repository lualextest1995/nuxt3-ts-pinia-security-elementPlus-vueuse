<template>
  <NuxtLayout>
    <el-config-provider :locale="zhTW">
      <el-button type="success">Success</el-button>
      <NuxtPage />
      <div>pos: {{ x }}, {{ y }}</div>
    </el-config-provider>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import zhTW from 'element-plus/es/locale/lang/zh-tw'
import 'dayjs/locale/zh-tw'
const { x, y } = useMouse()
</script>
