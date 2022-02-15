<template>
  <div>
    <h1>野球チーム一覧</h1>
    <div v-for="team of teams" v-bind:key="team.id">
      <router-link v-bind:to="'/teamDetail/' + team.id">{{
        team.teamName
      }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TeamList extends Vue {
  /**
   * Vuexストアのstausから野球チームの一覧情報を取得する
   */
  get teams(): Array<void> {
    return this.$store.getters.getTeam;
  }
}
</script>

<style scoped></style>
