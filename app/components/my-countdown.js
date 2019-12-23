import countdown from 'countdownjs';
import CountdownString from 'ember-countdown/components/countdown-string';

export default CountdownString.extend({
  didReceiveAttrs() {
    this._super(...arguments);
    let today = new Date();
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    let dd = String(tomorrow.getDate()).padStart(2, '0');
    let mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = tomorrow.getFullYear();
    tomorrow = mm + '/' + dd + '/' + yyyy + " 00:00:00 GMT";
    this.set("startDate", tomorrow)
  }
});
