import imgUrlToBase64 from 'imgurl-to-base64'

const imgUrl = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'

imgUrlToBase64(imgUrl).then((res) => {
    console.log(res)
})