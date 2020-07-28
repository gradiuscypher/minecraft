var overviewerConfig = {
    "map": {
        "controls": {
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1595905284"
    },
    "tilesets": [
        {
            "minZoom": 0,
            "maxZoom": 10,
            "name": "Daytime Render",
            "defaultZoom": 1,
            "path": "day",
            "world": "Core01",
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
            "zoomLevels": 10,
            "showlocationmarker": true,
            "poititle": "Markers",
            "isOverlay": false,
            "north_direction": 0,
            "base": "",
            "last_rendertime": 1595905080,
            "bgcolor": "#1a1a1a"
        }
    ],
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png"
        },
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384
    },
    "worlds": [
        "Core01"
    ]
};
