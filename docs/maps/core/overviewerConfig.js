var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png"
        },
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "maxZoom": 10,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "north_direction": 0,
            "base": "",
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "path": "day",
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "last_rendertime": 1596992280,
            "zoomLevels": 10,
            "minZoom": 0,
            "defaultZoom": 1
        }
    ],
    "map": {
        "cacheTag": "1596992481",
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "pan": true,
            "zoom": true,
            "compass": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true
        },
        "debug": true
    }
};
