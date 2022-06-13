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

import ApiClient from '../ApiClient';
import BorrowDto from './BorrowDto';

/**
 * The PersonDto model module.
 * @module model/PersonDto
 * @version 1.0
 */
class PersonDto {
    /**
     * Constructs a new <code>PersonDto</code>.
     * @alias module:model/PersonDto
     * @param email {String} 
     * @param firstName {String} 
     * @param lastName {String} 
     * @param password {String} 
     */
    constructor(email, firstName, lastName, password) { 
        
        PersonDto.initialize(this, email, firstName, lastName, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, firstName, lastName, password) { 
        obj['email'] = email;
        obj['firstName'] = firstName;
        obj['lastName'] = lastName;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>PersonDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PersonDto} obj Optional instance to populate.
     * @return {module:model/PersonDto} The populated <code>PersonDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonDto();

            if (data.hasOwnProperty('admin')) {
                obj['admin'] = ApiClient.convertToType(data['admin'], 'Boolean');
            }
            if (data.hasOwnProperty('borrows')) {
                obj['borrows'] = ApiClient.convertToType(data['borrows'], [BorrowDto]);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('personId')) {
                obj['personId'] = ApiClient.convertToType(data['personId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} admin
 */
PersonDto.prototype['admin'] = undefined;

/**
 * @member {Array.<module:model/BorrowDto>} borrows
 */
PersonDto.prototype['borrows'] = undefined;

/**
 * @member {String} email
 */
PersonDto.prototype['email'] = undefined;

/**
 * @member {String} firstName
 */
PersonDto.prototype['firstName'] = undefined;

/**
 * @member {String} lastName
 */
PersonDto.prototype['lastName'] = undefined;

/**
 * @member {String} password
 */
PersonDto.prototype['password'] = undefined;

/**
 * @member {Number} personId
 */
PersonDto.prototype['personId'] = undefined;






export default PersonDto;
