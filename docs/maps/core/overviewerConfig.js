var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "LOWERLEFT": 3
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "minZoom": 0,
            "maxZoom": 9,
            "north_direction": 0,
            "imgextension": "png",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "path": "day",
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "isOverlay": false,
            "poititle": "Markers",
            "last_rendertime": 1595278680,
            "world": "Core01"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "compass": true,
            "overlays": true,
            "pan": true,
            "zoom": true,
            "coordsBox": true,
            "mapType": true
        },
        "cacheTag": "1595278883",
        "debug": true
    }
};
