---
lang: en
lang-ref: home
layout: home
description: |
  <p class="feature-title">Amazon Waters<br>Observatory</p>
  <p class="hero-subtitle">Data to understand the life of Amazonian rivers</p>

  <div class="heroSearchBlock">
    <div class="searchWrapper">
      <div class="tab">
        <button type="button" class="tablinks active" onclick="openTab(event, 'searchTab_name')">All fields</button>
        <button type="button" class="tablinks" onclick="openTab(event, 'searchTab_scientificName')">Scientific name</button>
        <button type="button" class="tablinks" onclick="openTab(event, 'searchTab_basin')">Subbasins</button>
        <button type="button" class="tablinks" onclick="openTab(event, 'searchTab_publisher')">Partners</button>
      </div>

      <div id="searchTab_scientificName" class="tabcontent">
        <form action="/en/occurrence/search" method="GET">
          <input id="verbatimScientificName" name="verbatimScientificName" class="input searchInput" type="text" placeholder="Search by species">
          <button type="submit" class="searchSubmit" aria-label="Search">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </form>
      </div>

      <div id="searchTab_name" class="tabcontent is-active">
        <form action="/en/occurrence/search" method="GET">
          <input id="home_specimen_input" name="q" class="input searchInput" type="text" placeholder="Search in the observatory">
          <button type="submit" class="searchSubmit" aria-label="Search">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </form>
      </div>

      <div id="searchTab_basin" class="tabcontent">
        <form action="/en/occurrence/search" method="GET">
          <input id="basin" name="basin" class="input searchInput" type="text" placeholder="Search by subbasin">
          <button type="submit" class="searchSubmit" aria-label="Search">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </form>
      </div>

      <div id="searchTab_publisher" class="tabcontent">
        <form action="/en/occurrence/search" method="GET">
          <input id="publisher" name="publisher" class="input searchInput" type="text" placeholder="Search by partner">
          <button type="submit" class="searchSubmit" aria-label="Search">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>

  <p class="separator">Or</p>

    <div class="heroSearchActions">
      <a href="/en/occurrence/search" class="heroSearchCta">Browse all records</a>
    </div>
  </div>

  <script>
    function equalizeHeroSearchTabs() {
      var isStacked = window.matchMedia('(max-width: 825px)').matches;

      document.querySelectorAll('.heroSearchBlock .tab').forEach(function(tab) {
        var buttons = tab.querySelectorAll('.tablinks');
        if (!buttons.length) return;

        buttons.forEach(function(btn) {
          btn.style.width = '';
        });

        if (isStacked) return;

        var maxWidth = 0;
        buttons.forEach(function(btn) {
          maxWidth = Math.max(maxWidth, btn.getBoundingClientRect().width);
        });

        buttons.forEach(function(btn) {
          btn.style.width = maxWidth + 'px';
        });
      });
    }

    function openTab(evt, tabName) {
      var wrapper = evt.currentTarget.closest('.searchWrapper');
      var tabcontent = wrapper.querySelectorAll('.tabcontent');
      var tablinks = wrapper.querySelectorAll('.tablinks');
      var i;

      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('is-active');
      }

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
      }

      document.getElementById(tabName).classList.add('is-active');
      evt.currentTarget.classList.add('active');
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', equalizeHeroSearchTabs);
    } else {
      equalizeHeroSearchTabs();
    }

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(equalizeHeroSearchTabs);
    }

    window.addEventListener('resize', equalizeHeroSearchTabs);
  </script>

background: /assets/images/home_bg_wh_w1800px.png
height: 100vh
permalink: /en
composition:
  - type: heroImage
  - data: en.home.stats
    type: stats
  - data: en.home.welcome
    type: split
  - data: en.home.explore
    type: features
---
