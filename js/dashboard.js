/* ========================================
   CON GUSTO FINANCE — Dashboard JS
   Panel switching, calculator, accordion
   ======================================== */

(function () {
  'use strict';

  // ---- Panel Switching ----

  var sidebarLinks = document.querySelectorAll('.dashboard-sidebar__link[data-panel]');
  var panels = document.querySelectorAll('.dashboard-panel');

  function switchPanel(panelId) {
    // Deactivate all sidebar links
    sidebarLinks.forEach(function (link) {
      link.classList.remove('is-active');
    });

    // Activate matching sidebar link(s)
    sidebarLinks.forEach(function (link) {
      if (link.getAttribute('data-panel') === panelId) {
        link.classList.add('is-active');
      }
    });

    // Hide all panels, show target
    panels.forEach(function (panel) {
      panel.classList.remove('is-active');
    });

    var target = document.getElementById('panel-' + panelId);
    if (target) {
      target.classList.add('is-active');
      // Re-trigger CSS animation
      target.style.animation = 'none';
      target.offsetHeight; // force reflow
      target.style.animation = '';
    }

    // Reset message detail views when switching to zpravy
    if (panelId === 'zpravy') {
      showMessageList();
    }

    // Scroll to top of main content
    window.scrollTo({ top: 0 });
  }

  sidebarLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var panelId = this.getAttribute('data-panel');
      if (panelId) {
        switchPanel(panelId);
      }
    });
  });

  // Also handle "Vice o programu" link in opportunities section
  document.querySelectorAll('[data-panel]').forEach(function (el) {
    if (!el.classList.contains('dashboard-sidebar__link')) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var panelId = this.getAttribute('data-panel');
        if (panelId) {
          switchPanel(panelId);
        }
      });
    }
  });

  // ---- Calculator ----

  var slider = document.getElementById('calc-slider');
  var calcValue = document.getElementById('calc-value');
  var calcInterest = document.getElementById('calc-interest');
  var calcQuarterly = document.getElementById('calc-quarterly');
  var calcTotal = document.getElementById('calc-total');

  function formatCurrency(amount) {
    return amount.toLocaleString('cs-CZ') + ' Kc';
  }

  function updateSliderTrack() {
    if (!slider) return;
    var min = parseInt(slider.min, 10);
    var max = parseInt(slider.max, 10);
    var val = parseInt(slider.value, 10);
    var pct = ((val - min) / (max - min)) * 100;
    slider.style.background =
      'linear-gradient(to right, #b8976c 0%, #b8976c ' + pct + '%, rgba(255,255,255,0.15) ' + pct + '%, rgba(255,255,255,0.15) 100%)';
  }

  function updateCalc() {
    if (!slider) return;

    var amount = parseInt(slider.value, 10);
    var rate = 0.07;
    var annualInterest = Math.round(amount * rate);
    var quarterlyPayment = Math.round(annualInterest / 4);
    var totalEarnings = annualInterest * 2; // 2 years

    calcValue.textContent = formatCurrency(amount);
    calcInterest.textContent = formatCurrency(annualInterest);
    calcQuarterly.textContent = formatCurrency(quarterlyPayment);
    calcTotal.textContent = formatCurrency(totalEarnings);
    updateSliderTrack();
  }

  if (slider) {
    slider.addEventListener('input', updateCalc);
    updateCalc();
  }

  // ---- Messages ----

  var msgList = document.getElementById('msg-list');
  var msgItems = document.querySelectorAll('.dashboard-msg[data-msg]');
  var msgDetails = document.querySelectorAll('.dashboard-msg-detail');
  var msgBackButtons = document.querySelectorAll('.dashboard-msg-detail__back');

  function showMessageList() {
    if (msgList) msgList.style.display = '';
    msgDetails.forEach(function (d) {
      d.classList.remove('is-active');
    });
  }

  function showMessageDetail(msgId) {
    if (msgList) msgList.style.display = 'none';
    msgDetails.forEach(function (d) {
      d.classList.remove('is-active');
    });

    var detail = document.getElementById('msg-detail-' + msgId);
    if (detail) {
      detail.classList.add('is-active');
    }
  }

  msgItems.forEach(function (item) {
    item.addEventListener('click', function () {
      var msgId = this.getAttribute('data-msg');
      // Mark as read
      this.classList.remove('dashboard-msg--unread');
      showMessageDetail(msgId);
      updateUnreadBadge();
    });
  });

  msgBackButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      showMessageList();
    });
  });

  function updateUnreadBadge() {
    var unreadCount = document.querySelectorAll('.dashboard-msg--unread').length;
    var badges = document.querySelectorAll('.dashboard-sidebar__badge');
    badges.forEach(function (badge) {
      if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.style.display = '';
      } else {
        badge.style.display = 'none';
      }
    });
  }

  // ---- FAQ Accordion ----

  var faqQuestions = document.querySelectorAll('.dashboard-faq__question');

  faqQuestions.forEach(function (button) {
    button.addEventListener('click', function () {
      var item = this.parentElement;
      var isActive = item.classList.contains('is-active');

      // Close all
      document.querySelectorAll('.dashboard-faq__item').forEach(function (i) {
        i.classList.remove('is-active');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('is-active');
      }
    });
  });

})();
