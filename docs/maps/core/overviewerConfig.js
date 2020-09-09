var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "spawn": true,
            "compass": true,
            "zoom": true,
            "overlays": true,
            "pan": true,
            "coordsBox": true
        },
        "debug": true,
        "cacheTag": "1599645687"
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "north_direction": 0,
            "last_rendertime": 1599645480,
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "minZoom": 0,
            "base": "",
            "name": "Daytime Render",
            "path": "day",
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "maxZoom": 10,
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "defaultZoom": 1,
            "isOverlay": false
        }
    ],
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "mapDivId": "mcmap",
        "tileSize": 384
    }
};
