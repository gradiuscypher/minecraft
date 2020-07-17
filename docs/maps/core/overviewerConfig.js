var overviewerConfig = {
    "CONST": {
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "north_direction": 0,
            "poititle": "Markers",
            "world": "Core01",
            "maxZoom": 9,
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "imgextension": "png",
            "isOverlay": false,
            "zoomLevels": 9,
            "showlocationmarker": true,
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1594954802,
            "base": "",
            "name": "Daytime Render",
            "defaultZoom": 1
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1594954926",
        "debug": true,
        "controls": {
            "spawn": true,
            "zoom": true,
            "coordsBox": true,
            "compass": true,
            "pan": true,
            "overlays": true,
            "mapType": true
        }
    }
};
