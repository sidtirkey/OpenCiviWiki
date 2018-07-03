import { View } from "backbone";

const LandingView = View.extend({
  el: "#landing",
  landingTemplate: _.template($("#landing-template").html()),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.empty().append(this.landingTemplate());

    this.setupStaticNav();
  },

  setupStaticNav: function() {
    $(".button-collapse").sideNav();
    $(".collapsible").collapsible();
    $(".sideNav").css("display", "inherit");
  }
});

export default LandingView;
