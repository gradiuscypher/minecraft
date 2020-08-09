var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "LOWERRIGHT": 2
    },
    "map": {
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "mapType": true
        },
        "cacheTag": "1596949283",
        "north_direction": "lower-left",
        "debug": true
    },
    "tilesets": [
        {
            "world": "Core01",
            "defaultZoom": 1,
            "path": "day",
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1596949080,
            "maxZoom": 10,
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "base": "",
            "name": "Daytime Render",
            "zoomLevels": 10,
            "north_direction": 0,
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true
        }
    ],
    "worlds": [
        "Core01"
    ]
};
