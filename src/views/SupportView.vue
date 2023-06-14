<template>
  <section class="fashion">
    <h1 class="title">Welcome to our Support Page!</h1>
    <div class="upper-msg">
      <h3>
        At Kapi, we strive to provide the best possible customer experience. We
        understand that sometimes you may have questions, encounter technical
        issues, or require assistance while using our web application. Our
        dedicated support team is here to help you, and we've compiled some
        essential information to guide you through common queries and concerns.
      </h3>
      <h3>
        Contacting Support: If you need assistance, our support team is just a
        message away. We offer multiple channels to reach out to us:
      </h3>
      <h3>
        Email Support: Send us an email at darius.boncila@yahoo.com, and one of
        our support representatives will get back to you as soon as possible.
      </h3>
      <h3>
        We're here to support you and make your experience with Kapi as smooth
        as possible. Our team is committed to resolving any issues promptly and
        ensuring your satisfaction.
      </h3>
      <h3 class="message">Thank you for choosing Kapi, and happy shopping!</h3>
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
  padding: 2%;
  font-weight: bold;
}
</style>
