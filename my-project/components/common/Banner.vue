<template>
  <div
    class="container-fluid bg p-0 d-flex justify-content-center align-items-center"
  >
    <div class="overlay"></div>
    <h1 class="text-center text-white">Köşe Yazıları</h1>
  </div>
</template>

<style scoped>
.bg {
  background-image: url(../../static/images/bg.jpg);
  /* background-color: rgb(160, 189, 189);*/
  height: 300px;
  position: relative;
}
.bg h1 {
  z-index: 1;
  font-size: 60px;
}

.overlay {
  width: 100% !important;
  height: 100% !important;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
