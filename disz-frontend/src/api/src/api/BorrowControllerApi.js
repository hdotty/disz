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


import ApiClient from "../ApiClient";
import Borrow from '../model/Borrow';

/**
* BorrowController service.
* @module api/BorrowControllerApi
* @version 1.0
*/
export default class BorrowControllerApi {

    /**
    * Constructs a new BorrowControllerApi. 
    * @alias module:api/BorrowControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addBorrowUsingPOST operation.
     * @callback module:api/BorrowControllerApi~addBorrowUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addBorrow
     * @param {module:model/Borrow} borrow borrow
     * @param {module:api/BorrowControllerApi~addBorrowUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addBorrowUsingPOST(borrow, callback) {
      let postBody = borrow;
      // verify the required parameter 'borrow' is set
      if (borrow === undefined || borrow === null) {
        throw new Error("Missing the required parameter 'borrow' when calling addBorrowUsingPOST");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/borrows', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findAllUsingGET operation.
     * @callback module:api/BorrowControllerApi~findAllUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Borrow>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findAll
     * @param {module:api/BorrowControllerApi~findAllUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Borrow>}
     */
    findAllUsingGET(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [Borrow];
      return this.apiClient.callApi(
        '/borrows', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findBorrowByBookIdUsingGET operation.
     * @callback module:api/BorrowControllerApi~findBorrowByBookIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Borrow>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findBorrowByBookId
     * @param {Number} bookId bookId
     * @param {module:api/BorrowControllerApi~findBorrowByBookIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Borrow>}
     */
    findBorrowByBookIdUsingGET(bookId, callback) {
      let postBody = null;
      // verify the required parameter 'bookId' is set
      if (bookId === undefined || bookId === null) {
        throw new Error("Missing the required parameter 'bookId' when calling findBorrowByBookIdUsingGET");
      }

      let pathParams = {
        'bookId': bookId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [Borrow];
      return this.apiClient.callApi(
        '/borrows/books/{bookId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findBorrowByPersonIdUsingGET operation.
     * @callback module:api/BorrowControllerApi~findBorrowByPersonIdUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Borrow>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findBorrowByPersonId
     * @param {Number} personId personId
     * @param {module:api/BorrowControllerApi~findBorrowByPersonIdUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Borrow>}
     */
    findBorrowByPersonIdUsingGET(personId, callback) {
      let postBody = null;
      // verify the required parameter 'personId' is set
      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling findBorrowByPersonIdUsingGET");
      }

      let pathParams = {
        'personId': personId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [Borrow];
      return this.apiClient.callApi(
        '/borrows/person/{personId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findBorrowByStartTimeAndEndTimeIsNotNullUsingGET operation.
     * @callback module:api/BorrowControllerApi~findBorrowByStartTimeAndEndTimeIsNotNullUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Borrow>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findBorrowByStartTimeAndEndTimeIsNotNull
     * @param {module:api/BorrowControllerApi~findBorrowByStartTimeAndEndTimeIsNotNullUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Borrow>}
     */
    findBorrowByStartTimeAndEndTimeIsNotNullUsingGET(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [Borrow];
      return this.apiClient.callApi(
        '/borrows/returned', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET operation.
     * @callback module:api/BorrowControllerApi~findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Borrow>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findBorrowByStartTimeIsNotNullAndEndTimeIsNull
     * @param {module:api/BorrowControllerApi~findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Borrow>}
     */
    findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [Borrow];
      return this.apiClient.callApi(
        '/borrows/borrowed', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the findByAuthorOrTitleContainingUsingGET operation.
     * @callback module:api/BorrowControllerApi~findByAuthorOrTitleContainingUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Borrow>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * findByAuthorOrTitleContaining
     * @param {String} search search
     * @param {module:api/BorrowControllerApi~findByAuthorOrTitleContainingUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Borrow>}
     */
    findByAuthorOrTitleContainingUsingGET(search, callback) {
      let postBody = null;
      // verify the required parameter 'search' is set
      if (search === undefined || search === null) {
        throw new Error("Missing the required parameter 'search' when calling findByAuthorOrTitleContainingUsingGET");
      }

      let pathParams = {
      };
      let queryParams = {
        'search': search
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [Borrow];
      return this.apiClient.callApi(
        '/borrows/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the nowBorrowedBooksUsingGET operation.
     * @callback module:api/BorrowControllerApi~nowBorrowedBooksUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Number} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * nowBorrowedBooks
     * @param {module:api/BorrowControllerApi~nowBorrowedBooksUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Number}
     */
    nowBorrowedBooksUsingGET(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/borrows/borrowed/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the returnBookUsingPUT operation.
     * @callback module:api/BorrowControllerApi~returnBookUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returnBook
     * @param {Number} id id
     * @param {module:model/Borrow} borrow borrow
     * @param {module:api/BorrowControllerApi~returnBookUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    returnBookUsingPUT(id, borrow, callback) {
      let postBody = borrow;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling returnBookUsingPUT");
      }
      // verify the required parameter 'borrow' is set
      if (borrow === undefined || borrow === null) {
        throw new Error("Missing the required parameter 'borrow' when calling returnBookUsingPUT");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/borrows/{id}/return', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the returnesBorrowesUsingGET operation.
     * @callback module:api/BorrowControllerApi~returnesBorrowesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Number} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returnesBorrowes
     * @param {module:api/BorrowControllerApi~returnesBorrowesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Number}
     */
    returnesBorrowesUsingGET(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/borrows/returned/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}