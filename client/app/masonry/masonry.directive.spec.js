'use strict';

describe('Directive: masonry', function () {

  // load the directive's module
  beforeEach(module('fsm160App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<masonry></masonry>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the masonry directive');
  }));
});