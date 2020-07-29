var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "defaultZoom": 1,
            "name": "Daytime Render",
            "world": "world",
            "minZoom": 0,
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "path": "day",
            "north_direction": 0,
            "poititle": "Markers",
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1595984179,
            "isOverlay": false,
            "maxZoom": 8,
            "base": "",
            "center": [
                3,
                80,
                12
            ]
        }
    ],
    "map": {
        "cacheTag": "1595984563",
        "controls": {
            "overlays": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true,
            "pan": true
        },
        "debug": true,
        "north_direction": "lower-left"
    }
};
