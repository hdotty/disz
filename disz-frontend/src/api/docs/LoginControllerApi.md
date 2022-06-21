# ApiDocumentation.LoginControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginUsingPOST**](LoginControllerApi.md#loginUsingPOST) | **POST** /login | login



## loginUsingPOST

> Object loginUsingPOST(email, password)

login

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.LoginControllerApi();
let email = "email_example"; // String | email
let password = "password_example"; // String | password
apiInstance.loginUsingPOST(email, password, (error, data, response) => {
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
 **email** | **String**| email | 
 **password** | **String**| password | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

