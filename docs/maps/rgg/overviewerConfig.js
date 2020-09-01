var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        }
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "isOverlay": false,
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "name": "Daytime Render",
            "maxZoom": 8,
            "zoomLevels": 8,
            "base": "",
            "last_rendertime": 1598936179,
            "defaultZoom": 1,
            "poititle": "Markers"
        }
    ],
    "map": {
        "controls": {
            "compass": true,
            "overlays": true,
            "pan": true,
            "zoom": true,
            "spawn": true,
            "coordsBox": true,
            "mapType": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1598936568"
    },
    "worlds": [
        "world"
    ]
};
