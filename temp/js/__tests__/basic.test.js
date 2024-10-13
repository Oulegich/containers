"use strict";

var _Character = require("../Character");
var _Team = require("../Team");
describe('Check team', function () {
  var personal = new _Team.Team();
  var lanaya = new _Character.Character('Lanaya');
  var lanaya2 = new _Character.Character('FlexT4');
  var lanaya3 = new _Character.Character('FlexT4');
  var lanaya4 = new _Character.Character('MissLansha');
  personal.toArray();
  test('team checker case', function () {
    personal.add(lanaya);
    personal.add(lanaya2);
    personal.add(lanaya4);
    expect(personal.toArray()).toEqual([{
      name: 'Lanaya'
    }, {
      name: 'FlexT4'
    }, {
      name: 'MissLansha'
    }]);
  });
  test('team checker case2', function () {
    expect(function () {
      personal.add(lanaya);
      personal.add(lanaya2);
      personal.add(lanaya2);
      personal.add(lanaya4);
    }).toThrow('Ошибка');
  });
  test('team checker case3', function () {
    personal.addAll(lanaya, lanaya2, lanaya3, lanaya4);
    expect(personal.toArray()).toEqual([{
      name: 'Lanaya'
    }, {
      name: 'FlexT4'
    }, {
      name: 'MissLansha'
    }]);
  });
});