import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import { getPageUrl, Link, withPrefix } from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionProyects extends React.Component {
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
                        <h3 className="proyect-title">
                            <Link href={proyectUrl} rel="bookmark">{title}</Link>
                        </h3>
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
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const actions = _.get(section, 'actions');
        const proyects = _.orderBy(_.get(this.props, 'proyects', []), 'date', 'desc');
        const proyectsNumber = _.get(section, 'proyects_number', 2);
        const recentProyects = proyects.slice(0, proyectsNumber);

        return (
            <section id={sectionId} className="block block-proyects">
                {title && <h2 className="block-title underline inner-sm">{title}</h2>}
                <div className="proyect-feed">
                    <div className="proyect-feed-inside">
                        {_.map(recentProyects, (proyect, index) => this.renderProyect(proyect, index))}
                    </div>
                </div>
                {!_.isEmpty(actions) && (
                    <div className="block-buttons inner-sm">
                        <CtaButtons actions={actions} />
                    </div>
                )}
            </section>
        );
    }
}
