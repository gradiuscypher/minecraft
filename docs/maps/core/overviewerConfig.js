var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1597222882",
        "controls": {
            "spawn": true,
            "pan": true,
            "mapType": true,
            "overlays": true,
            "compass": true,
            "zoom": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "showlocationmarker": true,
            "defaultZoom": 1,
            "north_direction": 0,
            "maxZoom": 10,
            "name": "Daytime Render",
            "world": "Core01",
            "path": "day",
            "zoomLevels": 10,
            "isOverlay": false,
            "poititle": "Markers",
            "minZoom": 0,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1597222680,
            "base": ""
        }
    ],
    "worlds": [
        "Core01"
    ]
};
