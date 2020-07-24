var overviewerConfig = {
    "map": {
        "cacheTag": "1595563308",
        "controls": {
            "coordsBox": true,
            "compass": true,
            "pan": true,
            "mapType": true,
            "zoom": true,
            "spawn": true,
            "overlays": true
        },
        "north_direction": "lower-left",
        "debug": true
    },
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "isOverlay": false,
            "imgextension": "png",
            "base": "",
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "minZoom": 0,
            "defaultZoom": 1,
            "zoomLevels": 9,
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 9,
            "name": "Daytime Render",
            "north_direction": 0,
            "last_rendertime": 1595563080,
            "world": "Core01"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
