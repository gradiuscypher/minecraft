var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1595599080,
            "isOverlay": false,
            "showlocationmarker": true,
            "path": "day",
            "spawn": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "world": "Core01",
            "maxZoom": 9,
            "minZoom": 0,
            "poititle": "Markers",
            "zoomLevels": 9,
            "north_direction": 0,
            "base": "",
            "imgextension": "png"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1595599286",
        "debug": true,
        "controls": {
            "mapType": true,
            "overlays": true,
            "spawn": true,
            "compass": true,
            "pan": true,
            "coordsBox": true,
            "zoom": true
        }
    }
};
