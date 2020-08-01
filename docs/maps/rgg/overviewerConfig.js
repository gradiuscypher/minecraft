var overviewerConfig = {
    "map": {
        "controls": {
            "spawn": true,
            "zoom": true,
            "compass": true,
            "mapType": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true
        },
        "cacheTag": "1596286961",
        "north_direction": "lower-left",
        "debug": true
    },
    "CONST": {
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png"
        }
    },
    "tilesets": [
        {
            "world": "world",
            "path": "day",
            "name": "Daytime Render",
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "last_rendertime": 1596286579,
            "isOverlay": false,
            "north_direction": 0,
            "defaultZoom": 1,
            "minZoom": 0,
            "base": "",
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers"
        }
    ],
    "worlds": [
        "world"
    ]
};
