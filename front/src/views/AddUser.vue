<template>
  <div>
    <Navbar/>
    <AddUserForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import AddUserForm from "@/components/AddUserForm.vue";

export default {
  name: "AddUser",
  components: {
    Navbar,
    AddUserForm,
  }
};
</script>
