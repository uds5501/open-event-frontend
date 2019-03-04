import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  async model() {
    return {
      events: await this.get('store').  queryRecord('admin-statistics-event', {
        filter: {
          name : 'id',
          op   : 'eq',
          val  : 1
        }
      }),
      users: await this.get('store').queryRecord('admin-statistics-user', {
        filter: {
          name : 'id',
          op   : 'eq',
          val  : 1
        }
      }),
      mails: await this.get('store').queryRecord('admin-statistics-mail', {
        filter: {
          name : 'id',
          op   : 'eq',
          val  : 1
        }
      }),
      sessions: await this.get('store').queryRecord('admin-statistics-session', {
        filter: {
          name : 'id',
          op   : 'eq',
          val  : 1
        }
      })
    };
  },
  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'sessions', model.sessions);
    Ember.set(controller, 'events', model.events);
    Ember.set(controller, 'mails', model.mails);
    Ember.set(controller, 'users', model.users);
  },

});
