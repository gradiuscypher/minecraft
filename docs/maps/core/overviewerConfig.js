var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERLEFT": 0
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "mapType": true,
            "overlays": true,
            "compass": true,
            "spawn": true,
            "pan": true,
            "coordsBox": true
        },
        "debug": true,
        "cacheTag": "1597532483"
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "imgextension": "png",
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "maxZoom": 10,
            "center": [
                80,
                96,
                192
            ],
            "base": "",
            "path": "day",
            "last_rendertime": 1597532280,
            "zoomLevels": 10,
            "isOverlay": false,
            "name": "Daytime Render",
            "world": "Core01"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
