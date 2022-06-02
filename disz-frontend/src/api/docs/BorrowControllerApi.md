# ApiDocumentation.BorrowControllerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBorrowUsingPOST**](BorrowControllerApi.md#addBorrowUsingPOST) | **POST** /borrows | addBorrow
[**findAllUsingGET**](BorrowControllerApi.md#findAllUsingGET) | **GET** /borrows | findAll
[**findBorrowByBookIdUsingGET**](BorrowControllerApi.md#findBorrowByBookIdUsingGET) | **GET** /borrows/books/{bookId} | findBorrowByBookId
[**findBorrowByPersonIdUsingGET**](BorrowControllerApi.md#findBorrowByPersonIdUsingGET) | **GET** /borrows/person/{personId} | findBorrowByPersonId
[**findBorrowByStartTimeAndEndTimeIsNotNullUsingGET**](BorrowControllerApi.md#findBorrowByStartTimeAndEndTimeIsNotNullUsingGET) | **GET** /borrows/returned | findBorrowByStartTimeAndEndTimeIsNotNull
[**findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET**](BorrowControllerApi.md#findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET) | **GET** /borrows/borrowed | findBorrowByStartTimeIsNotNullAndEndTimeIsNull
[**findByAuthorOrTitleContainingUsingGET**](BorrowControllerApi.md#findByAuthorOrTitleContainingUsingGET) | **GET** /borrows/search | findByAuthorOrTitleContaining
[**nowBorrowedBooksUsingGET**](BorrowControllerApi.md#nowBorrowedBooksUsingGET) | **GET** /borrows/borrowed/count | nowBorrowedBooks
[**returnBookUsingPUT**](BorrowControllerApi.md#returnBookUsingPUT) | **PUT** /borrows/{id}/return | returnBook
[**returnesBorrowesUsingGET**](BorrowControllerApi.md#returnesBorrowesUsingGET) | **GET** /borrows/returned/count | returnesBorrowes



## addBorrowUsingPOST

> addBorrowUsingPOST(borrow)

addBorrow

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
let borrow = new ApiDocumentation.Borrow(); // Borrow | borrow
apiInstance.addBorrowUsingPOST(borrow, (error, data, response) => {
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
 **borrow** | [**Borrow**](Borrow.md)| borrow | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## findAllUsingGET

> [Borrow] findAllUsingGET()

findAll

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
apiInstance.findAllUsingGET((error, data, response) => {
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

[**[Borrow]**](Borrow.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findBorrowByBookIdUsingGET

> [Borrow] findBorrowByBookIdUsingGET(bookId)

findBorrowByBookId

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
let bookId = 789; // Number | bookId
apiInstance.findBorrowByBookIdUsingGET(bookId, (error, data, response) => {
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
 **bookId** | **Number**| bookId | 

### Return type

[**[Borrow]**](Borrow.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findBorrowByPersonIdUsingGET

> [Borrow] findBorrowByPersonIdUsingGET(personId)

findBorrowByPersonId

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
let personId = 789; // Number | personId
apiInstance.findBorrowByPersonIdUsingGET(personId, (error, data, response) => {
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
 **personId** | **Number**| personId | 

### Return type

[**[Borrow]**](Borrow.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findBorrowByStartTimeAndEndTimeIsNotNullUsingGET

> [Borrow] findBorrowByStartTimeAndEndTimeIsNotNullUsingGET()

findBorrowByStartTimeAndEndTimeIsNotNull

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
apiInstance.findBorrowByStartTimeAndEndTimeIsNotNullUsingGET((error, data, response) => {
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

[**[Borrow]**](Borrow.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET

> [Borrow] findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET()

findBorrowByStartTimeIsNotNullAndEndTimeIsNull

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
apiInstance.findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET((error, data, response) => {
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

[**[Borrow]**](Borrow.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findByAuthorOrTitleContainingUsingGET

> [Borrow] findByAuthorOrTitleContainingUsingGET(search)

findByAuthorOrTitleContaining

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
let search = "search_example"; // String | search
apiInstance.findByAuthorOrTitleContainingUsingGET(search, (error, data, response) => {
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
 **search** | **String**| search | 

### Return type

[**[Borrow]**](Borrow.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## nowBorrowedBooksUsingGET

> Number nowBorrowedBooksUsingGET()

nowBorrowedBooks

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
apiInstance.nowBorrowedBooksUsingGET((error, data, response) => {
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

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## returnBookUsingPUT

> returnBookUsingPUT(id, borrow)

returnBook

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
let id = 789; // Number | id
let borrow = new ApiDocumentation.Borrow(); // Borrow | borrow
apiInstance.returnBookUsingPUT(id, borrow, (error, data, response) => {
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
 **borrow** | [**Borrow**](Borrow.md)| borrow | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## returnesBorrowesUsingGET

> Number returnesBorrowesUsingGET()

returnesBorrowes

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
apiInstance.returnesBorrowesUsingGET((error, data, response) => {
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

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

