var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        },
        "tileSize": 384
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "base": "",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "last_rendertime": 1597060680,
            "path": "day",
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "maxZoom": 10,
            "name": "Daytime Render",
            "world": "Core01",
            "minZoom": 0,
            "imgextension": "png",
            "north_direction": 0
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "spawn": true,
            "coordsBox": true,
            "compass": true,
            "overlays": true,
            "pan": true,
            "mapType": true,
            "zoom": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1597060882"
    },
    "worlds": [
        "Core01"
    ]
};
