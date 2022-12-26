import React from "react";
import "./skeletons.css"

const SkeletonElement = ( { type } ) => {

    const classes = `skeleton ${type}`
    return (
        <div className={ classes } >

        </div>
    )
}

export default SkeletonElement;