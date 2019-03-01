<template>
  <div>
    <LoginForm></LoginForm>
    <LoginBox></LoginBox>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginFormComponent";
import LoginBox from "@/components/LoginBox";
export default {
  name: "login",
  components: {
    LoginForm,
    LoginBox
  }
};
</script>

<style>
</style>
