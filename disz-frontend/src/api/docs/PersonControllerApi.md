# ApiDocumentation.PersonControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPersonUsingPOST**](PersonControllerApi.md#addPersonUsingPOST) | **POST** /person | addPerson
[**deletePersonUsingDELETE**](PersonControllerApi.md#deletePersonUsingDELETE) | **DELETE** /person/{id} | deletePerson
[**findPersonUsingGET**](PersonControllerApi.md#findPersonUsingGET) | **GET** /person/search | findPerson
[**getPersonUsingGET**](PersonControllerApi.md#getPersonUsingGET) | **GET** /person/{id} | getPerson
[**getPersonsUsingGET**](PersonControllerApi.md#getPersonsUsingGET) | **GET** /person | getPersons
[**personsBooksUsingGET**](PersonControllerApi.md#personsBooksUsingGET) | **GET** /persons | personsBooks
[**pswChangeUsingPOST**](PersonControllerApi.md#pswChangeUsingPOST) | **POST** /person/{password} | pswChange
[**updatePersonUsingPUT**](PersonControllerApi.md#updatePersonUsingPUT) | **PUT** /person | updatePerson



## addPersonUsingPOST

> addPersonUsingPOST(personDto)

addPerson

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let personDto = new ApiDocumentation.PersonDto(); // PersonDto | personDto
apiInstance.addPersonUsingPOST(personDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personDto** | [**PersonDto**](PersonDto.md)| personDto | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deletePersonUsingDELETE

> deletePersonUsingDELETE(id)

deletePerson

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let id = 789; // Number | id
apiInstance.deletePersonUsingDELETE(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findPersonUsingGET

> [PersonDto] findPersonUsingGET(query)

findPerson

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let query = "query_example"; // String | query
apiInstance.findPersonUsingGET(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| query | 

### Return type

[**[PersonDto]**](PersonDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getPersonUsingGET

> PersonDto getPersonUsingGET(id)

getPerson

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let id = 789; // Number | id
apiInstance.getPersonUsingGET(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**PersonDto**](PersonDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getPersonsUsingGET

> [PersonDto] getPersonsUsingGET()

getPersons

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
apiInstance.getPersonsUsingGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[PersonDto]**](PersonDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## personsBooksUsingGET

> [BorrowDto] personsBooksUsingGET(personDto)

personsBooks

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let personDto = new ApiDocumentation.PersonDto(); // PersonDto | personDto
apiInstance.personsBooksUsingGET(personDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personDto** | [**PersonDto**](PersonDto.md)| personDto | 

### Return type

[**[BorrowDto]**](BorrowDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## pswChangeUsingPOST

> pswChangeUsingPOST(password, personDto)

pswChange

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let password = "password_example"; // String | password
let personDto = new ApiDocumentation.PersonDto(); // PersonDto | personDto
apiInstance.pswChangeUsingPOST(password, personDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | **String**| password | 
 **personDto** | [**PersonDto**](PersonDto.md)| personDto | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updatePersonUsingPUT

> updatePersonUsingPUT(personDto)

updatePerson

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let personDto = new ApiDocumentation.PersonDto(); // PersonDto | personDto
apiInstance.updatePersonUsingPUT(personDto, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personDto** | [**PersonDto**](PersonDto.md)| personDto | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined
