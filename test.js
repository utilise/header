var expect = require('chai').expect
  , header = require('./')

describe('header', function() {
  it('should get a header value', function() {
    var o = { body: [], headers: { 'cache': 'no-store' } }
    expect(header('cache')(o)).to.equal('no-store')
    expect(header('cache', 'no-store')(o)).to.be.ok
    expect(header('cache', '')(o)).to.not.be.ok
    expect(header('content-type')(o)).to.not.be.ok
    expect(header('content-type')({})).to.not.be.ok
    expect(header('content-type')({ headers: {} })).to.not.be.ok
  })
})