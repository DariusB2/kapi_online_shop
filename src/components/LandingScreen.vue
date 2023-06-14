<template>
  <div
      id="landPageCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
      data-interval="0"
  >
    <!-- Indicators/dots -->
    <div class="carousel-indicators">
      <button
          type="button"
          data-bs-target="#landPageCarousel"
          data-bs-slide-to="0"
          class="active"
      ></button>
      <button
          type="button"
          data-bs-target="#landPageCarousel"
          data-bs-slide-to="1"
      ></button>
      <button
          type="button"
          data-bs-target="#landPageCarousel"
          data-bs-slide-to="2"
      ></button>
    </div>

    <!-- The slideshow/carousel -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="landing">
          <div class="land-img">
            <video
                src="https://dlcdnwebimgs.asus.com/files/media/DDC75630-76ED-4BE5-953E-3E7F9CC5BA5F/v1/video/kv_new.mp4"
                autoplay
                loop
            ></video>
          </div>
          <div class="land-msg">
            <div class="upper-msg">
              <img src="@/assets/img/brands/asus-rog.svg" alt="" class="logo" />
              <div class="msg">
                <h4>ROG Zephyrus M16 (2022)</h4>
                <h4>Thrill Your Senses</h4>
                <h4>94% screen-to-body ratio</h4>
                <h4>Pro 16" display in an ultra slim 15" form factor</h4>
                <h4>Nebula Display:</h4>
                <h4>Large 90Wh battery keeps you active anywhere</h4>
                <h4>Six speakers powered by Dolby Atmos® tech.</h4>
              </div>
              <div class="links">
                <a href="/laptops-and-computers" class="link">Learn more ></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="landing">
          <div class="land-msg">
            <img src="@/assets/img/brands/apple.svg" alt="" class="logo" />
            <div class="upper-msg">
              <h3>
                Get <span class="supercharged">supercharged</span> for college.
              </h3>
              <h5>Save iPad. Get in instant gift card up to $150.</h5>
              <a href="/phones-and-tablets">Explore apple tablets</a>
            </div>
          </div>
          <div class="land-img">
            <video
                src="https://www.apple.com/105/media/us/ipad-air/2022/5abf2ff6-ee5b-4a99-849c-a127722124cc/anim/features/large_2x.mp4"
                autoplay
                loop
            ></video>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <div class="landing">
          <div class="land-img">
            <img
                src="@/assets/img/extras/assistants.png"
                alt=""
                class="image"
            />
          </div>
          <div class="land-msg">
            <div class="brand">
              <img src="@/assets/img/brands/google.svg" alt="" class="logo" />
              <h3>vs</h3>
              <img src="@/assets/img/brands/amazon.svg" alt="" class="logo" />
            </div>

            <div class="upper-msg">
              <h3>
                The war of the <span class="assistants">assistants</span> is
                here.
              </h3>
              <h5>Buy one and get the other for half the price.</h5>
              <a href="/electronics">Explore electronics</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Left and right controls/icons -->
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#landPageCarousel"
        data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#landPageCarousel"
        data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>

<script></script>

<style scoped>
.landing {
  display: flex;
  background-color: var(--black);
  border-radius: 2rem;
  margin: 1rem;
  height: 400px;
  padding: 1rem 3rem;
}

.land-msg {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 0.5rem;
  padding: 2rem;
}

.upper-msg {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.msg {
  text-align: center;
}
.links {
  display: flex;
  gap: 2rem;
}

a {
  color: var(--blue);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.upper-msg > h3 {
  font-style: italic;
}

.supercharged {
  color: var(--pink);
}

.assistants {
  color: var(--blue);
}

.brand {
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 50px;
  margin: 1rem;
}

.land-img {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
}

.image {
  height: auto;
  max-height: 100%;
  padding: 2rem;
}

video {
  width: 100%;
  height: auto;
  border-radius: 2rem;
  max-height: 100%;
}

@media screen and (max-width: 900px) {
  .landing {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 500px;
  }

  .land-msg {
    padding: 2rem;
  }

  .image,
  video {
    display: none;
  }
}
</style>