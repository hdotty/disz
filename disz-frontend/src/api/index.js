/* eslint-disable */
/*
    Api Documentation generated
    Api Documentation
    version: 1.0

*/

export function Configuration(config) {
    this.basePath = '';
    this.fetchMethod = window.fetch;
    this.headers = {};
    this.getHeaders = () => { return {} };
    this.responseHandler = null;
    this.errorHandler = null;

    if (config) {
        if (config.basePath) {
            this.basePath = config.basePath;
        }
        if (config.fetchMethod) {
            this.fetchMethod = config.fetchMethod;
        }
        if (config.headers) {
            this.headers = config.headers;
        }
        if (config.getHeaders) {
            this.getHeaders = config.getHeaders;
        }
        if (config.responseHandler) {
            this.responseHandler = config.responseHandler;
        }
        if (config.errorHandler) {
            this.errorHandler = config.errorHandler;
        }
    }
}

const setAdditionalParams = (params = [], additionalParams = {}) => {
    Object.keys(additionalParams).forEach(key => {
        if(additionalParams[key]) {
            params.append(key, additionalParams[key]);
        }
    });
};

export function BookControllerApi(config) {
    this.config = config || new Configuration();

    this.booksGet = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/books';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.booksPost = (args, options = {}) => { 
        const { book } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/books';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'post',
                headers: { 'Content-Type': 'application/json', ...headers, ...getHeaders(), ...options.headers},
                body: 'object' === typeof book ? JSON.stringify(book) : book
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.booksBorrowedGet = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/books/borrowed';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.booksSearchGet = (args, options = {}) => { 
        const { query } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/books/search';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        if (query !== undefined) {
            params.append('query', query);
        }
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.booksIdGet = (args, options = {}) => { 
        const { id } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/books/{id}';
        url = url.split(['{', '}'].join('id')).join(encodeURIComponent(String(id)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.booksIdPut = (args, options = {}) => { 
        const { author, book, id, title } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/books/{id}';
        url = url.split(['{', '}'].join('id')).join(encodeURIComponent(String(id)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        if (author !== undefined) {
            params.append('author', author);
        }
        if (title !== undefined) {
            params.append('title', title);
        }
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'put',
                headers: { 'Content-Type': 'application/json', ...headers, ...getHeaders(), ...options.headers},
                body: 'object' === typeof book ? JSON.stringify(book) : book
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.booksIdDelete = (args, options = {}) => { 
        const { id } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/books/{id}';
        url = url.split(['{', '}'].join('id')).join(encodeURIComponent(String(id)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'delete',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };
}

export function BorrowControllerApi(config) {
    this.config = config || new Configuration();

    this.borrowsGet = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/borrows';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.borrowsPost = (args, options = {}) => { 
        const { borrowDto } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/borrows';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'post',
                headers: { 'Content-Type': 'application/json', ...headers, ...getHeaders(), ...options.headers},
                body: 'object' === typeof borrowDto ? JSON.stringify(borrowDto) : borrowDto
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.borrowsBooksBookIdGet = (args, options = {}) => { 
        const { bookId } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/borrows/books/{bookId}';
        url = url.split(['{', '}'].join('bookId')).join(encodeURIComponent(String(bookId)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.borrowsBorrowedGet = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/borrows/borrowed';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.borrowsBorrowedCountGet = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/borrows/borrowed/count';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.borrowsPersonPersonIdGet = (args, options = {}) => { 
        const { personId } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/borrows/person/{personId}';
        url = url.split(['{', '}'].join('personId')).join(encodeURIComponent(String(personId)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.borrowsReturnedGet = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/borrows/returned';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.borrowsReturnedCountGet = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/borrows/returned/count';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.borrowsSearchGet = (args, options = {}) => { 
        const { search } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/borrows/search';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        if (search !== undefined) {
            params.append('search', search);
        }
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.borrowsIdReturnPut = (args, options = {}) => { 
        const { borrowDto, id } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/borrows/{id}/return';
        url = url.split(['{', '}'].join('id')).join(encodeURIComponent(String(id)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'put',
                headers: { 'Content-Type': 'application/json', ...headers, ...getHeaders(), ...options.headers},
                body: 'object' === typeof borrowDto ? JSON.stringify(borrowDto) : borrowDto
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };
}

export function BasicErrorControllerApi(config) {
    this.config = config || new Configuration();

    this.errorGet = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/error';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            if (options.returnResponse) {
                promise.then(response => resolve(response));
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204) {
                        return response.text();
                    } else {
                        reject(response);
                    }
                }).then(data => resolve(data));
            }
            promise.catch(error => reject(error));
        });
    };

    this.errorHead = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/error';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'head',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            if (options.returnResponse) {
                promise.then(response => resolve(response));
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204) {
                        return response.text();
                    } else {
                        reject(response);
                    }
                }).then(data => resolve(data));
            }
            promise.catch(error => reject(error));
        });
    };

    this.errorPost = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/error';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'post',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            if (options.returnResponse) {
                promise.then(response => resolve(response));
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204) {
                        return response.text();
                    } else {
                        reject(response);
                    }
                }).then(data => resolve(data));
            }
            promise.catch(error => reject(error));
        });
    };

    this.errorPut = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/error';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'put',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            if (options.returnResponse) {
                promise.then(response => resolve(response));
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204) {
                        return response.text();
                    } else {
                        reject(response);
                    }
                }).then(data => resolve(data));
            }
            promise.catch(error => reject(error));
        });
    };

    this.errorDelete = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/error';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'delete',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            if (options.returnResponse) {
                promise.then(response => resolve(response));
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204) {
                        return response.text();
                    } else {
                        reject(response);
                    }
                }).then(data => resolve(data));
            }
            promise.catch(error => reject(error));
        });
    };

    this.errorOptions = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/error';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'options',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            if (options.returnResponse) {
                promise.then(response => resolve(response));
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204) {
                        return response.text();
                    } else {
                        reject(response);
                    }
                }).then(data => resolve(data));
            }
            promise.catch(error => reject(error));
        });
    };

    this.errorPatch = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/error';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'patch',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            if (options.returnResponse) {
                promise.then(response => resolve(response));
            } else {
                promise.then(response => {
                    if (response.status === 200 || response.status === 204) {
                        return response.text();
                    } else {
                        reject(response);
                    }
                }).then(data => resolve(data));
            }
            promise.catch(error => reject(error));
        });
    };
}

export function PersonControllerApi(config) {
    this.config = config || new Configuration();

    this.personGet = (options = {}) => { 
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/person';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.personPost = (args, options = {}) => { 
        const { personDto } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/person';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'post',
                headers: { 'Content-Type': 'application/json', ...headers, ...getHeaders(), ...options.headers},
                body: 'object' === typeof personDto ? JSON.stringify(personDto) : personDto
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.personPut = (args, options = {}) => { 
        const { newEmail, newFirstName, newLastName, personDto } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/person';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        if (newEmail !== undefined) {
            params.append('newEmail', newEmail);
        }
        if (newFirstName !== undefined) {
            params.append('newFirstName', newFirstName);
        }
        if (newLastName !== undefined) {
            params.append('newLastName', newLastName);
        }
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'put',
                headers: { 'Content-Type': 'application/json', ...headers, ...getHeaders(), ...options.headers},
                body: 'object' === typeof personDto ? JSON.stringify(personDto) : personDto
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.personSearchGet = (args, options = {}) => { 
        const { query } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/person/search';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        if (query !== undefined) {
            params.append('query', query);
        }
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.personIdDelete = (args, options = {}) => { 
        const { id } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/person/{id';
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        if (id !== undefined) {
            params.append('id', id);
        }
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'delete',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.personIdGet = (args, options = {}) => { 
        const { id } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/person/{id}';
        url = url.split(['{', '}'].join('id')).join(encodeURIComponent(String(id)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.personPasswordPost = (args, options = {}) => { 
        const { password, personDto } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/person/{password}';
        url = url.split(['{', '}'].join('password')).join(encodeURIComponent(String(password)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'post',
                headers: { 'Content-Type': 'application/json', ...headers, ...getHeaders(), ...options.headers},
                body: 'object' === typeof personDto ? JSON.stringify(personDto) : personDto
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };

    this.personsGet = (args, options = {}) => { 
        const { personDto } = args;
        const {fetchMethod, basePath, headers, getHeaders, responseHandler, errorHandler} = this.config;
        let url = '/persons';
        url = url.split(['{', '}'].join('personDto')).join(encodeURIComponent(String(personDto)));
        const params = new URLSearchParams();
        setAdditionalParams(params, options.params);
        const query = params.toString();
        return new Promise((resolve, reject) => {
            const promise = fetchMethod(basePath + url + (query ? '?' + query : ''), {
                method: 'get',
                headers: { ...headers, ...getHeaders(), ...options.headers}
            });
            !!responseHandler && promise.then(responseHandler);
            !!errorHandler && promise.catch(errorHandler);
            promise.then(response => {
                if (response.status === 200 || response.status === 204) {
                    resolve(response);
                } else {
                    reject(response);
                }
            });
            promise.catch(error => reject(error));
        });
    };
}
