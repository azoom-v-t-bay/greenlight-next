const TIMEOUT_MILISECONDS = 10 * 1000 // 10s

export default ({ $axios }) => {
  $axios.defaults.timeout = TIMEOUT_MILISECONDS
}
