var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "zoom": true,
            "overlays": true,
            "spawn": true
        },
        "debug": true,
        "cacheTag": "1597114883"
    },
    "tilesets": [
        {
            "last_rendertime": 1597114680,
            "north_direction": 0,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "base": "",
            "minZoom": 0,
            "maxZoom": 10,
            "defaultZoom": 1,
            "path": "day",
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "zoomLevels": 10,
            "isOverlay": false,
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "world": "Core01"
        }
    ]
};
