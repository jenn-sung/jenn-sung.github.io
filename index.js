/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

var app = new Vue({
  el: "#vue-app",
  router: router
});

// End Homepage component

// Begin About Page component

var AboutPage = {
  template: "#about-page",
  data: function() {
    return {
      message2: "about!"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

// End About Page component

// Begin Portfolio Page component

var HomePage = {
  template: "#portfolio-page",
  data: function() {
    return {
      message3: "portfolio"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

// End Portfolio Page component

// Begin Blog component

var HomePage = {
  template: "#blog-page",
  data: function() {
    return {
      message4: "Blog"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

// End Blog Component

// Begin Contact Component

var HomePage = {
  template: "#contact-page",
  data: function() {
    return {
      message: "contact"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

// End Contact component


var router = new VueRouter({
  routes: 
    [
      { path: "/", component: HomePage },
      { path: "/about", component: AboutPage },
      { path: "/portfolio", component: PortfolioPage },
      { path: "/blog", component: BlogPage },
      { path: "/contact", component: ContactPage },
    ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});


