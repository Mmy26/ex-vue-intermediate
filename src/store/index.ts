
import Vue from "vue";
import Vuex from "vuex";
import { Team } from "/Users/Mmy_26/typescript-workspace/ex-vue-intermediate/src/types/Team";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    teams: [
      new Team(
        10,
        "読売ジャイアンツ",
        "東京ドーム（東京都・文京区）",
        new Date(1934, 12 - 1, 26),
        `大日本東京野球倶楽部（1934年）
↓
東京巨人軍（1935年〜1946年）
↓
読売ジャイアンツ（1947年〜）`
      ),
      new Team(
        20,
        "阪神タイガース",
        "阪神甲子園球場（兵庫県・西宮市）",
        new Date(1935, 12 - 1, 10),
        `大阪タイガース（1935年〜1940年途）
↓
阪神軍（1940年途〜1946年）
↓
大阪タイガース（1947年〜1960年）→阪神タイガー（1961年〜）`
      ),
      new Team(
        30,
        "中日ドラゴンズ",
        "ナゴヤドーム（愛知県・名古屋市東区）",
        new Date(1936, 1 - 1, 15),
        `名古屋軍（1936年〜1943年）
↓
産業軍（1944年）
↓
中部日本軍（1946年）
↓
中日ドラゴンズ（1947年〜1950年）
↓
名古屋ドラゴンズ（1951年〜1953年）
↓
中日ドラゴンズ（1954年〜）`
      ),
      new Team(
        40,
        "横浜DeNAベイスターズ",
        "横浜スタジアム（神奈川県・横浜市中区）",
        new Date(1949, 11 - 1, 22),
        `大洋ホエールズ（1950年〜1952年）
↓
大洋松竹ロビンス（1953年〜1954年）
↓
大洋ホエールズ（1955年〜1977年）
↓
横浜大洋ホエールズ（1978年〜1992年）
↓
横浜ベイスターズ（1993年〜2011年）
↓
横浜DeNAベイスターズ（2012年〜）`
      ),
      new Team(
        50,
        "広島東洋カープ",
        "MAZDA Zoom-Zoomスタジアム広島（広島県・広島市南区）",
        new Date(1949, 12 - 1, 15),
        `広島カープ（1950年〜1967年）
↓
広島東洋カープ（1968年〜）`
      ),
      new Team(
        60,
        "東京ヤクルトスワローズ",
        "明治神宮野球場（東京都・新宿区）",
        new Date(1950, 1 - 1, 12),
        `国鉄スワローズ（1950年〜1965年途）
↓
サンケイスワローズ（1965年途〜終了）
↓
サンケイアトムズ（1966年〜1968年）
↓
アトムズ（1969年）
↓
ヤクルトアトムズ（1970年〜1973年）
↓
ヤクルトスワローズ（1974年〜2005年）
↓
東京ヤクルトスワローズ（2006年〜）`
      ),
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getTeam(state) {
      return state.teams;
    },
    /**
     * IDからチームを検索し返す.
     *
     * @param state - ステート
     * @returns チーム情報
     */
    getTeamById(state) {
      return (id: number) => {
        const newTeams = state.teams.filter((team) => team.id === id);
        return newTeams[0];
      };
    },
  },
  modules: {},
});
