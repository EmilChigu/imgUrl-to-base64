# imgurl-to-base64

A simple wrapper that converts images urls to base64 image strings

## Installation

Use the package manager npm.

```bash
npm install imgurl-to-base64
```

## Usage

```javascript
import imgUrlToBase64 from 'imgurl-to-base64'

const imgUrl = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'

imgUrlToBase64(imgUrl).then((res) => {
  return res
})
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
