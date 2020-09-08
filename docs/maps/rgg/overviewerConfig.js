var overviewerConfig = {
    "CONST": {
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "path": "day",
            "isOverlay": false,
            "base": "",
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true,
            "last_rendertime": 1599605779,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "poititle": "Markers",
            "minZoom": 0,
            "name": "Daytime Render",
            "imgextension": "png",
            "maxZoom": 8,
            "zoomLevels": 8,
            "north_direction": 0,
            "world": "world"
        }
    ],
    "map": {
        "cacheTag": "1599606171",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "mapType": true,
            "pan": true,
            "compass": true,
            "coordsBox": true,
            "spawn": true,
            "zoom": true,
            "overlays": true
        }
    }
};
