var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "spawn": true,
            "pan": true,
            "zoom": true,
            "overlays": true,
            "compass": true,
            "coordsBox": true
        },
        "debug": true,
        "cacheTag": "1595016081"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "showlocationmarker": true,
            "base": "",
            "poititle": "Markers",
            "minZoom": 0,
            "imgextension": "png",
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "last_rendertime": 1595015880,
            "name": "Daytime Render",
            "maxZoom": 9,
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 9,
            "defaultZoom": 1
        }
    ]
};
