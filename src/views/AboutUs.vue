<template>
  <section class="">
    <h1 class="title">Welcome to our online store!</h1>
    <div class="upper-msg">
      <h3>
        At Kapi, we believe that shopping should be an enjoyable and hassle-free
        experience. Our goal is to provide you with a seamless online shopping
        platform that caters to all your needs, right from the comfort of your
        own home.
      </h3>
      <h3>
        As a single developer, I have poured my heart and soul into every aspect
        of this web application. From the initial concept to the final design, I
        have meticulously crafted this platform to ensure a user-friendly and
        visually appealing experience for our valued customers.
      </h3>
      <h3>
        With a deep passion for technology and a keen eye for detail, I have
        carefully considered every feature and functionality to bring you a
        truly exceptional online store. Whether you're browsing through our vast
        selection of products or making a purchase, our intuitive interface will
        guide you every step of the way.
      </h3>
      <h3>
        What sets us apart from other online stores is our commitment to quality
        and customer satisfaction. I have personally handpicked each item
        available in our store, ensuring that only the finest products make
        their way into our catalog. We believe in offering you a curated
        selection of high-quality items that meet your discerning tastes.
      </h3>
      <h3>
        Furthermore, we understand the importance of a seamless shopping
        experience. That's why we have implemented secure payment gateways to
        safeguard your personal information and provide you with peace of mind.
        Our dedicated customer support team is also available to assist you with
        any inquiries or concerns you may have, ensuring that your shopping
        journey is smooth and enjoyable.
      </h3>
      <h3>
        As a single developer, I am constantly working to improve and enhance
        our web application. Your feedback is invaluable to us, and we are
        always eager to hear your suggestions and ideas. Together, we can make
        this platform even better and continue to exceed your expectations.
      </h3>
      <h3>
        Thank you for choosing Kapi as your preferred online store. We are
        honored to serve you and look forward to bringing you an exceptional
        shopping experience. Happy shopping!
      </h3>
      <h3 class="message">Sincerely,</h3>
      <h3 class="message">Darius-Lorenzo Boncilă</h3>
      <h3 class="message2">Founder and Developer of Kapi</h3>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  color: var(--carbon);
  padding-bottom: 2%;
  padding-top: 2%;
  font-weight: bold;
}
.upper-msg {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.upper-msg > h3 {
  font-style: italic;
}
.message {
  font-weight: bold;
  padding-top: 2%;
}

.message2 {
  font-weight: bold;
  padding: 2%;
}
</style>