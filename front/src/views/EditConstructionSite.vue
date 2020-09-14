<template>
  <div>
    <Navbar/>
    <div v-if="site">
    <EditConstructionForm :site = "site"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import EditConstructionForm from "@/components/EditConstructionForm.vue";

export default {
  name: "EditConstructionSite",
  components: {
    Navbar,
    EditConstructionForm,
  },
  props: {
      site: null,
  }
};
</script>
