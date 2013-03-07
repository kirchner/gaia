'use strict';

function MockThreadMessages() {

  var messagesMockup = [
    {
      sender: null,
      receiver: '197746797',
      body: 'Error message:)',
      delivery: 'sending',
      error: true,
      id: 47,
      timestamp: getMockupedDate(0)
    },
    {
      sender: null,
      receiver: '197746797',
      body: 'Nothing :)',
      delivery: 'sent',
      id: 46,
      timestamp: getMockupedDate(0)
    },
    {
      sender: '197746797',
      body: 'Recibido!',
      delivery: 'received',
      id: 40,
      timestamp: getMockupedDate(2)
    },
    {
      sender: null,
      receiver: '197746797',
      body: 'Nothing :)',
      delivery: 'error',
      id: 460,
      timestamp: getMockupedDate(6)
    },
    {
      sender: null,
      receiver: '197746797',
      body: 'Nothing at all :)',
      delivery: 'error',
      id: 461,
      timestamp: getMockupedDate(6)
    }];

  messagesMockup.sort(function(a, b) {
    return b.timestamp - a.timestamp;
  });

  return messagesMockup;
}
