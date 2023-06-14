<template>
  <section class="">
    <h1 class="title">TERMS AND CONDITIONS</h1>
    <div class="upper-msg">
      <h3>
        Welcome to our online store! These terms and conditions outline the
        rules and regulations for the use of our web application. By accessing
        or using our web application, you agree to be bound by these terms and
        conditions. If you do not agree with any part of these terms, please do
        not use our web application.
      </h3>
      <h3 class="message">Intellectual Property</h3>
      <h3>
        The content, features, and functionality of our web application,
        including but not limited to text, graphics, logos, images, videos, and
        software, are the property of Kapi and are protected by intellectual
        property laws. You may not reproduce, distribute, modify, or create
        derivative works of any materials without our prior written consent.
      </h3>
      <h3 class="message">Use of the Web Application</h3>
      <h3>
        a. Account Registration: In order to access certain features of our web
        application, you may be required to create an account. You must provide
        accurate and complete information during the registration process and
        keep your account credentials confidential. You are responsible for all
        activities that occur under your account.
      </h3>
      <h3>
        b. Age Restriction: Our web application is intended for users who are at
        least 18 years old. By using our web application, you represent that you
        are at least 18 years old or have obtained parental or guardian consent
        to use our services.
      </h3>
      <h3>
        c. Prohibited Activities: You agree not to engage in any of the
        following prohibited activities while using our web application:
      </h3>
      <h3>
        Violating any applicable laws or regulations. Impersonating any person
        or entity or falsely stating or misrepresenting your affiliation with a
        person or entity. Interfering with or disrupting the operation of our
        web application or the servers or networks used to make it available.
        Uploading or transmitting any viruses, worms, or malicious code.
      </h3>
      <h3 class="message">Product Listings and Sales</h3>
      <h3>
        a. Product Information: We strive to provide accurate and up-to-date
        information about our products. However, we do not warrant the accuracy,
        completeness, or reliability of any product descriptions, pricing, or
        availability. All information is subject to change without notice.
      </h3>
      <h3>
        b. Orders and Payments: By placing an order through our web application,
        you represent and warrant that you have the legal right to use the
        payment method provided. All payments are subject to verification and
        approval. We reserve the right to refuse or cancel any order at any time
        for any reason.
      </h3>
      <h3>
        c. Shipping and Returns: Our shipping and returns policies are outlined
        separately on our web application. Please review those policies for
        detailed information regarding shipping methods, delivery times, and
        return procedures.
      </h3>
      <h3 class="message">Limitation of Liability</h3>
      <h3>
        To the fullest extent permitted by law, Kapi shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages,
        including but not limited to loss of profits, data, or use, arising out
        of or in any way connected with the use of our web application.
      </h3>
      <h3 class="message">Governing Law</h3>
      <h3>
        These terms and conditions shall be governed by and construed in
        accordance with the laws of Romania. Any legal action or proceeding
        arising out of or relating to these terms shall be exclusively brought
        in the courts located in Romania.
      </h3>
      <h3 class="message">Modifications</h3>
      <h3>
        We reserve the right to modify or replace these terms and conditions at
        any time. Any changes will be effective immediately upon posting on our
        web application. Your continued use of our web application after any
        such modifications constitute your acceptance of the new terms and
        conditions.
      </h3>
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
</style>
