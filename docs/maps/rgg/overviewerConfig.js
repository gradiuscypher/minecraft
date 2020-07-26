var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERLEFT": 3,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "map": {
        "debug": true,
        "controls": {
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "overlays": true,
            "pan": true,
            "spawn": true,
            "mapType": true
        },
        "cacheTag": "1595772162",
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "path": "day",
            "name": "Daytime Render",
            "base": "",
            "maxZoom": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "minZoom": 0,
            "world": "world",
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1595771779,
            "showlocationmarker": true,
            "isOverlay": false,
            "poititle": "Markers",
            "north_direction": 0,
            "imgextension": "png"
        }
    ],
    "worlds": [
        "world"
    ]
};
