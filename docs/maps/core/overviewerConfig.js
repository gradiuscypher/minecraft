var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png"
        },
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "maxZoom": 10,
            "showlocationmarker": true,
            "isOverlay": false,
            "name": "Daytime Render",
            "world": "Core01",
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "minZoom": 0,
            "zoomLevels": 10,
            "defaultZoom": 1,
            "imgextension": "png",
            "poititle": "Markers",
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1598248680,
            "bgcolor": "#1a1a1a"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "spawn": true,
            "zoom": true,
            "mapType": true,
            "overlays": true,
            "pan": true,
            "compass": true
        },
        "cacheTag": "1598248883",
        "debug": true
    }
};
