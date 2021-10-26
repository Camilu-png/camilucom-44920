import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { Layout } from '../components/index';
import { Link, getPageUrl, withPrefix } from '../utils';

export default class Portfolio extends React.Component {
    renderProyect(proyect, index) {
        const title = _.get(proyect, 'title');
        const thumbImage = _.get(proyect, 'thumb_img_path');
        const thumbImageAlt = _.get(proyect, 'thumb_img_alt', '');
        const excerpt = _.get(proyect, 'excerpt');
        const date = _.get(proyect, 'date');
        const dateTimeAttr = moment(date).strftime('%Y-%m-%d %H:%M');
        const formattedDate = moment(date).strftime('%B %d, %Y');
        const proyectUrl = getPageUrl(proyect, { withPrefix: true });

        return (
            <article key={index} className="proyect proyect-card">
                <div className="proyect-inside">
                    {thumbImage && (
                        <Link className="proyect-thumbnail" href={proyectUrl}>
                            <img src={withPrefix(thumbImage)} alt={thumbImageAlt} />
                        </Link>
                    )}
                    <header className="proyect-header">
                        <h2 className="proyect-title">
                            <Link href={proyectUrl} rel="bookmark">{title}</Link>
                        </h2>
                    </header>
                    {excerpt && (
                        <div className="proyect-content">
                            <p>{excerpt}</p>
                        </div>
                    )}
                    <footer className="proyect-meta">
                        <time className="published" dateTime={dateTimeAttr}>{formattedDate}</time>
                    </footer>
                </div>
            </article>
        );
    }

    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const proyects = _.orderBy(_.get(this.props, 'proyects', []), 'date', 'desc');

        return (
            <Layout page={page} config={config}>
                <header className="screen-reader-text">
                    <h1>{title}</h1>
                </header>
                <div className="proyect-feed">
                    <div className="proyect-feed-inside">
                        {_.map(proyects, (proyect, index) => this.renderProyect(proyect, index))}
                    </div>
                </div>
            </Layout>
        );
    }
}
