<template>
  <div>
    <Navbar/>
    <div v-if="user">
    <EditProfileForm :user = "user"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import EditProfileForm from "@/components/EditProfileForm.vue";

export default {
  name: "EditProfile",
  components: {
    Navbar,
    EditProfileForm,
  },
  props: {
      user: null,
  }
};
</script>
