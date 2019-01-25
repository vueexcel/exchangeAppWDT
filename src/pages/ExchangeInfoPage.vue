<template>
  <div>
    <!-- <NavBar/> -->
    <div>
      <div class="container-fluid" id="contaiiner">
        <div class="row">
          <div class="col-12">
            <div class="tab-container">
              <ExchangeInfo></ExchangeInfo>
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
import ExchangeInfo from "./../container/ExchangeInfo.vue";
import Footer from "./../components/Footer.vue";
export default {
  name: "ExchangeInfoPage",
  components: {
    NavBar,
    Footer,
    ExchangeInfo
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
