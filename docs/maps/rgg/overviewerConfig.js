var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "north_direction": 0,
            "imgextension": "png",
            "world": "world",
            "base": "",
            "bgcolor": "#1a1a1a",
            "path": "day",
            "defaultZoom": 1,
            "last_rendertime": 1597809379,
            "maxZoom": 8,
            "minZoom": 0,
            "name": "Daytime Render",
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "poititle": "Markers",
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true
        }
    ],
    "map": {
        "controls": {
            "overlays": true,
            "pan": true,
            "spawn": true,
            "zoom": true,
            "coordsBox": true,
            "compass": true,
            "mapType": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597809764"
    },
    "worlds": [
        "world"
    ]
};
