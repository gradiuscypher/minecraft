var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png"
        },
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "path": "day",
            "zoomLevels": 10,
            "poititle": "Markers",
            "base": "",
            "maxZoom": 10,
            "name": "Daytime Render",
            "defaultZoom": 1,
            "last_rendertime": 1595872680,
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "north_direction": 0,
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1595872883",
        "controls": {
            "mapType": true,
            "compass": true,
            "spawn": true,
            "coordsBox": true,
            "overlays": true,
            "zoom": true,
            "pan": true
        },
        "north_direction": "lower-left"
    }
};
