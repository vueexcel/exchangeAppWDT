<template>
  <div>
    <!-- <NavBar/> -->
    <SubHeader/>
    <div>
      <div class="container-fluid" id="contaiiner">
        <!-- <PageTitle/> -->
        <div class="row" style="min-height: 400px;" id="container-content">
          <div class="col-lg-12">
            <div class="tab-container">
              <!-- <LeftMenuBar/> -->
              <!-- <CreateNewJobContainer/> -->
              <!-- <ExchangeInfo/> -->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "./../container/NavBar.vue";
import SubHeader from "./../components/SubHeader";
import ExchangeInfo from "./../container/ExchangeInfo.vue";
import Footer from "./../components/Footer.vue";
export default {
  name: "CreateNewUser",
  components: {
    NavBar,
    Footer,
    ExchangeInfo,
    SubHeader
  }
};
</script>

<style>
#wrapperId {
  margin-bottom: 4.5em;
}
#contaiiner {
  width: 95%;
}
#container-content {
  margin-top: 15px;
}
</style>
