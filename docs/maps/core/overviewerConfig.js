var overviewerConfig = {
    "CONST": {
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "tileSize": 384
    },
    "tilesets": [
        {
            "world": "Core01",
            "base": "",
            "minZoom": 0,
            "maxZoom": 10,
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "zoomLevels": 10,
            "imgextension": "png",
            "spawn": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "name": "Daytime Render",
            "poititle": "Markers",
            "last_rendertime": 1599213480,
            "path": "day",
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "pan": true,
            "mapType": true,
            "overlays": true,
            "spawn": true,
            "compass": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1599213685"
    }
};
