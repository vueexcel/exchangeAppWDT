<template>
  <div class="JobPostingPage">
    <div>
      <div class="container-fluid" id="contaiiner">
        <div class="row">
          <div class="col-12">
            <div class="tab-container">
              <ColorScheme></ColorScheme>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ColorScheme from "./../container/ColorSchemeContainer";
export default {
  name: "ColorSchemePage",
  components: {
    ColorScheme
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
