var overviewerConfig = {
    "map": {
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "compass": true,
            "overlays": true,
            "mapType": true,
            "pan": true,
            "spawn": true
        },
        "debug": true,
        "cacheTag": "1599217286",
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "imgextension": "png",
            "base": "",
            "path": "day",
            "name": "Daytime Render",
            "zoomLevels": 10,
            "world": "Core01",
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "last_rendertime": 1599217080,
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "maxZoom": 10
        }
    ]
};
