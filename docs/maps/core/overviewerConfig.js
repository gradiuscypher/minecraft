var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "path": "day",
            "zoomLevels": 10,
            "base": "",
            "minZoom": 0,
            "maxZoom": 10,
            "center": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "poititle": "Markers",
            "last_rendertime": 1599069480,
            "isOverlay": false,
            "world": "Core01",
            "defaultZoom": 1,
            "north_direction": 0,
            "showlocationmarker": true,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ]
        }
    ],
    "map": {
        "controls": {
            "mapType": true,
            "pan": true,
            "coordsBox": true,
            "zoom": true,
            "overlays": true,
            "compass": true,
            "spawn": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1599069686"
    }
};
