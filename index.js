import axios from 'axios';

async function imgUrlToBase64(url) {
  const response = await axios.get(url,  { responseType: 'arraybuffer' })
  const buffer = Buffer.from(response.data, "utf-8")
  
  return buffer;
}

export default imgUrlToBase64;