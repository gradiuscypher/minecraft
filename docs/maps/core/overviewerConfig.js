var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png"
        },
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "isOverlay": false,
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "defaultZoom": 1,
            "path": "day",
            "last_rendertime": 1595941080,
            "maxZoom": 10,
            "name": "Daytime Render",
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "base": "",
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "poititle": "Markers",
            "imgextension": "png"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "coordsBox": true,
            "zoom": true,
            "mapType": true,
            "overlays": true,
            "pan": true,
            "compass": true
        },
        "debug": true,
        "cacheTag": "1595941306"
    }
};
