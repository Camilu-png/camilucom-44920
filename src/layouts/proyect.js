import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';

export default class Proyect extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const image = _.get(page, 'content_img_path');
        const imageAlt = _.get(page, 'content_img_alt', '');
        const date = _.get(page, 'date');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%A, %B %e, %Y');
        const markdownContent = _.get(page, 'markdown_content');

        return (
            <Layout page={page} config={config}>
                <article className="proyect proyect-full">
                    <header className="proyect-header inner-sm">
                        <h1 className="proyect-title underline">{title}</h1>
                        {subtitle && <div className="proyect-subtitle">{htmlToReact(subtitle)}</div>}
                    </header>
                    {image && (
                        <div className="proyect-image">
                            <img src={withPrefix(image)} alt={imageAlt} />
                        </div>
                    )}
                    {markdownContent && <div className="proyect-content inner-sm">{markdownify(markdownContent)}</div>}
                    <footer className="proyect-meta inner-sm">
                        <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                    </footer>
                </article>
            </Layout>
        );
    }
}