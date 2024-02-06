<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- start form -->
      <form
        @submit.prevent="onSubmit"
        class="flex flex-col justify-start space-y-6"
      >
        <div class="flex flex-col row">
          <label class="opacity-60 font-semibold text-sm">Full Name</label>
          <input
            class="border-gray-100 rounded-lg mt-1 px-4 py-3 bg-gray"
            type="text"
            placeholder="iMoney"
            v-model="fullName"
          />
        </div>
        <div class="flex flex-col row">
          <label class="opacity-60 font-semibold text-sm">Email Address</label>
          <input
            class="border-gray-100 rounded-lg mt-1 px-4 py-3 bg-gray"
            type="email"
            placeholder="user@example.com"
            v-model="email"
          />
        </div>
        <div class="flex flex-col row">
          <label class="opacity-60 font-semibold text-sm">Password</label>
          <input
            class="border-gray-100 rounded-lg mt-1 px-4 py-3 bg-gray"
            type="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="w-full bg-primary rounded-lg">
          <button class="w-full text-center py-4 text-white font-semibold">
            Sign Up
          </button>
        </div>
      </form>
      <!-- end form -->

      <!-- start description -->
      <div class="flex mt-5 justify-center">
        <p>I'm already a member.</p>
        <router-link
          :to="{ name: 'Login', param: {} }"
          class="pl-2 text-primary font-semibold"
          >Sign In</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const fullName = ref("");
    const email = ref("");
    const password = ref("");

    function onSubmit() {
      console.log({ fullName, email, password });
    }

    return { fullName, email, password, onSubmit };
  },
};
</script>
