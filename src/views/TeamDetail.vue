<template>
  <div>
    <p>球団名</p>
    <p>{{ currentTeam.teamName }}</p>
    <p>本拠地</p>
    <p>{{ currentTeam.headquarters }}</p>
    <p>発足日</p>
    <p>{{ currentTeam.inauguration }}</p>
    <p>歴史</p>
    <pre>{{ currentTeam.history }}</pre>
    <br />
    <button v-on:click="onclick">戻る</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/Team";
@Component
export default class TeamDetail extends Vue {
  // 対象のチームオブジェクト
  private currentTeam = new Team(0, "", "", new Date(), "");
  // チーム名
  private teamName = "";
  // 本拠地
  private headquarters = "";
  // 発足日
  private inauguration = new Date();
  // 歴史
  private history = "";

  /**
   * VuexストアのGetter経由で受け取ったリクエストパラメーターのIDから１件のチーム情報を取得する.
   */
  created(): void {
    const teamId = Number(this.$route.params.id);
    this.currentTeam = this.$store.getters.getTeamById(teamId);
  }
  /**
   * ボタンを押すと、一覧画面に遷移する.
   */
  onclick(): void {
    location.href = "/TeamList";
  }
}
</script>

<style scoped></style>
