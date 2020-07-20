var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "zoomLevels": 9,
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ],
            "base": "",
            "north_direction": 0,
            "maxZoom": 9,
            "isOverlay": false,
            "poititle": "Markers",
            "world": "Core01",
            "imgextension": "png",
            "defaultZoom": 1,
            "minZoom": 0,
            "last_rendertime": 1595260680,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ]
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1595260881",
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true,
            "compass": true,
            "zoom": true,
            "spawn": true
        }
    }
};
