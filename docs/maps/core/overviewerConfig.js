var overviewerConfig = {
    "CONST": {
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "maxZoom": 9,
            "showlocationmarker": true,
            "minZoom": 0,
            "path": "day",
            "name": "Daytime Render",
            "defaultZoom": 1,
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "world": "Core01",
            "north_direction": 0,
            "imgextension": "png",
            "base": "",
            "zoomLevels": 9,
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1594673999
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "zoom": true,
            "overlays": true,
            "pan": true,
            "compass": true,
            "mapType": true,
            "coordsBox": true,
            "spawn": true
        },
        "cacheTag": "1594674409"
    }
};
