<template>
  <section class="">
    <h1 class="title">Contact Us</h1>
    <div class="upper-msg">
      <h3>
        Thank you for your interest in Kapi. We value your feedback and
        inquiries, and we're here to assist you in any way we can. To get in
        touch with us, please send us an email at the following address:
      </h3>
      <h3 class="message2">Email: darius.boncila@yahoo.com</h3>
      <h3>
        Our dedicated support team will make every effort to respond to your
        email within 24 hours. Whether you have a question about our products,
        need assistance with an order, or have any other concerns, we're here to
        help.
      </h3>
      <h3>
        When contacting us, please provide as much detail as possible regarding
        your inquiry. This will enable us to better understand your needs and
        provide you with the most accurate and helpful response. We strive to
        offer personalized and tailored solutions to ensure your satisfaction.
      </h3>
      <h3>
        At Kapi, we are committed to providing you with exceptional customer
        service. We value your opinion and appreciate any feedback you may have.
        If you have suggestions for improvement or ideas for new features,
        please don't hesitate to share them with us. Your input plays a vital
        role in shaping our web application and making it even better for you.
      </h3>
      <h3>
        Please note that while we currently only offer email support, we are
        actively exploring additional support channels to better serve you. We
        understand the importance of prompt and efficient communication and are
        working towards expanding our customer service options in the future.
      </h3>
      <h3>
        Thank you for choosing Kapi. We are grateful for your support and look
        forward to assisting you with all your inquiries.
      </h3>
      <h3 class="message">Best regards,</h3>
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
  padding-top: 2%;
  font-weight: bold;
}

.message2 {
  padding: 2%;
  font-weight: bold;
}
</style>
