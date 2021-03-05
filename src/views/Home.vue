<template>
  <div class="home">
    <h5>欢迎来到 Playground</h5>
    <q-list bordered separator>
      <q-item
        clickable
        v-ripple
        v-for="experiment in experimentsList"
        :key="experiment.alias"
        :to="'/scene/' + experiment.alias"
      >
        <q-item-section>{{ experiment.name }}</q-item-section>
        <q-item-section side>
          <q-icon name="send" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import experimentsList from '../experiments/list.json'
export default {
  data() {
    return {
      experimentsList,
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 60%;
  margin: 20vh auto;
}
</style>