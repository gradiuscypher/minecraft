var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "path": "day",
            "world": "world",
            "imgextension": "png",
            "defaultZoom": 1,
            "poititle": "Markers",
            "maxZoom": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "name": "Daytime Render",
            "base": "",
            "isOverlay": false,
            "zoomLevels": 8,
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1595948179,
            "showlocationmarker": true
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1595948563",
        "controls": {
            "coordsBox": true,
            "spawn": true,
            "mapType": true,
            "compass": true,
            "zoom": true,
            "pan": true,
            "overlays": true
        },
        "north_direction": "lower-left"
    }
};
