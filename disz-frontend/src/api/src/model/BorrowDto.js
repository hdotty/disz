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
import Book from './Book';
import Person from './Person';

/**
 * The BorrowDto model module.
 * @module model/BorrowDto
 * @version 1.0
 */
class BorrowDto {
    /**
     * Constructs a new <code>BorrowDto</code>.
     * @alias module:model/BorrowDto
     */
    constructor() { 
        
        BorrowDto.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BorrowDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BorrowDto} obj Optional instance to populate.
     * @return {module:model/BorrowDto} The populated <code>BorrowDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BorrowDto();

            if (data.hasOwnProperty('book')) {
                obj['book'] = Book.constructFromObject(data['book']);
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
            }
            if (data.hasOwnProperty('person')) {
                obj['person'] = Person.constructFromObject(data['person']);
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Book} book
 */
BorrowDto.prototype['book'] = undefined;

/**
 * @member {Date} endTime
 */
BorrowDto.prototype['endTime'] = undefined;

/**
 * @member {module:model/Person} person
 */
BorrowDto.prototype['person'] = undefined;

/**
 * @member {Date} startTime
 */
BorrowDto.prototype['startTime'] = undefined;






export default BorrowDto;

