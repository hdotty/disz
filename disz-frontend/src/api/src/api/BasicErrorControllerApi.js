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

/**
* BasicErrorController service.
* @module api/BasicErrorControllerApi
* @version 1.0
*/
export default class BasicErrorControllerApi {

    /**
    * Constructs a new BasicErrorControllerApi. 
    * @alias module:api/BasicErrorControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the errorUsingDELETE operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    errorUsingDELETE(callback) {
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
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/error', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the errorUsingGET operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    errorUsingGET(callback) {
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
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/error', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the errorUsingHEAD operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingHEADCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingHEADCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    errorUsingHEAD(callback) {
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
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/error', 'HEAD',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the errorUsingOPTIONS operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingOPTIONSCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingOPTIONSCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    errorUsingOPTIONS(callback) {
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
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/error', 'OPTIONS',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the errorUsingPATCH operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingPATCHCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingPATCHCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    errorUsingPATCH(callback) {
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
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/error', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the errorUsingPOST operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    errorUsingPOST(callback) {
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
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/error', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the errorUsingPUT operation.
     * @callback module:api/BasicErrorControllerApi~errorUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * error
     * @param {module:api/BasicErrorControllerApi~errorUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    errorUsingPUT(callback) {
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
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/error', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
