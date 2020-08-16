var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "north_direction": 0,
            "world": "Core01",
            "showlocationmarker": true,
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "minZoom": 0,
            "defaultZoom": 1,
            "name": "Daytime Render",
            "last_rendertime": 1597568280,
            "maxZoom": 10,
            "path": "day",
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "base": "",
            "zoomLevels": 10,
            "bgcolor": "#1a1a1a",
            "isOverlay": false
        }
    ],
    "map": {
        "cacheTag": "1597568484",
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "coordsBox": true,
            "overlays": true,
            "mapType": true,
            "compass": true
        }
    }
};
