# basedb

A lightweight **database** 

## Structure

![STRUCTURE](https://i.pinimg.com/originals/18/91/96/1891964b33fa2571fdb7c18a4e77f141.jpg)

* `Database` → Folder
* `Collection` → File ( json )
* `Document` → `{"package": "basedb"}`
## Installation

```bash
npm i basedb
```

## Usage

* Require Module
```javascript
const {database} = require('basedb');
```
* Create Database
```javascript
let db = new database('DATABASE');
```
* Create Collection
```javascript
db.createCollection('user',(err)=>{
	if (err) throw err;
	console.log('collection created');
});
```

* Insert Document
  * Single Document
  ```javascript
  let doc = {
		username: 'bit-web',
		email: 'bit-web404@gmail.com',
	    password: "********"
	};

  db.createCollection('user',(err, collection)=>{
	if (err) throw err;
	console.log('collection created');
	collection.insert(doc,(err)=>{
		if (err) throw err;
		console.log('document inserted');
	});
  });
  ```
  * Multiple Documents
  ```javascript
  let docs = [
    {
		username: 'bit-web',
		email: 'bit-web404@gmail.com',
	    password: "********"
	},
	{
		username: 'bit-web2',
		email: 'bit-web200@gmail.com',
	    password: "########"
	}
  ];
  
  db.createCollection('user',(err, collection)=>{
	if (err) throw err;
	console.log('collection created');
	collection.insert(docs,(err)=>{
		if (err) throw err;
		console.log('document inserted');
	});
  });
  ```
* Insert Document (if the collection already exists)
 
  * Single Document
  ```javascript
  let doc = {
		username: 'bit-web',
		email: 'bit-web404@gmail.com',
	    password: "********"
	};
	
  db.collection('user').insert(doc,(err)=>{
	if (err) throw err;
	console.log('document inserted');
  });
  ```
  
  * Multiple Documents
  ```javascript
   let docs = [
    {
		username: 'bit-web',
		email: 'bit-web404@gmail.com',
	    password: "********"
	},
	{
		username: 'bit-web2',
		email: 'bit-web200@gmail.com',
	    password: "########"
	}
  ];
  
  db.collection('user').insert(docs,(err)=>{
	if (err) throw err;
	console.log('documents inserted');
  });
  ```
* Find
```javascript
db.collection('user').get(item =>{
	if (item.username === 'bit-web' && item.password === "********") {
		console.log(item);
	}else{
		console.log('couldn\'t found the document');
	};
});
```
> __Note:__ Always take the parameter `item`

* Update
```javascript
db.collection('user').get(item =>{
	if (item.username === 'bit-web' && item.password === "********") {
		item.username = 'npmjs';
		item.email = 'npmjs123@gmail.com';
	}else{
		console.log('couldn\'t found the document');
	};
});
```
> __Note:__ Always take the parameter `item`

* Delete Collection
```javascript
db.delete('user',(err)=>{
	if (err) throw err;
	console.log('collection deleted');
});
```
* Remove Database
```javascript
const {database, remove} = require('basedb');
remove('DATABASE',(err)=>{
	if (err) throw err;
	console.log('database removed');
});
```
## license

ISC


