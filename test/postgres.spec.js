var createFilter = require('../lib').createFilter
var expect = require('chai').expect

describe("SQL WHERE useParameters (POSTGRES)", () => {
   var f;
  beforeEach(function() {
    var match;
     if (match = this.currentTest.title.match(/expression[^\:]*\:  ?(.*)/)) {
       f = createFilter(match[1], {
           useParameters: true,
           type: 3
       });
     }
  });

  //all numbers are referencing this:
  //http://docs.oasis-open.org/odata/odata/v4.0/errata02/os/complete/part2-url-conventions/odata-v4.0-errata02-os-part2-url-conventions-complete.html#_Toc406398116


  it("expression 5.1.1.4.7: tolower(A/B) eq 'abc'", () => {
      expect(f.where).to.equal(`LOWER("A"."B") = ?`)
  })

  it("expression 5.1.1.4.8: toupper(A) eq 'ABC'", () => {
      expect(f.where).to.equal(`UPPER("A") = ?`)
  })

})
