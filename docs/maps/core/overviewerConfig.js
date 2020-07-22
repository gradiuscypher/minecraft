var overviewerConfig = {
    "tilesets": [
        {
            "showlocationmarker": true,
            "isOverlay": false,
            "defaultZoom": 1,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 9,
            "north_direction": 0,
            "maxZoom": 9,
            "path": "day",
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1595397480,
            "poititle": "Markers",
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "name": "Daytime Render",
            "world": "Core01"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "overlays": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true
        },
        "debug": true,
        "cacheTag": "1595397680"
    },
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1
    }
};
