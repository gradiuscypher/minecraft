var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "path": "day",
            "poititle": "Markers",
            "showlocationmarker": true,
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "minZoom": 0,
            "name": "Daytime Render",
            "maxZoom": 8,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "last_rendertime": 1595541379,
            "base": "",
            "isOverlay": false
        }
    ],
    "CONST": {
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "zoom": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1595541762"
    }
};
