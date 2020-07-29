var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "mapDivId": "mcmap",
        "image": {
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "tileSize": 384
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "pan": true,
            "compass": true,
            "zoom": true,
            "spawn": true,
            "mapType": true,
            "overlays": true
        },
        "cacheTag": "1596009764",
        "debug": true
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "name": "Daytime Render",
            "base": "",
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "minZoom": 0,
            "zoomLevels": 8,
            "north_direction": 0,
            "last_rendertime": 1596009379,
            "world": "world",
            "center": [
                3,
                80,
                12
            ],
            "path": "day",
            "defaultZoom": 1,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "maxZoom": 8,
            "imgextension": "png"
        }
    ]
};
