var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "name": "Daytime Render",
            "imgextension": "png",
            "world": "Core01",
            "showlocationmarker": true,
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
            "north_direction": 0,
            "path": "day",
            "zoomLevels": 9,
            "base": "",
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "minZoom": 0,
            "isOverlay": false,
            "last_rendertime": 1594677558,
            "maxZoom": 9,
            "poititle": "Markers"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "overlays": true,
            "spawn": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1594678205"
    },
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0
    }
};
