import axios from 'axios'
const baseURL = {
	DEVELOPMENT: 'http://localhost:3001',
	PRODUCTION: 'https://www.youngcr.cn/api/t2t',
}
const instance = axios.create({
	// baseURL: baseURL.DEVELOPMENT,
	baseURL: baseURL.PRODUCTION,
	timeout: 10 * 1000,
})

export default instance
