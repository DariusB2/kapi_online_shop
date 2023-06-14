<template>
    <main class="register">
        <section class="registerSection">

            <div class="registerCard">
                <div class="registerForm">
                    <form class="register" @submit.prevent="register">
                      <div class="msg">
                        <h4 class="welcome">Welcome!</h4>
                        <h6 class="instructions">Please enter your information</h6>
                      </div>
                      <input
                          class="user"
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                      />
                      <input
                          class="user"
                          type="text"
                          name="email"
                          placeholder="Enter your email"
                          v-model="register_form.email"
                      />
                      <input
                          class="password"
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          v-model="register_form.password"
                      />
                      <div class="rememberMe">
                        <input type="checkbox" name="remember" />
                        <p class="message">
                          I agree with
                          <a href="/terms-and-conditions">Terms and Conditions</a>
                        </p>
                      </div>
                        <input type="submit" value="Register" />
                    </form>
                  <p class="join">
                    Already a member?
                    <router-link class="toJoin" to="/login">Login</router-link>
                  </p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup () {
        const register_form = ref({});
        const store = useStore();
        const register = () => {
            store.dispatch('register', register_form.value);
        }
        return {
            register_form,
            register
        }
    }
}
</script>

<style>
form.register input[type="submit"] {
    background-color: rgb(245, 66, 101);
    color: #fff;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
}
input:not([type="submit"]) {
    opacity: 0.8;
    transition: 0.4s;
}
input:focus:not([type="submit"]) {
    opacity: 1;
}
form.register input:not([type="submit"]) {
    color: #2c3e50;
    border-bottom: 2px solid #2c3e50;
}
.registerSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  margin: 1rem 0 2rem 0;
}
.msg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5%;
}
.welcome {
  font-size: 2rem;
}
.instructions {
  color: var(--carbonLight);
}
.register {
  display: flex;
  padding: unset;
  flex-direction: column;
}
.user,
.password {
  display: flex;
  border: solid var(--carbon) 1px;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  appearance: none;
  outline: none;
  width: 20rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  transition: 0.3s;
}
input::placeholder {
  color: var(--carbonLight);
  font-size: 0.9rem;
}
input:focus {
  box-shadow: 0 0 10px var(--blue);
}
.rememberMe {
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rememberMe p {
  margin: 0 0 0 0.2rem;
}
.join {
  color: var(--carbonLight);
  font-size: 0.8rem;
  text-align: center;
}
</style>