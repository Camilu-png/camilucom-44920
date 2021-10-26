import _ from 'lodash';
import withPrefix from './withPrefix';

export default function getPageUrl(any, { withPrefix: addPrefix = false } = {}) {
    const urlPath = _.get(any, '__metadata.urlPath');
    return addPrefix ? withPrefix(urlPath) : urlPath;
}
