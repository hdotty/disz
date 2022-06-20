# ApiDocumentation.LoginControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginPostUsingPOST**](LoginControllerApi.md#loginPostUsingPOST) | **POST** /login | loginPost



## loginPostUsingPOST

> loginPostUsingPOST(opts)

loginPost

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.LoginControllerApi();
let opts = {
  'email': "email_example", // String | email
  'password': "password_example" // String | password
};
apiInstance.loginPostUsingPOST(opts, (error, data, response) => {
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
 **email** | **String**| email | [optional] 
 **password** | **String**| password | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

