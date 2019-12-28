import Controller from '@ember/controller';
import Ember from 'ember';

export default Ember.Controller.extend({
  isShowingModalu: false,
  isShowingModal: false,
  actions: {
    toggleModal: function() {
      this.toggleProperty('isShowingModal');
    },
    toggleModalu: function() {
      this.toggleProperty('isShowingModalu');
    }
  }
});
