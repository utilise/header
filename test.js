var expect = require('chai').expect
  , header = require('./')
  , o = { body: [], headers: { 'cache': 'no-store', mysql: { fields: ['foo'] } } }

describe('header', function() {
  
  it('should return gracefully if no resource', function() {
    expect(header('cache')()).to.not.be.ok
  })

  it('should return gracefully if no headers', function() {
    expect(header('content-type')({})).to.not.be.ok
  })

  it('should return gracefully if no header', function() {
    expect(header('content-type')(o)).to.not.be.ok
  })

  it('should return false if key==value check fails', function() {
    expect(header('cache', '')(o)).to.be.false
  })

  it('should return true if key==value check passes', function() {
    expect(header('cache', 'no-store')(o)).to.be.true
  })

  it('should get a header value', function() {
    expect(header('cache')(o)).to.equal('no-store')
  })

  it('should get a header value deeply', function() {
    expect(header('mysql.fields')(o)).to.eql(['foo'])
  })

  it('should check a header value deeply', function() {
    expect(header('mysql.fields.0', 'foo')(o)).to.be.ok
  })

})