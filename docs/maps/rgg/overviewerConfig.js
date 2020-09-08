var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "compass": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "mapType": true,
            "zoom": true
        },
        "cacheTag": "1599523370",
        "debug": true
    },
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png"
        }
    },
    "tilesets": [
        {
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "base": "",
            "name": "Daytime Render",
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "minZoom": 0,
            "showlocationmarker": true,
            "isOverlay": false,
            "zoomLevels": 8,
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "world": "world",
            "poititle": "Markers",
            "imgextension": "png",
            "last_rendertime": 1599522979
        }
    ],
    "worlds": [
        "world"
    ]
};
