<template>
<div class="logo">
    <img src="../assets/img/ill.png" alt="" height="100">
    <h2>Estate 
        <br>
        Blog
    </h2>
</div>
</template>

<script>

export default {
    name: "blogPost",
    props: [ "post" ],
    components: {},
    computed: {
  },
}
</script>

<style lang="scss" scoped>
.logo {
    padding: 0 20%;
    margin-top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}
</style>