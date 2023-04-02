# audio.js

## About:
- simple audio library for Node.js

## Installation:
- install audio.js in your project.
```
npm install https://github.com/krishpranav/audio.js
```

# Usage:
##  playing basic mp3 or wav file
```javascript
const audio = require("audio.js");

// plays the mp3 file and you will start to hear it.
audio.play("filename.mp3") // or wav 
```

## Relative paths:
```javascript
audio.play("file.mp3");
```
(or)
```javascript
const path = require("path");
const filePath = path.join(__dirname, "file.mp3");
audio.play(filePath);
```

## Adjusting Volume:
```javascript

const audio = require("audio.js");

/**
 * VOLUME MODES
 * 0   = silent
 * 0.5 = default
 * 1   = max volume
 */
volume = 1;
audio.play("file.mp3", volume);
```

## Path:
```javascript
audio.play("C:\\file.mp3");
```

## Promise:
```javascript
audio.play("file.mp3").then((response) => console.log("done"));
```

## Async & await:
```javascript
try {
  await sound.play("file.mp3");
  console.log("done");
} catch (error) {
  console.error(error);
}
```

## Author:
- [krishpranav](https://github.com/krishpranav)

## License:
- audio.js is licensed under [MIT-License]()
```
MIT License

Copyright (c) 2023 Krisna Pranav

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```