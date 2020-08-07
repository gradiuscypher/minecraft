var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3
    },
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "overlays": true,
            "compass": true,
            "coordsBox": true,
            "spawn": true,
            "mapType": true,
            "zoom": true
        },
        "cacheTag": "1596808963",
        "debug": true
    },
    "tilesets": [
        {
            "defaultZoom": 1,
            "zoomLevels": 8,
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "name": "Daytime Render",
            "world": "world",
            "north_direction": 0,
            "minZoom": 0,
            "last_rendertime": 1596808579,
            "showlocationmarker": true,
            "base": "",
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "isOverlay": false
        }
    ]
};
