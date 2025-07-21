<template>
    <div class="page-center">
  <div class="signup-container">
    <!-- Sign Up Form -->
    <form class="signup-form fade-in" autocomplete="off" @submit.prevent="onSubmit">
      <div class="signup-title">Create a new account</div>
      <div class="signup-subtitle">Connect✦Shoot✦Shine</div>
      <div class="form-row">
        <input v-model="form.username" type="text" name="Username" placeholder="Username" required>
      </div>
      <div class="form-row inputs-inline">
        <input v-model="form.email" type="email" name="email" placeholder="Email address" required>
      </div>
      <div class="form-row inputs-inline">
        <div class="input-wrapper">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="form.password"
            name="password"
            placeholder="New password"
            required
            ref="passwordInput"
          >
          <span
            class="toggle-password"
            tabindex="0"
            @click="togglePassword"
            @keydown.enter.prevent="togglePassword"
            @keydown.space.prevent="togglePassword"
          >
            <!-- Eye Off SVG -->
            <svg v-if="!showPassword" class="eye eye-off" xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.02 10.02 0 0 1 12 20c-5 0-9.27-3.11-11-7.5A12.06 12.06 0 0 1 4.2 6.21"/><path d="m1 1 22 22"/><path d="M9.53 9.53A3.5 3.5 0 0 0 12 15.5a3.5 3.5 0 0 0 3.5-3.5 3.5 3.5 0 0 0-3.5-3.5"/><path d="M21.82 17.94A10.02 10.02 0 0 0 12 4c-5 0-9.27-3.11-11 7.5A12.06 12.06 0 0 0 4.2 17.79"/></svg>
            <!-- Eye On SVG -->
            <svg v-else class="eye eye-on" xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3.5"/></svg>
          </span>
        </div>
      </div>
      <label class="form-label" for="dob-day">Date of birth</label>
      <div class="dob-row">
        <select v-model="form.dobDay" name="dob-day" id="dob-day" required>
          <option value="">Day</option>
          <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
        </select>
        <select v-model="form.dobMonth" name="dob-month" id="dob-month" required>
          <option value="">Month</option>
          <option v-for="(m, idx) in months" :key="idx" :value="idx+1">{{ m }}</option>
        </select>
        <select v-model="form.dobYear" name="dob-year" id="dob-year" required>
          <option value="">Year</option>
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
      </div>
      <label class="form-label">Gender</label>
      <div class="gender-row">
        <label class="gender-radio"><input type="radio" v-model="form.gender" value="female" required> Female♀️</label>
        <label class="gender-radio"><input type="radio" v-model="form.gender" value="male"> Male♂️</label>
        <label class="gender-radio"><input type="radio" v-model="form.gender" value="lgbtq">N/A🏳️‍🌈</label>
      </div>
      <button type="submit" class="signup-btn">Sign Up</button>
      <div class="terms">
        By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
      </div>
      <div class="bottom-link" @click="showSignIn">Already have an account?</div>
    </form>
    <!-- Add your sign-in form here if needed -->
  </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const form = ref({
  username: '',
  email: '',
  password: '',
  dobDay: '',
  dobMonth: '',
  dobYear: '',
  gender: ''
});

const showPassword = ref(false);

const days = computed(() => Array.from({length: 31}, (_, i) => i + 1));
const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
const years = computed(() => {
  const current = new Date().getFullYear() - 10;
  return Array.from({length: current - 1900 + 1}, (_, i) => current - i);
});

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const onSubmit = () => {
  alert("Registration submitted!\n(This is a demo form.)");
};

const showSignIn = () => {
  // In a full app, switch to a sign-in form here.
  alert("Switch to Sign In (not implemented in this demo)");
};
</script>

<style>
/* ...PASTE ALL YOUR CSS HERE, UNCHANGED... */
/* You can just copy the style block from your HTML above! */
.page-center {
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(360deg, #ff66c4, #ffde59);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* For iOS safe area, has no effect elsewhere */
  padding: env(safe-area-inset-top, 0) env(safe-area-inset-right, 0)
           env(safe-area-inset-bottom, 0) env(safe-area-inset-left, 0);
}
body {
  background: linear-gradient(360deg, #ff66c4, #ffde59);
  margin: 0;
  font-family: 'Roboto', Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.signup-container {
  background: #fff;
  padding: 32px 24px 16px 24px;
  border-radius: 8px;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 4px 18px 0 rgba(0,0,0,.10);
  margin: 20px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s;
}
.signup-title {
  color: #FFA78B;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: -1px;
  white-space: nowrap;
}
.signup-subtitle {
  color: #606770;
  font-size: 17px;
  text-align: center;
  margin-bottom: 18px;
  font-weight: 400;
}
.signup-form, .signin-form {
  display: flex;
  flex-direction: column;
  gap: 13px;
  transition: opacity 0.4s, transform 0.4s;
}
.form-row {
  display: flex;
  gap: 10px;
  position: relative;
}
.form-row > input,
.form-row > .input-wrapper {
  flex: 1;
}
.signup-form .form-row.inputs-inline {
  gap: 10px;
  flex-direction: row;
}
.signup-form .form-row.inputs-inline > input,
.signup-form .form-row.inputs-inline > .input-wrapper {
  flex: 1;
}
.signup-form input[type="text"],
.signup-form input[type="email"],
.signup-form input[type="password"],
.signin-form input[type="email"],
.signin-form input[type="password"] {
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #ccd0d5;
  font-size: 16px;
  width: 100%;
  background: #f5f6f7;
  transition: border-color 0.2s;
  margin-bottom: 0;
  box-sizing: border-box;
  margin-top: 0;
}
.signup-form input[type="text"]:focus,
.signup-form input[type="email"]:focus,
.signup-form input[type="password"]:focus,
.signin-form input[type="email"]:focus,
.signin-form input[type="password"]:focus {
  border-color: #1877f2;
  outline: none;
  background: #fff;
}
.input-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}
.input-wrapper input[type="password"],
.input-wrapper input[type="text"] {
  padding-right: 40px;
}
.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  background: none;
  border: none;
  outline: none;
  padding: 0;
  z-index: 2;
  transition: color 0.2s;
}
.toggle-password:hover { color: #1877f2; }
label.form-label {
  font-size: 14px;
  color: #606770;
  margin-bottom: 3px;
  margin-top: 4px;
  display: block;
  font-weight: 500;
}
.dob-row {
  display: flex;
  gap: 8px;
  width: 100%;
}
.dob-row select {
  padding: 9px 5px;
  border-radius: 5px;
  border: 1px solid #ccd0d5;
  font-size: 15px;
  background: #f5f6f7;
  width: 100%;
  transition: border-color 0.2s;
    min-width: 90px;
  flex: 0 0 auto;   
}
.dob-row select:focus {
  border-color: #1877f2;
  background: #fff;
  outline: none;
}
.gender-radio {
  display: flex;
  align-items: center;
  gap: 5px;
  background: #f5f6f7;
  padding: 7px 14px 7px 8px;
  border-radius: 5px;
  border: 1px solid #ccd0d5;
  font-size: 15px;
  cursor: pointer;
  flex: 1 1 0;         /* Allow to shrink and wrap */
  min-width: 90px;     /* Prevent too narrow on wrap */
  box-sizing: border-box;
  transition: border-color 0.2s;
    flex: 0 0 auto !important;  /* don't shrink, don't grow, override earlier flex */
  min-width: 90px;            /* adjust as needed */
  box-sizing: border-box;
}
.gender-radio input[type="radio"] {
  accent-color: #1877f2;
  margin-right: 4px;
  cursor: pointer;
}

.signup-btn,
.signin-btn {
  margin-top: 18px;
  background: #FF7DAE;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border: none;
  width: 100%;
  border-radius: 6px;
  padding: 12px 0;
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0,0,0,0.07);
}
.signup-btn:hover,
.signin-btn:hover {
  background: #FF7DAE;
}
.terms {
  font-size: 12px;
  color: #777;
  text-align: center;
  margin: 12px 0 6px 0;
}
.bottom-link {
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  color: #FF9798;
  cursor: pointer;
  transition: color 0.2s;
  user-select: none;
}
.bottom-link:hover {
  text-decoration: underline;
  color: #FFC172;
}
.fade-in {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
  z-index: 1;
}
.fade-out {
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
  z-index: 0;
  position: absolute;
  left: 0; right: 0; top: 0;
}
.signin-form {
  position: absolute;
  left: 0; right: 0; top: 0;
  background: #fff;
  padding: 32px 24px 16px 24px;
  border-radius: 8px;
  box-shadow: none;
  z-index: 0;
  opacity: 0;
  pointer-events: none;
  transform: translateY(20px);
  transition: opacity 0.4s, transform 0.4s;
}
.signin-form .signin-title {
  color: #1c1e21;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  letter-spacing: -1px;
}
.signin-form .signin-subtitle {
  color: #606770;
  font-size: 17px;
  text-align: center;
  margin-bottom: 18px;
  font-weight: 400;
}

</style>