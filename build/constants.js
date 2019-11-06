"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOOP = exports.EVENTS = exports.INTERFACES = void 0;

require("source-map-support/register");

const INTERFACES = {
  bdd: ['it', 'before', 'beforeEach', 'after', 'afterEach'],
  tdd: ['test', 'suiteSetup', 'setup', 'suiteTeardown', 'teardown'],
  qunit: ['test', 'before', 'beforeEach', 'after', 'afterEach']
};
exports.INTERFACES = INTERFACES;
const EVENTS = {
  'suite': 'suite:start',
  'suite end': 'suite:end',
  'test': 'test:start',
  'test end': 'test:end',
  'hook': 'hook:start',
  'hook end': 'hook:end',
  'pass': 'test:pass',
  'fail': 'test:fail',
  'pending': 'test:pending'
};
exports.EVENTS = EVENTS;

const NOOP = function () {};

exports.NOOP = NOOP;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiSU5URVJGQUNFUyIsImJkZCIsInRkZCIsInF1bml0IiwiRVZFTlRTIiwiTk9PUCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sTUFBTUEsVUFBVSxHQUFHO0FBQ3RCQyxFQUFBQSxHQUFHLEVBQUUsQ0FBQyxJQUFELEVBQU8sUUFBUCxFQUFpQixZQUFqQixFQUErQixPQUEvQixFQUF3QyxXQUF4QyxDQURpQjtBQUV0QkMsRUFBQUEsR0FBRyxFQUFFLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsT0FBdkIsRUFBZ0MsZUFBaEMsRUFBaUQsVUFBakQsQ0FGaUI7QUFHdEJDLEVBQUFBLEtBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxRQUFULEVBQW1CLFlBQW5CLEVBQWlDLE9BQWpDLEVBQTBDLFdBQTFDO0FBSGUsQ0FBbkI7O0FBU0EsTUFBTUMsTUFBTSxHQUFHO0FBQ2xCLFdBQVMsYUFEUztBQUVsQixlQUFhLFdBRks7QUFHbEIsVUFBUSxZQUhVO0FBSWxCLGNBQVksVUFKTTtBQUtsQixVQUFRLFlBTFU7QUFNbEIsY0FBWSxVQU5NO0FBT2xCLFVBQVEsV0FQVTtBQVFsQixVQUFRLFdBUlU7QUFTbEIsYUFBVztBQVRPLENBQWY7OztBQVlBLE1BQU1DLElBQUksR0FBOEIsWUFBWSxDQUFFLENBQXREIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IElOVEVSRkFDRVMgPSB7XG4gICAgYmRkOiBbJ2l0JywgJ2JlZm9yZScsICdiZWZvcmVFYWNoJywgJ2FmdGVyJywgJ2FmdGVyRWFjaCddLFxuICAgIHRkZDogWyd0ZXN0JywgJ3N1aXRlU2V0dXAnLCAnc2V0dXAnLCAnc3VpdGVUZWFyZG93bicsICd0ZWFyZG93biddLFxuICAgIHF1bml0OiBbJ3Rlc3QnLCAnYmVmb3JlJywgJ2JlZm9yZUVhY2gnLCAnYWZ0ZXInLCAnYWZ0ZXJFYWNoJ11cbn1cblxuLyoqXG4gKiB0byBtYXAgTW9jaGEgZXZlbnRzIHRvIFdESU8gZXZlbnRzXG4gKi9cbmV4cG9ydCBjb25zdCBFVkVOVFMgPSB7XG4gICAgJ3N1aXRlJzogJ3N1aXRlOnN0YXJ0JyxcbiAgICAnc3VpdGUgZW5kJzogJ3N1aXRlOmVuZCcsXG4gICAgJ3Rlc3QnOiAndGVzdDpzdGFydCcsXG4gICAgJ3Rlc3QgZW5kJzogJ3Rlc3Q6ZW5kJyxcbiAgICAnaG9vayc6ICdob29rOnN0YXJ0JyxcbiAgICAnaG9vayBlbmQnOiAnaG9vazplbmQnLFxuICAgICdwYXNzJzogJ3Rlc3Q6cGFzcycsXG4gICAgJ2ZhaWwnOiAndGVzdDpmYWlsJyxcbiAgICAncGVuZGluZyc6ICd0ZXN0OnBlbmRpbmcnXG59XG5cbmV4cG9ydCBjb25zdCBOT09QID0gLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi8gZnVuY3Rpb24gKCkge31cbiJdfQ==