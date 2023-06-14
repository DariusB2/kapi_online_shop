<template>
    <main class="login">
        <section class="loginSection">
            <div class="loginCard">
                <div class="loginForm">
                    <form class="login" @submit.prevent="login">
                      <div class="msg">
                        <h4 class="welcome">Welcome back!</h4>
                        <h6 class="instructions">Enter your login information</h6>
                      </div>
                      <input
                          class="user"
                          type="text"
                          name=""
                          placeholder="Enter your email"
                          v-model="login_form.email"
                      />
                      <input
                          class="password"
                          type="password"
                          name=""
                          placeholder="Enter your password"
                          v-model="login_form.password"
                      />
                        <input type="submit" value="Login" />
                    </form>
                  <p class="join">
                    Not a member?
                    <router-link class="toJoin" to="/register">Join</router-link>
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
    setup() {
        const login_form = ref({});
        const store = useStore();
        const login = () => {
            store.dispatch('login', login_form.value);
        }

        return {
            login_form,
            login
        }
    }

}
</script>

<style>
form.login input[type="submit"] {
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
    padding-bottom: 5%;
}

input:focus:not([type="submit"]) {
    opacity: 1;
}

form.login input:not([type="submit"]) {
    color: #2c3e50;
    border-bottom: 2px solid #2c3e50;
  padding-top: 5%;
  padding-bottom: 5%;
}
.loginSection {
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
.login {
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
.join {
  color: var(--carbonLight);
  font-size: 0.8rem;
  text-align: center;
}
</style>