var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "pan": true,
            "mapType": true,
            "overlays": true,
            "spawn": true,
            "compass": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1596441762"
    },
    "tilesets": [
        {
            "path": "day",
            "name": "Daytime Render",
            "showlocationmarker": true,
            "minZoom": 0,
            "zoomLevels": 8,
            "poititle": "Markers",
            "north_direction": 0,
            "isOverlay": false,
            "base": "",
            "world": "world",
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "defaultZoom": 1,
            "maxZoom": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "last_rendertime": 1596441379
        }
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "tileSize": 384
    }
};
