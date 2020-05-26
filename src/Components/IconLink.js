import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconLink({icon, link, group}) {
    return (
        <a className="nav-item fa" href={link}>
            <FontAwesomeIcon icon={[group, icon]} size="2x" />
        </a>
    )
}
