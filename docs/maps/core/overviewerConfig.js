var overviewerConfig = {
    "CONST": {
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "zoomLevels": 9,
            "world": "Core01",
            "minZoom": 0,
            "showlocationmarker": true,
            "maxZoom": 9,
            "center": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "name": "Daytime Render",
            "path": "day",
            "last_rendertime": 1595181480,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "isOverlay": false,
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "north_direction": 0
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "pan": true,
            "mapType": true,
            "compass": true,
            "coordsBox": true,
            "zoom": true,
            "overlays": true,
            "spawn": true
        },
        "cacheTag": "1595181681",
        "north_direction": "lower-left"
    }
};
