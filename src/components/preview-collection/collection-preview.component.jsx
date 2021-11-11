import React from "react";
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection.item.component";

const CollectionPreview = ({title, items}) =>(
    <div className='collection-preview'>
        <h1 className='title'> {title.toUpperCase()} </h1>
        <div className= 'preview'>
            {
                //idx <4 will show only for itens under each collection
                items.filter((item,idx) => idx < 4)
                    .map(({id, ...otherItemProps}) =>(
                    <CollectionItem key={id} {...otherItemProps}></CollectionItem>
                    )
                )
            }
        </div>
    </div>
);

export default CollectionPreview;