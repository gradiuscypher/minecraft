var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERRIGHT": 2
    },
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1596567683",
        "controls": {
            "coordsBox": true,
            "overlays": true,
            "zoom": true,
            "mapType": true,
            "compass": true,
            "spawn": true,
            "pan": true
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "isOverlay": false,
            "base": "",
            "north_direction": 0,
            "imgextension": "png",
            "world": "Core01",
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "path": "day",
            "zoomLevels": 10,
            "last_rendertime": 1596567480,
            "defaultZoom": 1,
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "maxZoom": 10,
            "minZoom": 0,
            "center": [
                80,
                96,
                192
            ]
        }
    ]
};
