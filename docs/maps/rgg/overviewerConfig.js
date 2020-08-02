var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERLEFT": 3,
        "tileSize": 384
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "minZoom": 0,
            "showlocationmarker": true,
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "world": "world",
            "name": "Daytime Render",
            "last_rendertime": 1596387379,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "path": "day",
            "isOverlay": false,
            "maxZoom": 8,
            "zoomLevels": 8
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "pan": true,
            "zoom": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "compass": true
        },
        "cacheTag": "1596387765"
    },
    "worlds": [
        "world"
    ]
};
