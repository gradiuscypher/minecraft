var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png"
        },
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "minZoom": 0,
            "world": "Core01",
            "isOverlay": false,
            "zoomLevels": 9,
            "showlocationmarker": true,
            "imgextension": "png",
            "path": "day",
            "north_direction": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "base": "",
            "defaultZoom": 1,
            "poititle": "Markers",
            "maxZoom": 9,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1594893480
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "mapType": true,
            "pan": true,
            "spawn": true,
            "compass": true,
            "overlays": true,
            "zoom": true,
            "coordsBox": true
        },
        "cacheTag": "1594893705"
    }
};
