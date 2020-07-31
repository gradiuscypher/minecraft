var overviewerConfig = {
    "CONST": {
        "image": {
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "tileSize": 384
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "name": "Daytime Render",
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "minZoom": 0,
            "base": "",
            "last_rendertime": 1596232733,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "imgextension": "png",
            "poititle": "Markers",
            "path": "day",
            "isOverlay": false
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "mapType": true,
            "pan": true,
            "compass": true,
            "overlays": true,
            "spawn": true,
            "zoom": true,
            "coordsBox": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1596232924"
    }
};
