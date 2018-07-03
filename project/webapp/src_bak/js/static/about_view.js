import { View } from "backbone";

const AboutView = View.extend({
  el: "#about",
  aboutTemplate: _.template($("#about-template").html()),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.empty().append(this.aboutTemplate());
    this.setupStaticNav();
  },

  setupStaticNav: function() {
    $(".button-collapse").sideNav();
    $(".collapsible").collapsible();
    $(".sideNav").css("display", "inherit");
  }
});

export default AboutView;
