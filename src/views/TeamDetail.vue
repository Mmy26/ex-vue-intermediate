<template>
  <div>
    <p>球団名</p>
    {{ currentTeam.teamName }}
    <p>本拠地</p>
    {{ currentTeam.headquarters }}
    <p>発足日</p>
    {{ inauguration }}
    <p>歴史</p>
    {{ currentTeam.history }}
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
   * VuexストアのGetter経由で受け取ったリクエストパラメーターのIDから１件のチーム情報を取得する
   */
  created(): void {
    const teamId = Number(this.$route.params.id);
    this.currentTeam = this.$store.getters.getTeamById(teamId);
    this.inauguration = this.$store.getters.getTeamInauguration(teamId);
  }
}
</script>

<style scoped></style>
