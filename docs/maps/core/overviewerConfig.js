var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png"
        }
    },
    "tilesets": [
        {
            "zoomLevels": 9,
            "imgextension": "png",
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
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "defaultZoom": 1,
            "isOverlay": false,
            "last_rendertime": 1595419080,
            "path": "day",
            "base": "",
            "poititle": "Markers",
            "showlocationmarker": true,
            "maxZoom": 9,
            "name": "Daytime Render",
            "world": "Core01",
            "minZoom": 0
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "zoom": true,
            "mapType": true,
            "spawn": true,
            "overlays": true,
            "compass": true,
            "pan": true,
            "coordsBox": true
        },
        "cacheTag": "1595419280",
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ]
};
