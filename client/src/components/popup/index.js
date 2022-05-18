import React, { Fragment, useState } from "react";
import '../../popup.css'

const Popup = (props) => {


    return(props.trigger) ? (
        <Fragment>
            <div className="popup">
                <div className="popup-inner">
                    <h1>{props.message}</h1>
                    <button className="btn-close" onClick={() => props.setTrigger(false)}>Fechar</button>
                    { props.children }
                </div>
            </div>
        </Fragment>
    ) : ""
}

export default Popup