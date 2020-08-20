# timestamp-microservice
this is a microservice that return both a timestamp of a date and an UTC date itself.

example of response:
```json
{
    "unix": 1597920337314,
    "utc": "Thu, 20 Aug 2020 10:45:37 GMT"
}
```

# routes
all the routes executed will return a json format response.
- `{url}/api/timestamp/` = return current date
- `{url}/api/timestamp/{a timestamp}` = return timestamp and the converted timestamp to UTC date
- `{url}/api/timestamp/{a date in ISO-8601 format e.g. 2019-12-30}` = return the date in UTC format and the converted date to timestamp
- `{url}/api/timestamp/{invalid string}` = return error 

# how to install
1. git clone
2. cd to project folder
3. npm install
4. npm start