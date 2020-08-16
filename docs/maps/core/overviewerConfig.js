var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png"
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "path": "day",
            "base": "",
            "zoomLevels": 10,
            "isOverlay": false,
            "imgextension": "png",
            "maxZoom": 10,
            "poititle": "Markers",
            "minZoom": 0,
            "name": "Daytime Render",
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1597557480,
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1597557683",
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "pan": true
        },
        "debug": true
    }
};
