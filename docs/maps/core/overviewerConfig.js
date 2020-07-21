var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "zoom": true,
            "overlays": true,
            "compass": true,
            "pan": true,
            "spawn": true,
            "mapType": true,
            "coordsBox": true
        },
        "debug": true,
        "cacheTag": "1595322081"
    },
    "tilesets": [
        {
            "imgextension": "png",
            "north_direction": 0,
            "defaultZoom": 1,
            "last_rendertime": 1595321880,
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "minZoom": 0,
            "zoomLevels": 9,
            "poititle": "Markers",
            "maxZoom": 9,
            "isOverlay": false
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "tileSize": 384
    }
};
