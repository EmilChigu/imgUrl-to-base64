import imgUrlToBase64 from 'imgurl-to-base64'

const imgUrl = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'

const test = async () => {
console.log(await imgUrlToBase64(imgUrl))
}

test();