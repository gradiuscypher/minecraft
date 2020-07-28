var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "path": "day",
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "world": "Core01",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "showlocationmarker": true,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "last_rendertime": 1595962680,
            "maxZoom": 10,
            "minZoom": 0,
            "north_direction": 0
        }
    ],
    "map": {
        "controls": {
            "zoom": true,
            "coordsBox": true,
            "spawn": true,
            "overlays": true,
            "pan": true,
            "mapType": true,
            "compass": true
        },
        "cacheTag": "1595962883",
        "debug": true,
        "north_direction": "lower-left"
    }
};
