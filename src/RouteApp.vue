<template>
  <div>
    <v-app>
      <!-- ヘッダー -->
      <GlobalHeader />
      <!-- コンテンツ -->
      <v-content>
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
import GlobalHeader from "@/components/GlobalHeader";

export default {
  components: {
    GlobalHeader
  }
};
</script>
