var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "tileSize": 384
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1596063683",
        "controls": {
            "mapType": true,
            "overlays": true,
            "pan": true,
            "spawn": true,
            "compass": true,
            "coordsBox": true,
            "zoom": true
        },
        "debug": true
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "zoomLevels": 10,
            "isOverlay": false,
            "path": "day",
            "north_direction": 0,
            "last_rendertime": 1596063480,
            "poititle": "Markers",
            "base": "",
            "imgextension": "png",
            "minZoom": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "maxZoom": 10,
            "name": "Daytime Render"
        }
    ]
};
