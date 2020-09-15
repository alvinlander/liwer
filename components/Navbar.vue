<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a href>
        <img src="~/assets/logo.png" width="65" alt />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" style="margin-left: 35%" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link mx-3" href="#">Premium</a>
          <a class="nav-link mx-3" href="#">Guide</a>
          <a class="nav-link mx-3" href="#">Download</a>
          <a class="nav-link mx-3" href="#">Sign in</a>
          <a class="btn btn-dark btn-sm pt-2 btn-regis mx-3" href="#">Register</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style scoped>
.btn-regis {
  border-radius: 15px;
  width: 157px;
  color: #ebf283;
}
</style>
