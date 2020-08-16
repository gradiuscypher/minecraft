var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "defaultZoom": 1,
            "north_direction": 0,
            "showlocationmarker": true,
            "zoomLevels": 8,
            "imgextension": "png",
            "last_rendertime": 1597539379,
            "world": "world",
            "poititle": "Markers",
            "center": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "base": "",
            "minZoom": 0
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1597539764",
        "north_direction": "lower-left",
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "mapType": true,
            "zoom": true
        }
    }
};
