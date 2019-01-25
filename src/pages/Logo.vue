<template>
  <div class="JobPostingPage">
    <!-- <NavBar/> -->
    <div>
      <div class="container-fluid" id="contaiiner">
        <!-- <PageTitle id="JobPostingTitle"/> -->
        <div class="row">
          <div class="col-12">
            <div class="tab-container">
              <!-- <LeftMenuForCandidate/> -->
              <!-- <JobPosting/> -->
              <!-- <ExchangeInfo></ExchangeInfo> -->
              <CreateLogo></CreateLogo>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Footer id="footerId"/> -->
  </div>
</template>

<script>
import NavBar from "./../container/NavBar.vue";
import PageTitle from "./../container/PageTitle.vue";
import ExchangeInfo from "./../container/ExchangeInfo.vue";
import CreateLogo from "./../container/CreateLogo.vue";
import Footer from "./../components/Footer.vue";
export default {
  name: "Logo",
  components: {
    NavBar,
    PageTitle,
    Footer,
    ExchangeInfo,
    CreateLogo
  }
};
</script>

<style>
#JobPostingTitle {
  padding-bottom: 20px;
}
#wrapperId1 {
  margin-bottom: 8em;
}
#contaiiner {
  width: 95%;
}
#footerId {
  position: relative;
}
</style>
