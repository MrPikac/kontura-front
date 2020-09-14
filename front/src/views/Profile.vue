<template>
  <div>
    <Navbar/>
    <div v-if="user">
    <ProfileItem :user = "user"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import ProfileItem from "@/components/ProfileItem.vue";

export default {
  name: "Profile",
  components: {
    Navbar,
    ProfileItem,
  },
  props: {
      user : null,
  },
  methods: {

  }
};
</script>
