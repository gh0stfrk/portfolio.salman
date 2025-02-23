---
title: Testing APIs
subtitle: Test APIs with Python
date: "2025-01-10"
tags: "api,python,docker"
author: "salman"
---

APIs are the backbone of modern web applications, allowing different systems to communicate. Whether you're developing a web service or consuming one, testing APIs ensures reliability, performance, and security. In this article, we'll explore different ways to test APIs in Python using tools like `requests` and `pytest`.

## Why Test APIs?

Testing APIs is essential for:

- Ensuring endpoints return expected responses.
- Validating data correctness.
- Checking for proper error handling.
- Measuring performance and reliability.

## Getting Started with API Testing

We'll use the `requests` library to send HTTP requests and `pytest` for writing test cases.

### Install Dependencies

```sh
pip install requests pytest
```

### Sending a Simple API Request

Here's a basic example of making a GET request to an API:

```python
import requests

url = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.get(url)

data = response.json()
print("Title:", data["title"])
```

### Writing Tests with Pytest

Create a test file, `test_api.py`, and add the following tests:

```python
import requests

def test_get_post():
    url = "https://jsonplaceholder.typicode.com/posts/1"
    response = requests.get(url)
    
    assert response.status_code == 200
    json_data = response.json()
    assert "title" in json_data

def test_invalid_endpoint():
    url = "https://jsonplaceholder.typicode.com/invalid"
    response = requests.get(url)
    
    assert response.status_code == 404
```

### Running the Tests

Run the tests using:

```sh
pytest test_api.py
```

## Mocking API Responses

When testing, you may not always want to hit a live API. You can use `responses` to mock API responses:

```sh
pip install responses
```

Example test with mocking:

```python
import requests
import responses

@responses.activate
def test_mocked_api():
    responses.add(responses.GET, "https://example.com/data",
                  json={"message": "Hello, world!"}, status=200)
    
    response = requests.get("https://example.com/data")
    assert response.status_code == 200
    assert response.json()["message"] == "Hello, world!"
```

## Conclusion

Testing APIs ensures reliability and correctness. We covered making API requests, writing tests with `pytest`, and mocking responses. As you build APIs, integrating automated tests will save you from unexpected failures and ensure smooth development.

More testing techniques are on the way, stay tuned!



## Inspirations
https://johnny.am/
