/* ========================================
   CON GUSTO FINANCE — Registrace JS
   Step switching, validation, password toggle
   ======================================== */

(function () {
  'use strict';

  let currentStep = 1;
  const totalSteps = 3;

  // DOM references
  const steps = document.querySelectorAll('.reg-step');
  const progressSteps = document.querySelectorAll('.reg-progress__step');
  const progressLines = document.querySelectorAll('.reg-progress__line');
  const form1 = document.getElementById('regForm1');
  const form3 = document.getElementById('regForm3');
  const btnStep2Continue = document.getElementById('regStep2Continue');
  const btnStep2Resend = document.getElementById('regStep2Resend');
  const verifyEmailEl = document.getElementById('regVerifyEmail');

  // ---- Step navigation ----

  function goToStep(step) {
    if (step < 1 || step > totalSteps) return;
    currentStep = step;

    // Update step panels
    steps.forEach(function (el) {
      el.classList.remove('is-active');
      if (parseInt(el.dataset.step) === currentStep) {
        el.classList.add('is-active');
      }
    });

    // Update progress bar
    progressSteps.forEach(function (el) {
      var s = parseInt(el.dataset.step);
      el.classList.remove('reg-progress__step--active', 'reg-progress__step--done');
      if (s < currentStep) {
        el.classList.add('reg-progress__step--done');
        el.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
      } else if (s === currentStep) {
        el.classList.add('reg-progress__step--active');
        el.textContent = s;
      } else {
        el.textContent = s;
      }
    });

    progressLines.forEach(function (el) {
      var l = parseInt(el.dataset.line);
      el.classList.toggle('reg-progress__line--done', l < currentStep);
    });

    // Scroll to top of card
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---- Validation helpers ----

  function showError(fieldId) {
    var input = document.getElementById(fieldId);
    var error = document.querySelector('[data-error="' + fieldId + '"]');
    if (input) input.classList.add('reg-form__input--error');
    if (error) error.classList.add('is-visible');
  }

  function clearErrors() {
    document.querySelectorAll('.reg-form__input--error').forEach(function (el) {
      el.classList.remove('reg-form__input--error');
    });
    document.querySelectorAll('.reg-form__error.is-visible').forEach(function (el) {
      el.classList.remove('is-visible');
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ---- Step 1 validation & submit ----

  function validateStep1() {
    clearErrors();
    var valid = true;

    var name = document.getElementById('reg-name');
    if (!name.value.trim()) { showError('reg-name'); valid = false; }

    var email = document.getElementById('reg-email');
    if (!email.value.trim() || !isValidEmail(email.value.trim())) { showError('reg-email'); valid = false; }

    var phone = document.getElementById('reg-phone');
    if (!phone.value.trim()) { showError('reg-phone'); valid = false; }

    var pw = document.getElementById('reg-password');
    if (!pw.value || pw.value.length < 8) { showError('reg-password'); valid = false; }

    var pw2 = document.getElementById('reg-password2');
    if (!pw2.value || pw2.value !== pw.value) { showError('reg-password2'); valid = false; }

    var gdpr = document.getElementById('reg-gdpr');
    if (!gdpr.checked) { showError('reg-gdpr'); valid = false; }

    var terms = document.getElementById('reg-terms');
    if (!terms.checked) { showError('reg-terms'); valid = false; }

    return valid;
  }

  if (form1) {
    form1.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateStep1()) {
        // Show entered email in verification step
        var emailValue = document.getElementById('reg-email').value.trim();
        if (verifyEmailEl) verifyEmailEl.textContent = emailValue;
        goToStep(2);
      }
    });
  }

  // ---- Step 2 buttons ----

  if (btnStep2Continue) {
    btnStep2Continue.addEventListener('click', function () {
      goToStep(3);
    });
  }

  if (btnStep2Resend) {
    btnStep2Resend.addEventListener('click', function () {
      btnStep2Resend.textContent = 'Odesláno!';
      btnStep2Resend.disabled = true;
      setTimeout(function () {
        btnStep2Resend.textContent = 'Odeslat znovu';
        btnStep2Resend.disabled = false;
      }, 2000);
    });
  }

  // ---- Step 3 submit ----

  if (form3) {
    form3.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Registrace dokončena! Vítejte v Con Gusto Finance.');
      window.location.href = 'dashboard.html';
    });
  }

  // ---- Password toggle ----

  document.querySelectorAll('.reg-form__toggle-pw').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = this.dataset.target;
      var input = document.getElementById(targetId);
      if (!input) return;

      var isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';

      // Swap icon
      if (isPassword) {
        this.innerHTML = '<svg viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
        this.setAttribute('aria-label', 'Skrýt heslo');
      } else {
        this.innerHTML = '<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
        this.setAttribute('aria-label', 'Zobrazit heslo');
      }
    });
  });

  // ---- File upload feedback ----

  function setupUpload(inputId, labelId, filenameId) {
    var input = document.getElementById(inputId);
    var label = document.getElementById(labelId);
    var filenameEl = document.getElementById(filenameId);
    if (!input || !label || !filenameEl) return;

    input.addEventListener('change', function () {
      if (this.files && this.files.length > 0) {
        filenameEl.textContent = this.files[0].name;
        label.classList.add('is-filled');
      } else {
        filenameEl.textContent = '';
        label.classList.remove('is-filled');
      }
    });
  }

  setupUpload('reg-id-front', 'regUploadFront', 'regFilenameFront');
  setupUpload('reg-id-back', 'regUploadBack', 'regFilenameBack');

  // ---- Clear error on input ----

  document.querySelectorAll('.reg-form__input').forEach(function (input) {
    input.addEventListener('input', function () {
      this.classList.remove('reg-form__input--error');
      var error = document.querySelector('[data-error="' + this.id + '"]');
      if (error) error.classList.remove('is-visible');
    });
  });

  document.querySelectorAll('.reg-checkbox input[type="checkbox"]').forEach(function (cb) {
    cb.addEventListener('change', function () {
      var error = document.querySelector('[data-error="' + this.id + '"]');
      if (error) error.classList.remove('is-visible');
    });
  });

})();
