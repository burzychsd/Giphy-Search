export default function removeDuplicates (arr) {
	return arr.filter((id, i, array) => array.indexOf(id) === i)
}