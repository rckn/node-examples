const request = require("request");
const Guid = require("guid");
const EventEmitter = require("events");

const events = new EventEmitter();

const fakeDb = {
  persons: [],
  journals: []
};

const guid = Guid.create();

const getPerson = (cpr, corId, cb) => {
  request.get("http://localhost:3000/api/book/" + cpr, (err, data) => {
    if (err) return console.log("Error happned: " + err);
    const person = JSON.parse(data.body);
    person.corId = guid.value;
    fakeDb.persons.push(person);
    if (cb) cb();
  });
  return { status: "send" };
};

const getJournalInformation = (journalId, corId, cb) => {
  request.get("http://localhost:3000/api/book/" + journalId, (err, data) => {
    if (err) return console.log("Error happned: " + err);
    const journal = JSON.parse(data.body);
    journal.corId = guid.value;
    fakeDb.journals.push(journal);
    if (cb) cb();
  });
  return { status: "send" };
};

const pushNotification = message => {
  //placeholder for at push notification service
  // if time permits, you can push to a msgmq or rabbitmq
};

events.addListener("new-illness", corId => {
  const person = fakeDb.persons.find(p => p.corId === cordId);
  pushNotification(
    "Your relative " +
      person.fullname +
      " has a new illness, please contact your doctor"
  );
});

events.addListener("findJournal", corId => {
  const person = fakeDb.persons.find(p => p.corId === cordId);
  getJournalInformation(person.journalId);
});

getPerson(1023456789, guid, () => events.emit(findJournal, guid));

// Light-bulb example:
// Look-up person based on SSN (danish: CPR) in the social security services cpr-service
// Find journal information based on journalId from CPR-service in medical-services
// If he his under the age of 18 and has a new illness look up nearest relative in cpr-service
// Notify nearest relative using notification-service

// Fire and Forget
// async Task SomeService() { ... }
// or
// async void SomeService() { ... }

// Async but not fire and forget
// If we do any external service calls in this method. It would effectively be the same as
// a synchronous call from a fault isolative perspective
// async Task<T> SomeService<T>() { ... return obj as T; }
