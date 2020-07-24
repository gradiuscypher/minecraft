var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERRIGHT": 1
    },
    "map": {
        "controls": {
            "spawn": true,
            "pan": true,
            "compass": true,
            "coordsBox": true,
            "overlays": true,
            "zoom": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1595624550",
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1595624407,
            "path": "day",
            "showlocationmarker": true,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "maxZoom": 9,
            "base": "",
            "defaultZoom": 1,
            "world": "Core01",
            "zoomLevels": 9,
            "poititle": "Markers",
            "imgextension": "png",
            "minZoom": 0
        }
    ],
    "worlds": [
        "Core01"
    ]
};
