import DS from 'ember-data';

export default DS.Model.extend ({
  title: DS.attr('string'),
  heroHand1: DS.attr('string'),
  heroHand2: DS.attr('string'),
  vilainRange: DS.attr('string'),
  vilainRange_percent: DS.attr('string'),
  type: DS.attr('string'),
  position: DS.attr('string'),
  flop1: DS.attr('string'),
  flop2: DS.attr('string'),
  flop3: DS.attr('string'),
  checkCall: DS.attr('string'),
  checkFold: DS.attr('string'),
  bet: DS.attr('string'),
  gtoUrl: DS.attr('string'),
  today: DS.attr('string', {
    defaultValue() {
        return new Date();
    }
})
})
