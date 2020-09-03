var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true,
            "zoom": true,
            "mapType": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1599112886"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "poititle": "Markers",
            "isOverlay": false,
            "name": "Daytime Render",
            "defaultZoom": 1,
            "minZoom": 0,
            "north_direction": 0,
            "path": "day",
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "maxZoom": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "imgextension": "png",
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "last_rendertime": 1599112680
        }
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "tileSize": 384
    }
};
