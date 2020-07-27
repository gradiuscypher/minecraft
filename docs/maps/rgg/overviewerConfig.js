var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "isOverlay": false,
            "path": "day",
            "last_rendertime": 1595854579,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "showlocationmarker": true,
            "maxZoom": 8,
            "minZoom": 0,
            "name": "Daytime Render",
            "poititle": "Markers",
            "world": "world",
            "defaultZoom": 1,
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ]
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "coordsBox": true,
            "pan": true,
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "mapType": true,
            "compass": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1595854962"
    }
};
