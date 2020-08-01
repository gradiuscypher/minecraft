var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "world": "Core01",
            "base": "",
            "imgextension": "png",
            "minZoom": 0,
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "path": "day",
            "maxZoom": 10,
            "name": "Daytime Render",
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "last_rendertime": 1596322680
        }
    ],
    "map": {
        "controls": {
            "zoom": true,
            "pan": true,
            "coordsBox": true,
            "overlays": true,
            "mapType": true,
            "compass": true,
            "spawn": true
        },
        "cacheTag": "1596322883",
        "debug": true,
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ]
};
