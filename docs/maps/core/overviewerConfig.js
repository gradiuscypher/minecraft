var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384
    },
    "tilesets": [
        {
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "zoomLevels": 10,
            "path": "day",
            "minZoom": 0,
            "maxZoom": 10,
            "last_rendertime": 1597910280,
            "showlocationmarker": true,
            "north_direction": 0,
            "defaultZoom": 1,
            "imgextension": "png",
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "world": "Core01"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1597910485",
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "pan": true,
            "zoom": true,
            "mapType": true,
            "compass": true,
            "overlays": true,
            "spawn": true
        }
    }
};
