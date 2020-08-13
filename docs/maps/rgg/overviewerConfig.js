var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3
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
            "maxZoom": 8,
            "path": "day",
            "north_direction": 0,
            "world": "world",
            "last_rendertime": 1597308979,
            "defaultZoom": 1,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "imgextension": "png",
            "zoomLevels": 8
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1597309362",
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "mapType": true,
            "coordsBox": true,
            "pan": true,
            "overlays": true,
            "compass": true,
            "zoom": true
        }
    }
};
