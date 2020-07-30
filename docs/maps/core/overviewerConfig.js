var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "maxZoom": 10,
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "path": "day",
            "imgextension": "png",
            "world": "Core01",
            "showlocationmarker": true,
            "base": "",
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "zoomLevels": 10,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "minZoom": 0,
            "last_rendertime": 1596117480,
            "north_direction": 0
        }
    ],
    "map": {
        "cacheTag": "1596117681",
        "controls": {
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true
        },
        "north_direction": "lower-left",
        "debug": true
    },
    "worlds": [
        "Core01"
    ]
};
