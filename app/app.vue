<template>
    <div class="page-center">
  <div class="signup-container">
    <!-- Sign Up Form -->
    <form class="signup-form fade-in" autocomplete="off" @submit.prevent="onSubmit">
      <div class="signup-title">Create a new account</div>
      <div class="signup-subtitle">Connect✦Shoot✦Shine</div>
      <div class="form-row">
        <input v-model="form.username" type="text" name="Username" placeholder="Username">
      </div>
      <div class="form-row inputs-inline">
        <input v-model="form.email" type="email" name="email" placeholder="Email address">
      </div>
      <div class="form-row inputs-inline">
        <div class="input-wrapper">
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="form.password"
            name="password"
            placeholder="New password"
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
      <label class="form-label">Date of birth</label>
        <input class="styled-date-select" v-model="form.date" type="date" name="date" placeholder="Date of birth">
      <button type="submit" class="signup-btn" @click="signUp">Sign Up</button>
      <div class="terms">
        By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
      </div>
      <div class="bottom-link" @click="showSignIn">Already have an account?</div>
    </form>
  </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const signUp = () => {
 // Reset errors
  errors.value.username = "";
  errors.value.email = "";
  errors.value.date = "";

  // Validate username
  if (!form.value.username) {
    errors.value.username = "Please enter your username.";
  }

  // Validate email
  if (!form.value.email) {
    errors.value.email = "Please enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(form.value.email)) {
    errors.value.email = "Please enter a valid email address.";
  }

  // Validate date (DOB) -- as before
  const dob = form.value.date;
  if (!dob) {
    errors.value.date = "Please select your date of birth.";
  } else {
    const dobDate = new Date(dob);
    const now = new Date();
    const minDate = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());
    if (dobDate > minDate) {
      errors.value.date = "You must be at least 18 years old to sign up.";
    }
  }

  // If any errors, don't submit
  if (errors.value.username || errors.value.email || errors.value.date) return;

  alert("Registration submitted!\n(This is a demo form.)");
};

const getTodayDate = () => {
  const today = new Date();
  // Get year, month, day with leading zeros for month/day
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const form = ref({
  username: '',
  email: '',
  password: '',
  dobDay: '',
  dobMonth: '',
  dobYear: '',
  gender: '',
  date: getTodayDate()
});

const errors = ref({
  username: "",
  email: "",
  date: ""
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
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.page-center {
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(360deg, #ff66c4, #ffde59);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: env(safe-area-inset-top, 0) env(safe-area-inset-right, 0)
           env(safe-area-inset-bottom, 0) env(safe-area-inset-left, 0);
}
.styled-date-select {
  padding: 0.9rem; /* Match input padding */
  border-radius: 6px; /* Match input border-radius */
  border: 1px solid #ccd0d5; /* Match input border */
  font-size: 1.05rem; /* Match input font-size */
  width: 100%;
  background: #f5f6f7; /* Match input background */
  transition: border-color 0.2s;
  box-sizing: border-box;
  color: #606770; /* Match input text color */
  /* Remove default select arrow for better styling consistency if desired */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%;
  background-size: 1em auto;
}

body {
  background: linear-gradient(360deg, #ff66c4, #ffde59);
  margin: 0;
  font-family: 'Roboto', Arial, sans-serif;
  min-height: 100vh;
}

.signup-container {
  background: #fff;
  padding: 7vw 4vw 4vw 4vw;
  border-radius: 8px;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 4px 18px 0 rgba(0,0,0,.10);
  margin: 4vw;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.signup-title {
  color: #FFA78B;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
}
.signup-subtitle {
  color: #606770;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1.1rem;
  font-weight: 400;
}

.signup-form, .signin-form {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  transition: opacity 0.4s, transform 0.4s;
}
.form-row {
  display: flex;
  gap: 0.5rem;
  position: relative;
  flex-direction: column;
}
.signup-form .form-row.inputs-inline {
  flex-direction: column;
  gap: 0.5rem;
}

.form-row > input,
.form-row > .input-wrapper {
  flex: 1;
}

/* Inputs */
.signup-form input[type="text"],
.signup-form input[type="email"],
.signup-form input[type="password"],
.signin-form input[type="email"],
.signin-form input[type="password"] {
  padding: 0.9rem;
  border-radius: 6px;
  border: 1px solid #ccd0d5;
  font-size: 1.05rem;
  width: 100%;
  background: #f5f6f7;
  transition: border-color 0.2s;
  box-sizing: border-box;
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
  padding-right: 2.5rem;
}
.toggle-password {
  position: absolute;
  right: 0.7rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
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

/* DOB & Gender rows: always horizontal, scroll if needed */
.dob-row, .gender-row {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
  flex-wrap: nowrap;
  white-space: nowrap;
  text-align: center;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.dob-row select {
  min-width: 92px;
  flex: 0 0 auto;
  padding: 0.6rem 0.3rem;
  border-radius: 5px;
  border: 1px solid #ccd0d5;
  font-size: 1rem;
  background: #f5f6f7;
  transition: border-color 0.2s;
}
.dob-row select:focus {
  border-color: #1877f2;
  background: #fff;
  outline: none;
}

.gender-radio {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  background: #f5f6f7;
  padding: 0.4rem 0.8rem 0.4rem 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccd0d5;
  font-size: 1rem;
  cursor: pointer;
  flex: 0 0 auto;
  min-width: 92px;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.gender-radio input[type="radio"] {
  accent-color: #1877f2;
  margin-right: 0.15rem;
  cursor: pointer;
}

label.form-label {
  font-size: 0.95rem;
  color: #606770;
  margin-bottom: 0.3rem;
  margin-top: 0.4rem;
  display: block;
  font-weight: 500;
}

.signup-btn,
.signin-btn {
  margin-top: 1rem;
  background: #FF7DAE;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  border: none;
  width: 100%;
  border-radius: 6px;
  padding: 0.9rem 0;
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0,0,0,0.07);
  transition: background 0.2s;
}
.signup-btn:hover,
.signin-btn:hover {
  background: #FF7DAE;
}

.terms {
  font-size: 0.82rem;
  color: #777;
  text-align: center;
  margin: 0.8rem 0 0.4rem 0;
}
.bottom-link {
  margin-top: 0.7rem;
  text-align: center;
  font-size: 1rem;
  color: #FF9798;
  cursor: pointer;
  transition: color 0.2s;
  user-select: none;
}
.bottom-link:hover {
  text-decoration: underline;
  color: #FFC172;
}

/* Fade/transition helpers */
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
  padding: 2rem 1.2rem 1rem 1.2rem;
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
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
}
.signin-form .signin-subtitle {
  color: #606770;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1.1rem;
  font-weight: 400;
}
.signin-form .bottom-link {
  margin-top: 1rem;
}

/* --- Desktop & Tablet tweaks --- */
@media (min-width: 700px) {
  .signup-container {
    padding: 40px 32px 24px 32px;
    margin: 24px auto;
  }
  .signup-title, .signin-title { font-size: 2.1rem; }
  .signup-form, .signin-form { gap: 18px; }
  .form-row { gap: 12px; flex-direction: row; }
  .signup-form .form-row.inputs-inline { flex-direction: row; gap: 12px; }
  .dob-row, .gender-row { gap: 12px; }
}

</style>