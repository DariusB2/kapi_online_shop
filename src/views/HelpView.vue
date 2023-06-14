<template>
  <section class="">
    <h1 class="title">Help</h1>
    <div class="upper-msg">
      <h3>
        Welcome to the Help page of Kapi. We are here to provide you with the
        guidance and assistance you need to make the most out of your online
        shopping experience. Below, you will find answers to some commonly asked
        questions and helpful information to address any concerns you may have.
      </h3>
      <h3 class="message">How to Place an Order:</h3>
      <h3>
        To place an order on our web application, follow these simple steps:
      </h3>
      <h3>
        Browse our catalog and select the item(s) you wish to purchase. Add the
        item(s) to your shopping cart. Review your cart to ensure all desired
        items are included. Proceed to the checkout page and provide the
        necessary information, such as shipping address and payment details.
        Confirm your order and wait for the order confirmation email.
      </h3>
      <h3 class="message">Payment Methods:</h3>
      <h3>We currently accept the following payment methods:</h3>
      <h3>
        Credit or debit cards: We accept major credit and debit cards, including
        Visa, Mastercard, American Express, and Discover. Online payment
        services: We also support popular online payment services such as
        PayPal.
      </h3>
      <h3 class="message">Shipping and Delivery:</h3>
      <h3>
        We offer reliable and efficient shipping options to ensure your orders
        reach you in a timely manner. Here are some key points to keep in mind:
      </h3>
      <h3>
        We strive to process and dispatch orders within [X] business days after
        payment confirmation. Shipping times may vary depending on your
        location. Please refer to our Shipping Policy for estimated delivery
        times. Once your order has been shipped, you will receive a shipping
        confirmation email with tracking information to monitor the progress of
        your delivery.
      </h3>
      <h3 class="message">Returns and Refunds:</h3>
      <h3>
        Your satisfaction is our top priority. If, for any reason, you are not
        completely satisfied with your purchase, we offer a hassle-free return
        and refund policy. Please review our Returns and Refunds Policy for
        detailed information on eligibility, procedures, and timeframes.
      </h3>
      <h3 class="message">Privacy and Security:</h3>
      <h3>
        We take your privacy and security seriously. Rest assured that your
        personal information is handled with utmost care and in accordance with
        our Privacy Policy. We utilize industry-standard security measures to
        protect your data and provide a safe shopping environment.
      </h3>
      <h3 class="message">Contact Us:</h3>
      <h3>
        If you have any further questions, concerns, or require additional
        assistance, please don't hesitate to reach out to our support team. You
        can contact us via email at darius.boncila@yahoo.com. Our dedicated team
        will promptly respond to your inquiry within 24 hours.
      </h3>
      <h3>
        We hope this Help page has addressed some of your questions and provided
        the information you need. At Kapi, we are committed to delivering an
        exceptional online shopping experience, and we appreciate your trust in
        us.
      </h3>
      <h3 class="message">Happy shopping!</h3>
      <h3 class="message2">The Kapi Team</h3>
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
