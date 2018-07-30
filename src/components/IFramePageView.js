import React from 'react'
import PropTypes from "prop-types";

const IFramePageView = ({src}) => (
    <div className="agate-l-main-group">
        <h2 className="sr-only">
            Externer Inhalt (IFrame)
        </h2>
        <p className="sr-only">
            Nachfolgendes Iframe enthält Inhalte einer womöglich nicht auf Barrierefreiheit optimierten Webseite.    
        </p>
        <iframe content="text/html;charset=UTF-8" id="agate-iframe" title="iFrame mit externer Seite" className="container-fluid"
                style={{"height": "1000px"}}
                src={src}/>
    </div>
);

IFramePageView.propTypes = {
    src: PropTypes.string.isRequired
};

export default IFramePageView;