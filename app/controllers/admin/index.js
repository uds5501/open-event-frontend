import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  
  sessionsData : computed('sessions', function() {
    let sessModel = this.get('sessions');
    return {
      labels  : ["Accepted", "Rejected", "Draft"],
      datasets: [{
        label : 'Number of Sessions',
        data  : [sessModel.accepted, sessModel.rejected, sessModel.pending],
        backgroundColor: [
            'rgba(1, 156, 2, 0.8)',
            'rgba(255, 0, 0, 0.8)',
            'rgba(255, 206, 86, 0.8)'
          ],
        hoverBackgroundColor: [
          'rgba(0, 100, 0, 1)',
          'rgba(128, 0, 0, 1)',
          'rgba(204, 204, 0, 1)'
          ],
        borderWidth: 2
      }]
    }
  }),
  pieOptions : {
    legend : {
      display : false
    }
  },
  eventsData : computed('events', function() {
    let eventsModel = this.get('events');
    return {
      labels  : ["Live", "Past", "Draft"],
      datasets: [{
        label : '# of Events',
        data  : [eventsModel.published, eventsModel.past, eventsModel.draft],
        backgroundColor: [
            'rgba(1, 156, 2, 0.8)',
            'rgba(255, 0, 0, 0.8)',
            'rgba(255, 206, 86, 0.8)',
          ],
          hoverBackgroundColor: [
            'rgba(0, 100, 0, 1)',
            'rgba(128, 0, 0, 1)',
            'rgba(204, 204, 0, 1)',
            ],
        borderWidth: 2
      }]
    }
  }),
  usersSystemData : computed('users', function() {
    let usersModel = this.get('users');
    return {
      labels  : ["Super Admin", "Admin", "Verified", "Unverified"],
      datasets: [{
        label : '# of Users',
        data  : [usersModel.superAdmin, usersModel.Admin, usersModel.verified, usersModel.unverified],
        backgroundColor: [
            'rgba(1, 156, 2, 0.8)',
            'rgba(255, 0, 0, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(39, 64, 104, 0.8)'
          ],
          hoverBackgroundColor: [
            'rgba(0, 100, 0, 1)',
            'rgba(128, 0, 0, 1)',
            'rgba(204, 204, 0, 1)',
            'rgba(39, 64, 150, 1)'
            ],
        borderWidth: 2
      }]
    }
  }),
  usersEventData : computed('users', function() {
    let usersModel = this.get('users');
    return {
      labels  : ["Organizers", "Co-Organizers", "Track-Organizers", "Attendees"],
      datasets: [{
        label : '# of Users',
        data  : [usersModel.organizer, usersModel.coorganizer, usersModel.trackOrganizer, usersModel.attendee],
        backgroundColor: [
            'rgba(1, 156, 2, 0.8)',
            'rgba(255, 0, 0, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(39, 64, 104, 0.8)'
          ],
          hoverBackgroundColor: [
            'rgba(0, 100, 0, 1)',
            'rgba(128, 0, 0, 1)',
            'rgba(204, 204, 0, 1)',
            'rgba(39, 64, 150, 1)'
            ],
        borderWidth: 2
      }]
    }
  }),
  

});
