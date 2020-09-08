var overviewerConfig = {
    "map": {
        "controls": {
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "zoom": true,
            "pan": true,
            "compass": true,
            "mapType": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1599606087"
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "zoomLevels": 10,
            "name": "Daytime Render",
            "base": "",
            "maxZoom": 10,
            "imgextension": "png",
            "last_rendertime": 1599605880,
            "showlocationmarker": true,
            "minZoom": 0,
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "defaultZoom": 1,
            "isOverlay": false,
            "path": "day"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0
    }
};
