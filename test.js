var md5 = require('./index.js')
var assert = require('assert')

describe('md5', function() {
    it('should allow the hashing of the string `undefined`', function() {
        assert.equal('5e543256c480ac577d30f76f9120eb74', md5('undefined'))
    })

    it('should return the expected MD5 hash for "hello"', function() {
        assert.equal('5d41402abc4b2a76b9719d911017c592', md5('hello'))
    })

    it('should return the expected MD5 hash for "message"', function() {
        assert.equal('78e731027d8fd50ed642340b7c9a63b3', md5('message'))
    })

    it('should not return the same hash for random numbers twice', function() {
        var msg1 = String(
            Math.floor(Math.random() * 100000 + 1) + new Date().getTime()
        )
        var msg2 = String(
            Math.floor(Math.random() * 100000 + 1) + new Date().getTime()
        )

        if (msg1 !== msg2) {
            assert.notEqual(md5(msg1), md5(msg2))
        } else {
            assert.equal(md5(msg1), md5(msg1))
        }
    })
})
