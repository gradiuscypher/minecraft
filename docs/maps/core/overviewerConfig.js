var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png"
        },
        "UPPERLEFT": 0
    },
    "map": {
        "controls": {
            "mapType": true,
            "pan": true,
            "zoom": true,
            "overlays": true,
            "compass": true,
            "spawn": true,
            "coordsBox": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1595944883",
        "debug": true
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "north_direction": 0,
            "maxZoom": 10,
            "poititle": "Markers",
            "defaultZoom": 1,
            "zoomLevels": 10,
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "isOverlay": false,
            "showlocationmarker": true,
            "last_rendertime": 1595944680,
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
