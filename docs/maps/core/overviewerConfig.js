var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "poititle": "Markers",
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 9,
            "isOverlay": false,
            "defaultZoom": 1,
            "last_rendertime": 1595127480,
            "minZoom": 0,
            "zoomLevels": 9,
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "path": "day",
            "north_direction": 0,
            "world": "Core01"
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "pan": true,
            "mapType": true,
            "zoom": true,
            "overlays": true,
            "compass": true,
            "spawn": true
        },
        "cacheTag": "1595127681"
    },
    "worlds": [
        "Core01"
    ]
};
