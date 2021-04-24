import '../typedef.js'
import { getContext } from 'svelte'
import { derived, readable, writable } from 'svelte/store'
import { pathAndParamsToUrl } from './utils.js'

export const _get = {
    /** @returns {RoutifyRuntime} */
    instance: () => getContext('routify-instance'),
    urlHandler: () => _get.instance().urlHandler,
}

/**
 * @typedef {Object.<String,String>} UrlParams
 * @typedef {Object.<String,String>} UrlOptions
 */

/**
 * @callback IsActiveHelper
 * @param {String=} path
 * @param {UrlParams=} params
 * @param {UrlOptions=} options
 * @returns {Boolean}
 */

/** @type {import('svelte/store').Readable<IsActiveHelper>} */
export const isActive = readable(
    /** initial value */
    () => false,
    set => _get.urlHandler().subscribe($url => set(_isActive($url))),
)

export const _isActive = $url => (path, params, options = {}) => {
    path = pathAndParamsToUrl(path, params, x => '')
    if (!options.strict) path = path.replace(/\/index\/?$/, '')

    // ensure uniform string endings to prevent /foo matching /foobar
    path = path.replace(/\/+$/, '') + '/'
    return ($url + '/').startsWith(path)
}
