var overviewerConfig = {
    "map": {
        "controls": {
            "pan": true,
            "compass": true,
            "mapType": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "zoom": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1594195314"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "world": "Core01",
            "last_rendertime": 1594195075,
            "defaultZoom": 1,
            "imgextension": "png",
            "poititle": "Markers",
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "showlocationmarker": true,
            "maxZoom": 9,
            "base": "",
            "zoomLevels": 9,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "isOverlay": false
        }
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2
    }
};
