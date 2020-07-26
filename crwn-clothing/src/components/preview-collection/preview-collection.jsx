import React from 'react'
import CollectionItem from '../collection-item/collection-item.components'

import './preview-collection.scss'


const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map(({ id, ...itemsProps }) => (
                        <CollectionItem key={id} {...itemsProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;