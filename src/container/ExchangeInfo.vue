<template>
  <div>
    <!-- <JobDescriptionContent :sendName="getLeftMenuName.title"></JobDescriptionContent> -->
    <!-- <SkillsNeeded :sendName="getLeftMenuName.title"></SkillsNeeded> -->
    <!-- <JobPaymentInfo :sendName="getLeftMenuName.title"></JobPaymentInfo> -->
    <!-- <TransactionalDetail :sendName="getLeftMenuName.title"></TransactionalDetail> -->
    <!-- <SubmitInfo :sendName="getLeftMenuName.title"></SubmitInfo> -->
    <!-- <ExchangeInfoDetails></ExchangeInfoDetails> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import JobDescriptionContent from "./../components/JobDescriptionContent.vue";
import SkillsNeeded from "./../components/SkillsNeeded.vue";
import JobPaymentInfo from "./../components/JobPaymentInfo.vue";
import TransactionalDetail from "./../components/TransactionalDetails.vue";
import SubmitInfo from "./../components/SubmitInfo.vue";
import ExchangeInfoDetails from "./../components/ExchangeInfoDetails.vue";

export default {
  name: "ExchangeInfo",
  components: {
    JobDescriptionContent,
    SkillsNeeded,
    JobPaymentInfo,
    TransactionalDetail,
    SubmitInfo,
    ExchangeInfoDetails
  },
  computed: {
    ...mapGetters({
      getLeftMenuName: "getLeftMenuName"
    })
  }
};
</script>

<style>
</style>
