(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;

/* Package-scope variables */
var ToyKit, MeteorToys;

(function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/meteortoys_method/ToyKit/main.js                                   //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
var _0x3e7b=["\x4D\x65\x74\x68\x6F\x64","\x31\x2E\x30\x2E\x30","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73\x5F\x4D\x65\x74\x68\x6F\x64","\x69\x73\x43\x6C\x69\x65\x6E\x74","\x6D\x65\x74\x65\x6F\x72\x74\x6F\x79\x73\x3A\x74\x6F\x79\x6B\x69\x74","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79\x73","\x46\x6F\x72\x20\x74\x68\x65\x20","\x6E\x61\x6D\x65","\x20\x74\x6F\x79\x20\x74\x6F\x20\x77\x6F\x72\x6B\x2C\x20\x79\x6F\x75\x20\x6D\x75\x73\x74\x20\x69\x6E\x73\x74\x61\x6C\x6C\x20\x4D\x6F\x6E\x67\x6F\x6C\x20\x6F\x72","\x6C\x6F\x67","\x74\x68\x65\x20\x4D\x65\x74\x65\x6F\x72\x20\x54\x6F\x79\x73\x20\x70\x61\x63\x6B\x61\x67\x65\x2E\x20\x47\x72\x61\x62\x20\x74\x68\x65\x20\x66\x72\x65\x65\x20\x65\x64\x69\x74\x69\x6F\x6E\x20\x61\x74\x20\x68\x74\x74\x70\x3A\x2F\x2F\x4D\x65\x74\x65\x6F\x72\x2E\x54\x6F\x79\x73\x2F","\x69\x73\x53\x65\x72\x76\x65\x72","\x63\x61\x6C\x6C","\x6D\x65\x74\x68\x6F\x64\x73","\x6B\x65\x79\x73","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72","\x73\x70\x6C\x69\x63\x65","\x4D\x6F\x6E\x67\x6F\x6C","\x4D\x65\x74\x65\x6F\x72\x54\x6F\x79","\x4A\x65\x74\x53\x65\x74\x74\x65\x72","\x76\x65\x6C\x6F\x63\x69\x74\x79","\x6C\x6F\x67\x6F\x75\x74\x4F\x74\x68\x65\x72\x43\x6C\x69\x65\x6E\x74\x73","\x72\x65\x6D\x6F\x76\x65\x4F\x74\x68\x65\x72\x54\x6F\x6B\x65\x6E\x73","\x63\x6F\x6E\x66\x69\x67\x75\x72\x65\x4C\x6F\x67\x69\x6E\x53\x65\x72\x76\x69\x63\x65","\x2F","\x6C\x6F\x67\x69\x6E","\x6C\x6F\x67\x6F\x75\x74","\x67\x65\x74\x4E\x65\x77\x54\x6F\x6B\x65\x6E","\x63\x68\x61\x6E\x67\x65\x50\x61\x73\x73\x77\x6F\x72\x64","\x66\x6F\x72\x67\x6F\x74\x50\x61\x73\x73\x77\x6F\x72\x64","\x76\x65\x72\x69\x66\x79\x45\x6D\x61\x69\x6C","\x63\x72\x65\x61\x74\x65\x55\x73\x65\x72","\x72\x65\x73\x65\x74\x50\x61\x73\x73\x77\x6F\x72\x64","\x75\x70\x64\x61\x74\x65","\x6D\x65\x74\x68\x6F\x64\x5F\x68\x61\x6E\x64\x6C\x65\x72\x73","\x73\x65\x72\x76\x65\x72","\x6D\x61\x74\x63\x68","\x28","\x69\x6E\x64\x65\x78\x4F\x66","\x29","\x73\x6C\x69\x63\x65"];ToyKit={name:_0x3e7b[0],version:_0x3e7b[1],template:_0x3e7b[2]};if(Meteor[_0x3e7b[3]]){if(Package[_0x3e7b[4]]){MeteorToys=Package[_0x3e7b[4]][_0x3e7b[5]]}else {MeteorToys={};console[_0x3e7b[9]](_0x3e7b[6]+ToyKit[_0x3e7b[7]]+_0x3e7b[8]);console[_0x3e7b[9]](_0x3e7b[10]);}};if(Meteor[_0x3e7b[11]]){Meteor[_0x3e7b[13]]({MeteorToy_4:function(_0x9c62x1){check(argument,Match.Any);var _0x9c62x2=false;Meteor[_0x3e7b[12]](_0x3e7b[5],function(_0x9c62x3,_0x9c62x4){_0x9c62x2=_0x9c62x4});if(!_0x9c62x2){return false};var _0x9c62x5=Object[_0x3e7b[14]](Meteor[_0x3e7b[13]]);var _0x9c62x6=function(_0x9c62x7,_0x9c62x8){var _0x9c62x9=_0x9c62x8[_0x3e7b[15]];for(var _0x9c62xa=0;_0x9c62xa<_0x9c62x7[_0x3e7b[15]];_0x9c62xa++){if(_0x9c62x7[_0x9c62xa][_0x3e7b[16]](0,_0x9c62x9)===_0x9c62x8){_0x9c62x7[_0x3e7b[17]](_0x9c62xa,1);_0x9c62xa--;}};return _0x9c62x7;};_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[18]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[19]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[20]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[21]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[22]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[23]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[24]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[25]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[26]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[27]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[28]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[29]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[30]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[31]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[32]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[33]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[34]);return _0x9c62x5;},MeteorToys_x:function(_0x9c62xb){check(_0x9c62xb,Match.Any);var _0x9c62x2=false;Meteor[_0x3e7b[12]](_0x3e7b[5],function(_0x9c62x3,_0x9c62x4){_0x9c62x2=_0x9c62x4});if(!_0x9c62x2){return false};var _0x9c62x5=Object[_0x3e7b[14]](Meteor[_0x3e7b[36]][_0x3e7b[35]]);var _0x9c62x6=function(_0x9c62x7,_0x9c62x8){var _0x9c62x9=_0x9c62x8[_0x3e7b[15]];for(var _0x9c62xa=0;_0x9c62xa<_0x9c62x7[_0x3e7b[15]];_0x9c62xa++){if(_0x9c62x7[_0x9c62xa][_0x3e7b[16]](0,_0x9c62x9)===_0x9c62x8){_0x9c62x7[_0x3e7b[17]](_0x9c62xa,1);_0x9c62xa--;}};return _0x9c62x7;};_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[18]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[19]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[20]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[21]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[22]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[23]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[24]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[25]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[26]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[27]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[28]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[29]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[30]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[31]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[32]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[33]);_0x9c62x5=_0x9c62x6(_0x9c62x5,_0x3e7b[34]);return _0x9c62x5;},MeteorToy_y:function(_0x9c62xc){check(_0x9c62xc,Match.Any);var _0x9c62x2=false;Meteor[_0x3e7b[12]](_0x3e7b[5],function(_0x9c62x3,_0x9c62x4){_0x9c62x2=_0x9c62x4});if(!_0x9c62x2){return false};function _0x9c62xd(_0x9c62xe){var _0x9c62xf=_0x9c62xe.toString();return _0x9c62xf[_0x3e7b[41]](_0x9c62xf[_0x3e7b[39]](_0x3e7b[38])+1,_0x9c62xf[_0x3e7b[39]](_0x3e7b[40]))[_0x3e7b[37]](/([^\s,]+)/g);}var _0x9c62x10=String(Meteor[_0x3e7b[36]][_0x3e7b[35]][_0x9c62xc]),_0x9c62x11=_0x9c62xd(_0x9c62x10);return _0x9c62x11;}})};

/////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/meteortoys_method/server/main.js                                   //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
// Be nice :)
/////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////
//                                                                             //
// packages/meteortoys_method/lib/main.js                                      //
//                                                                             //
/////////////////////////////////////////////////////////////////////////////////
                                                                               //
// If your toy requires a collection,
// please use the suggested name pattern
// so your collections do not show up in
// Meteor Toys or Kadira Debug, and to
// avoid interference with other Meteor Toys
// 
// CollectionName = new Mongo.Collection("MeteorToys/authorName/packageName");
/////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['meteortoys:method'] = {}, {
  ToyKit: ToyKit
});

})();

//# sourceMappingURL=meteortoys_method.js.map
