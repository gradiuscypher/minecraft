var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png"
        }
    },
    "tilesets": [
        {
            "world": "Core01",
            "imgextension": "png",
            "last_rendertime": 1596621480,
            "bgcolor": "#1a1a1a",
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
            "zoomLevels": 10,
            "defaultZoom": 1,
            "base": "",
            "isOverlay": false,
            "north_direction": 0,
            "poititle": "Markers",
            "minZoom": 0,
            "maxZoom": 10,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "path": "day"
        }
    ],
    "map": {
        "controls": {
            "zoom": true,
            "compass": true,
            "pan": true,
            "spawn": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1596621682",
        "debug": true
    },
    "worlds": [
        "Core01"
    ]
};
