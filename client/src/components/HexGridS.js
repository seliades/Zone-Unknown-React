import React from 'react';

function HexGridS() {
    return (
        <div id="grid">
            <div id="gridFix">
                <div className="g2">
                    <div className="hex" data-coordinates="-2, 0" data-current="false" data-visited="false" data-reach="false"></div>
                    <div className="hex" data-coordinates="-2, -1" data-current="false" data-visited="false" data-reach="false"></div>
                    <div className="hex" data-coordinates="-2, -2" data-current="false" data-visited="false" data-reach="false"></div>
                </div>
                <div className="g1">
                    <div className="hex" data-coordinates="-1, 1" data-current="false" data-visited="false" data-reach="false"></div>
                    <div className="hex" data-coordinates="-1, 0" data-current="false" data-visited="false" data-reach="true"></div>
                    <div className="hex" data-coordinates="-1, -1" data-current="false" data-visited="false" data-reach="true"></div>
                    <div className="hex" data-coordinates="-1, -2" data-current="false" data-visited="false" data-reach="false"></div>
                </div>
                <div className="g0">
                    <div className="hex" data-coordinates="0, 2" data-current="false" data-visited="false" data-reach="false"></div>
                    <div className="hex" data-coordinates="0, 1" data-current="false" data-visited="false" data-reach="true"></div>
                    <div className="hex" data-coordinates="0, 0" data-current="true" data-visited="true" data-reach="true"></div>
                    <div className="hex" data-coordinates="0, -1" data-current="false" data-visited="false" data-reach="true"></div>
                    <div className="hex" data-coordinates="0, -2" data-current="false" data-visited="false" data-reach="false"></div>
                </div>
                <div className="g1">
                    <div className="hex" data-coordinates="1, 2" data-current="false" data-visited="false" data-reach="false"></div>
                    <div className="hex" data-coordinates="1, 1" data-current="false" data-visited="false" data-reach="true"></div>
                    <div className="hex" data-coordinates="1, 0" data-current="false" data-visited="false" data-reach="true"></div>
                    <div className="hex" data-coordinates="1, -1" data-current="false" data-visited="false" data-reach="false"></div>
                </div>
                <div className="g2">
                    <div className="hex" data-coordinates="2, 2" data-current="false" data-visited="false" data-reach="false"></div>
                    <div className="hex" data-coordinates="2, 1" data-current="false" data-visited="false" data-reach="false"></div>
                    <div className="hex" data-coordinates="2, 0" data-current="false" data-visited="false" data-reach="false"></div>
                </div>
            </div>
        </div>
    )
}

export default HexGridS;