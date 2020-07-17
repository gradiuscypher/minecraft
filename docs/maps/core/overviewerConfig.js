var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2
    },
    "map": {
        "controls": {
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "compass": true,
            "spawn": true,
            "pan": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1595019688"
    },
    "tilesets": [
        {
            "isOverlay": false,
            "name": "Daytime Render",
            "path": "day",
            "zoomLevels": 9,
            "showlocationmarker": true,
            "base": "",
            "maxZoom": 9,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1595019480,
            "poititle": "Markers",
            "defaultZoom": 1,
            "north_direction": 0,
            "minZoom": 0,
            "imgextension": "png",
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "bgcolor": "#1a1a1a"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
