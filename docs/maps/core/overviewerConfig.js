var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "tileSize": 384
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "compass": true,
            "pan": true,
            "zoom": true,
            "mapType": true
        },
        "cacheTag": "1599544885",
        "north_direction": "lower-left",
        "debug": true
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "name": "Daytime Render",
            "base": "",
            "maxZoom": 10,
            "defaultZoom": 1,
            "north_direction": 0,
            "path": "day",
            "imgextension": "png",
            "isOverlay": false,
            "zoomLevels": 10,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1599544680
        }
    ]
};
