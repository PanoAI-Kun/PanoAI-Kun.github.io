---
layout: page
title: Contact & Consultation
---

# B2B Consultation & Collaboration

> **Note**: For a prompt response, please ensure all technical challenge details are provided.

<form action="https://formspree.io/f/mbddevyj" method="POST" id="contact-form">
  
  <label for="name">Name / Organization</label>
  <input type="text" name="name" required placeholder="Dr. Jane Doe / Tech Corp">

  <label for="type">Collaboration Type</label>
  <select name="type" required>
    <option value="consultation">Industrial Consultation</option>
    <option value="recruitment">Talent Acquisition</option>
    <option value="academic">Academic Collaboration</option>
  </select>

  <label for="budget">Estimated Budget Range</label>
  <select name="budget">
    <option value="low">< $5k</option>
    <option value="mid">$5k - $20k</option>
    <option value="high">$20k+</option>
  </select>

  <label for="timeline">Expected Timeline</label>
  <select name="timeline">
    <option value="immediate">Within 1 Month</option>
    <option value="short">1 - 3 Months</option>
    <option value="long">Long-term</option>
  </select>

  <label for="message">Technical Challenge / Project Description</label>
  <textarea name="message" rows="5" required placeholder="Describe the geometric or vision challenge..."></textarea>

  <div class="h-captcha" data-sitekey="446a72d2-d078-43d4-a1ac-7322843691f6"></div>
  <script src="https://js.hcaptcha.com/1/api.js" async defer></script>

  <button type="submit" style="background-color: #1A1A1A; color: #FFFFFF; padding: 10px 20px; border: none; cursor: pointer;">Send Request</button>
</form>