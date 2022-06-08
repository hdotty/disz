/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiDocumentation);
  }
}(this, function(expect, ApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiDocumentation.PersonDtoRes();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PersonDtoRes', function() {
    it('should create an instance of PersonDtoRes', function() {
      // uncomment below and update the code to test PersonDtoRes
      //var instance = new ApiDocumentation.PersonDtoRes();
      //expect(instance).to.be.a(ApiDocumentation.PersonDtoRes);
    });

    it('should have the property admin (base name: "admin")', function() {
      // uncomment below and update the code to test the property admin
      //var instance = new ApiDocumentation.PersonDtoRes();
      //expect(instance).to.be();
    });

    it('should have the property bookDtos (base name: "bookDtos")', function() {
      // uncomment below and update the code to test the property bookDtos
      //var instance = new ApiDocumentation.PersonDtoRes();
      //expect(instance).to.be();
    });

    it('should have the property borrows (base name: "borrows")', function() {
      // uncomment below and update the code to test the property borrows
      //var instance = new ApiDocumentation.PersonDtoRes();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new ApiDocumentation.PersonDtoRes();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new ApiDocumentation.PersonDtoRes();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new ApiDocumentation.PersonDtoRes();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new ApiDocumentation.PersonDtoRes();
      //expect(instance).to.be();
    });

    it('should have the property personID (base name: "personID")', function() {
      // uncomment below and update the code to test the property personID
      //var instance = new ApiDocumentation.PersonDtoRes();
      //expect(instance).to.be();
    });

    it('should have the property personId (base name: "personId")', function() {
      // uncomment below and update the code to test the property personId
      //var instance = new ApiDocumentation.PersonDtoRes();
      //expect(instance).to.be();
    });

  });

}));
