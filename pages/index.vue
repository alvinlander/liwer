<template>
  <div>
    <Navbar />
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <h1 style="font-weight: bold">Listen Everywhere.</h1>
          <img src="~/assets/illus1.png" width="500px" alt srcset />
        </div>
        <div class="col">
          <client-only>
            <carousel-3d :height="190" :width="200" :border="0">
              <slide :index="0">
                <img src="~/assets/5sos.png" alt />
              </slide>
              <slide :index="1">
                <img src="~/assets/bunga.png" alt />
              </slide>
              <slide :index="2">
                <img src="~/assets/ringgo5.png" alt />
              </slide>
            </carousel-3d>
          </client-only>
          <h1 style="font-weight: bold">Listen your favorite album with no hestitate.</h1>
          <br />
          <h3 style="font-weight: bold">Popular Song and Album Charts</h3>
          <div class="container">
            <div class="row">
              <div class="col-7">
                <div class="card list">
                  <div class="card-body">
                    <p class="card-title">World Wide Trending Chart</p>
                    <ol>
                      <li>Alvin lander</li>
                      <li>Alvin lander</li>
                      <li>Alvin lander</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card list">
                  <div class="card-body">
                    <p class="card-title">Indonesian Chart</p>
                    <ol>
                      <li>Alvin lander</li>
                      <li>Alvin lander</li>
                      <li>Alvin lander</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-6">
          <h1 style="font-weight: bold">Liwer is #1 Streaming Platform in Indonesia</h1>
        </div>
        <div class="col-6 mt-2">
          <div class="fit">
            <div class="fiturLogo mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66.697 66.701">
                <path
                  id="Icon_material-update"
                  data-name="Icon material-update"
                  d="M71.2,30.884H46.074l10.153-10.45c-10.116-10.005-26.5-10.376-36.611-.371a25.476,25.476,0,0,0,0,36.278,26.012,26.012,0,0,0,36.611,0,24.135,24.135,0,0,0,7.559-18.12H71.2a34.613,34.613,0,0,1-9.783,23.308,33.55,33.55,0,0,1-47.135,0,32.756,32.756,0,0,1-.074-46.617,33.3,33.3,0,0,1,46.876,0L71.2,4.5ZM39.7,23.028V38.777l12.97,7.708L50,50.968l-15.86-9.412V23.028Z"
                  transform="translate(-4.502 -4.5)"
                />
              </svg>
            </div>
            <h3 style="font-weight: bold; align-item: center">Always Update</h3>
          </div>
          <div class="fit">
            <div class="fiturLogo mr-3 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.46 66.825">
                <path
                  id="Icon_material-play-for-work"
                  data-name="Icon material-play-for-work"
                  d="M31.275,7.5V32.4H15.683L35.73,52.451,55.778,32.4H40.185V7.5ZM9,47.6a26.73,26.73,0,0,0,53.46,0H53.55a17.82,17.82,0,0,1-35.64,0Z"
                  transform="translate(-9 -7.5)"
                />
              </svg>
            </div>
            <h3 style="font-weight: bold" class="mt-1">Available Offline</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="hero mt-5 d-flex justify-content-center">
      <div class="heroimg">
        <img src="~/assets/hero.png" height="350px" alt />
      </div>
      <div class="coverHero">
        <img src="~/assets/coverHero.png" height="350px" alt />
      </div>
      <div class="tagline align-self-center">
        <h1 style="font-weight: bold; color: #f5ff64; ">STREAM NOW !</h1>
        <br />
        <button class="btn btn-warning btn-lg rounded- rounded-lg" style="margin-left: 25%">Register</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  plugins: [{ src: "~/plugins/index.js", mode: "client" }],
};
</script>

<style scoped>
.list {
  background: black;
  height: 100%;
  width: 100%;
}

.list p {
  color: #f5ff64;
}

.list li {
  color: #f5ff64;
  text-align: left;
}
.fiturLogo {
  width: 40px;
}
.fit {
  display: inline-flex;
  align-items: center;
}
.heroimg {
  position: absolute;
  z-index: -1;
}
.tagline {
  position: absolute;
  z-index: 1;
}
</style>
