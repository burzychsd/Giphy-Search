export default function getSpecificItems (arr, index, status) {
	return status === 'remove' ? 
	arr.filter(el => el !== index) : arr.filter(el => el === index)
}