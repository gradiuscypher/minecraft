var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERLEFT": 0,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "zoomLevels": 9,
            "poititle": "Markers",
            "isOverlay": false,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "base": "",
            "minZoom": 0,
            "imgextension": "png",
            "last_rendertime": 1594324570,
            "showlocationmarker": true,
            "path": "day",
            "world": "Core01",
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 9,
            "spawn": [
                80,
                96,
                192
            ],
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "mapType": true,
            "pan": true,
            "zoom": true,
            "compass": true,
            "overlays": true,
            "spawn": true
        },
        "debug": true,
        "cacheTag": "1594324975"
    }
};
