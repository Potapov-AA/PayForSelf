<template>
  <div class="h-auto w-auto pa-5 rounded-lg warring-message-border">
    <p align="center" class="text-h5"><strong>ПРЕДУПРЕЖДЕНИЕ</strong></p>
    <p align="center" class="mt-5">{{ warningText }}</p>
  </div>
</template>

<script>
export default {
  props: {
    warningText: String
  }
}
</script>
