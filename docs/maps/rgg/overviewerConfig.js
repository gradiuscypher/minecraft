var overviewerConfig = {
    "map": {
        "controls": {
            "zoom": true,
            "mapType": true,
            "compass": true,
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "pan": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598054568"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "path": "day",
            "north_direction": 0,
            "base": "",
            "poititle": "Markers",
            "world": "world",
            "last_rendertime": 1598054179,
            "isOverlay": false,
            "minZoom": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "name": "Daytime Render",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "center": [
                3,
                80,
                12
            ]
        }
    ],
    "CONST": {
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    }
};
