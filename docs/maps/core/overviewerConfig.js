var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "maxZoom": 9,
            "path": "day",
            "last_rendertime": 1594882680,
            "north_direction": 0,
            "name": "Daytime Render",
            "zoomLevels": 9,
            "world": "Core01",
            "minZoom": 0,
            "imgextension": "png",
            "poititle": "Markers",
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "isOverlay": false
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "cacheTag": "1594882911",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "zoom": true,
            "mapType": true,
            "compass": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true
        }
    }
};
