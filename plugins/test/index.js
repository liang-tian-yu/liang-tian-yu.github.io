/**
 * forked from @metalsmith/core-plugin
 * you can use it as a template to create new plugins
 * @link https://github.com/metalsmith/core-plugin/
 */

/**
 * @typedef Options
 * @property {String} key
 */

/** @type {Options} */
const defaults = {
    key: 'key'
}

/**
 * Normalize plugin options
 * @param {Options} [options]
 * @returns {Object}
 */
function normalizeOptions(options) {
    return Object.assign({}, defaults, options || {})
}

function doSomething(file, path) {
    file.path = path
    return file
}

/**
 * A Metalsmith plugin to serve as a boilerplate for other core plugins
 *
 * @param {Options} options
 * @returns {import('metalsmith').Plugin}
 */
function corePlugin(options) {
    options = normalizeOptions(options)
    return function corePlugin(files, metalsmith, done) {
        const debug = metalsmith.debug('core-plugin')
        // console.log(metalsmith)
        metalsmith.debug.enable('*')
        // console.log(metalsmith)
        // debug('Running with options: %O', options)
        // debug.info.enabled = true
        // debug.enabled = true
        // debug.info('233333333333333333333')
        // debug('2333')
        // console.log(debug)
        const fileList = Object.entries(files)

        // fileList.forEach(([file, path]) => {
        //     if (file[options.key]) {
        //         doSomething(file, path)
        //     }
        // })

        // done()
    }
}

export default corePlugin