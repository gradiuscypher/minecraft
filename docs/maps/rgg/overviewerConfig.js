var overviewerConfig = {
    "CONST": {
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "path": "day",
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "world": "world",
            "poititle": "Markers",
            "last_rendertime": 1597611379,
            "zoomLevels": 8,
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "maxZoom": 8,
            "showlocationmarker": true,
            "imgextension": "png",
            "north_direction": 0,
            "name": "Daytime Render"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1597611763",
        "controls": {
            "pan": true,
            "mapType": true,
            "spawn": true,
            "overlays": true,
            "compass": true,
            "zoom": true,
            "coordsBox": true
        },
        "debug": true
    }
};
