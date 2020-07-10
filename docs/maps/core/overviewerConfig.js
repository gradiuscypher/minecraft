var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERLEFT": 0,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "path": "day",
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "imgextension": "png",
            "maxZoom": 9,
            "world": "Core01",
            "defaultZoom": 1,
            "base": "",
            "poititle": "Markers",
            "last_rendertime": 1594414691,
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 9,
            "isOverlay": false,
            "name": "Daytime Render"
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1594415180",
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "mapType": true,
            "overlays": true
        }
    }
};
