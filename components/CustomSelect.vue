<template>
  <v-select :options="options" label="title">
    <template slot="option" slot-scope="option">
        <span class="fa" :class="option.icon"></span>
        {{ option.title }}
    </template>
  </v-select>
</template>

<script>
export default {
 
};
</script>

<style scoped>

</style>
