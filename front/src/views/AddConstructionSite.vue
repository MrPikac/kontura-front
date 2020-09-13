<template>
  <div class="construction_sites">
    <Navbar/>
    <h1>ConstructionSites</h1>
    <AddConstructionForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/navbar.vue";
import AddConstructionForm from "@/components/AddConstructionForm.vue";

export default {
  name: "AddConstructionSite",
  components: {
    Navbar,
    AddConstructionForm,
  }
};
</script>
