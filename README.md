# PursuitJS

Lightweight JavaScript library that enables client-side searches of JSON objects. Allows search for objects, keys and values within a JSON string.

Perform simple searches of nodes by allowing to specify key or value to find all matches or use of available methods to validate a JSON structure, get objects, keys or values of a JSON string.

If need a robust or more complex JSON search library, take look to [JSONPath](http://goessner.net/articles/JsonPath/) or [DefiantJS](https://github.com/hbi99/defiant.js). PursuitJS is intended to do simple searches.

PursuitJS is a build-in merged modification of [find-in-json.js](https://gist.github.com/iwek/3924925) by [iwek](https://github.com/iwek).

## Requirements

Download and include the library into your project by reference:
```js
<script src="../dist/pursuit.min.js" type="text/javascript"></script>

```

## Usage

First, parse your JSON string

```js
var jsonString = '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","ID":"44","str":"SGML","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}';

var data = JSON.parse(jsonString);

```
## Available Methods

### Pursuit.Validate()

```js
var isValid = Pursuit.Validate(json);

```

### Pursuit.Objects()

* Get objects that match key and value
```js
var results = Pursuit.Objects(data,'ID','SGML');

```

* Get objects that match specific key
```js
var results = Pursuit.Objects(data,'ID','');

```

* Get objects that match specific value
```js
var results = Pursuit.Objects(data,'','SGML');

```

### Pursuit.Values()

* Get values from any key
```js
var results = Pursuit.Values(data,'ID');

```

### Pursuit.Keys()

* Get keys by searching specific values
```js
var results = Pursuit.Keys(data,'SGML');

```

## Autor

* **Federico Guzmán** - [kraiosis](https://github.com/kraiosis)
* **iwek** - [iwek](https://github.com/iwek)

## License

This project is under MIT License - see [LICENSE](https://github.com/kraiosis/PursuitJS/blob/master/LICENSE) for details.