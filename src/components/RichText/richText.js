import React from 'react';

import { useStyle } from '../../classify';
import defaultClasses from './richText.module.css';

const toHTML = str => ({ __html: str });

const RichText = props => {
    const { content } = props;
    const classes = useStyle(defaultClasses, props.classes);
    return (
        <div>
            <p>TEST </p>
            <div
            className={classes.root}
            dangerouslySetInnerHTML={toHTML(content)}
            />
        </div>
        
    );
};

export default RichText;
