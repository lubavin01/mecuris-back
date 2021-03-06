# API

## api/v1/entries
### method: GET
Returns all entries

## api/v1/entries/:id
### method: GET
Returns entry by id parameter

## api/v1/entries
### method: POST
### Body parameters:
* color: hex-value or name, obligatory
* width: numeric, obligatory
* height: numeric, obligatory
* depth: numeric, obligatory
* positionX: numeric, optional
* positionY: numeric, optional
* positionZ: numeric, optional

Creates new entry

## api/v1/entries/:id
### method: PUT
### Body parameters:
* color: hex-value or name, obligatory
* width: numeric, obligatory
* height: numeric, obligatory
* depth: numeric, obligatory
* positionX: numeric, optional
* positionY: numeric, optional
* positionZ: numeric, optional

Updates by id entry object entirely

## api/v1/entries/:id
### method: PATCH
### Body parameters:
* color: hex-value or name, optional
* width: numeric, optional
* height: numeric, optional
* depth: numeric, optional
* positionX: numeric, optional
* positionY: numeric, optional
* positionZ: numeric, optional

Updates by id entry object partially

## api/v1/entries/:id
### method: DELETE
Deletes entry by id parameter entirely
