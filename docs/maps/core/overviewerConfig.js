var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "UPPERLEFT": 0,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "minZoom": 0,
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "day",
            "poititle": "Markers",
            "world": "Core01",
            "isOverlay": false,
            "last_rendertime": 1595116680,
            "name": "Daytime Render",
            "base": "",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "showlocationmarker": true
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1595116880",
        "controls": {
            "pan": true,
            "mapType": true,
            "zoom": true,
            "compass": true,
            "overlays": true,
            "coordsBox": true,
            "spawn": true
        },
        "debug": true
    }
};
