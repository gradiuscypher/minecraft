var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1596412885",
        "controls": {
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "overlays": true,
            "zoom": true,
            "pan": true,
            "compass": true
        },
        "debug": true
    },
    "tilesets": [
        {
            "base": "",
            "showlocationmarker": true,
            "defaultZoom": 1,
            "path": "day",
            "zoomLevels": 10,
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "maxZoom": 10,
            "poititle": "Markers",
            "minZoom": 0,
            "last_rendertime": 1596412680,
            "world": "Core01",
            "imgextension": "png",
            "isOverlay": false
        }
    ]
};
